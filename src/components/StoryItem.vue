<template>
  <v-expansion-panels class="customMb">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-row no-gutters>
          <v-col
            class="d-flex align-center justify-center text--secondary"
            style="padding-right: 24px"
            cols="1"
          >
            <div class="text--muted">{{ category }}</div>
          </v-col>
          <v-col cols="8" class="text--secondary">
            <span
              class="font-weight-black"
              style="font-size: 16px; margin-right: 4px"
              >{{ title }}</span
            >
            <span
              v-if="isStoryCompleted"
              style="color: #4e9194; font-size: 14px"
            >
              （已完結）
            </span>
            <br />
            <span
              v-if="extensions && extensions.length > 0"
              class="text--danger my-2 d-inline-block font-weight-black"
              style="font-size: 12px"
              >投票倒數計時：</span
            >
            <br />
            <span>{{ latestChapterName }}</span>
          </v-col>
          <v-col cols="3" class="text-right" style="color: #4e9194">
            <span style="color: #4e9194; margin-right: 10px; font-size: 14px">
              {{ mainAuthor?.username }}
            </span>
            <br />
            <span
              v-if="extensions && extensions.length > 0"
              class="my-2 d-inline-block"
              style="color: black; margin-right: 10px"
              >{{ remainingTime }}</span
            >
            <br />
            <span style="color: black; margin-right: 10px">
              {{
                new Date(createdAt).toLocaleString("zh-TW", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              }}
            </span>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row style="padding: 12px">
          <v-col cols="12" class="mt-1 pa-0" style="font-size: 8px"
            ><h1>
              {{ content.length > 0 ? "最新內容" : "開始故事" }} ({{
                remainingWords === 0 ? "已結束" : `剩餘字數：${remainingWords}`
              }})
            </h1></v-col
          >
          <v-col cols="12">
            <v-row>
              <v-col cols="1" class="d-flex align-center justify-center pa-0">
                <v-btn
                  text
                  :ripple="false"
                  variant="text"
                  class="heart-button pa-0"
                  @click="collectionFunc"
                  :class="{ filled: isFilled }"
                >
                  <v-icon>{{ collectionIcon }}</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="11" class="pl-0">
                <p style="word-wrap: break-word">
                  {{ storyContent.join("") }}
                </p>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="secondary"
                    variant="outlined"
                    @click="openDialog"
                    :disabled="isStoryCompleted"
                  >
                    {{ isStoryCompleted ? "故事已完结" : "延續故事" }}
                  </v-btn>
                </v-card-actions>
                <v-dialog v-model="dialog" max-width="500">
                  <v-form @submit.prevent="submit" :disabled="isSubmitting">
                    <v-card>
                      <v-card-title
                        class="text-center"
                        style="background-color: #97d8c4"
                        >延續故事</v-card-title
                      >
                      <v-card-text class="py-4 pb-0">
                        <v-text-field
                          v-if="canInputNewChapterName"
                          v-model="newChapterName.value.value"
                          class="mb-4"
                          label="輸入章節名稱"
                          hide-details
                          :minlength="1"
                          :maxlength="60"
                        ></v-text-field>
                        <v-text-field
                          v-else
                          v-model="latestChapterName"
                          class="mb-4"
                          label="當前章節名稱"
                          hide-details
                          disabled
                        ></v-text-field>
                        <v-textarea
                          v-model="newChapterContent.value.value"
                          :label="`故事內容（字數：${minWords} - ${maxWords} 字）`"
                          rows="10"
                          :minlength="minWords"
                          :maxlength="maxWords"
                          counter
                          auto-grow
                          :rules="contentRules"
                          style="margin-bottom: 8px"
                        ></v-textarea>
                      </v-card-text>
                      <v-card-actions class="justify-center align-start py-0">
                        <v-btn
                          style="background-color: #4e9194; color: #000000"
                          type="submit"
                          :loading="isSubmitting"
                          >發布</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-dialog>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-expansion-panel-text>

      <template v-if="extensions && extensions.length > 0">
        <v-expansion-panel-text>
          <v-col cols="12" class="mt-1 mb-3 pa-0" style="font-size: 8px">
            <h1>故事投票</h1>
          </v-col>
          <template
            v-for="(extension, index) in extensions.slice(0, 5)"
            :key="index"
          >
            <VoteItem
              :storyId="storyId"
              :extensionId="extension._id"
              :content="extension.content"
              :chapterName="extension.chapterName"
              :author="extension.author"
              :voteCount="extension.voteCount"
              :voteStatus="checkVoteStatus(extension)"
            />
          </template>
        </v-expansion-panel-text>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, toRefs, watch } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import { useApi } from "../composables/axios.js";
import { useSnackbar } from "vuetify-use-dialog";
import VoteItem from "@/components/VoteItem.vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import debounce from "lodash/debounce";

const userStore = useUserStore();
const user = useUserStore();
const router = useRouter();

const userId = userStore.userId;

const emit = defineEmits(["update"]);
const { apiAuth } = useApi();

const remainingTime = ref("");
let intervalId = 0;

const createSnackbar = useSnackbar();

const props = defineProps({
  category: String,
  title: String,
  mainAuthor: [String, Object],
  content: { type: Array, default: () => [] },
  createdAt: String,
  extensions: {
    type: Array,
    default: () => [],
  },
  _id: String,
  voteTime: [String, Number],
  voteStart: [String, Date],
  voteEnd: [String, Date],

  totalWordCount: {
    type: Number,
    required: true,
  },
  extendWordLimit: {
    type: Number,
    default: 50,
  },
  chapters: {
    type: Number,
    default: 1,
  },
  wordsPerChapter: {
    type: Number,
    default: 100,
  },
  currentChapterWordCount: {
    type: Number,
    default: 0,
  },
  chapterWordCount: {
    type: Number,
    default: 0,
  },
  state: {
    type: Boolean,
    default: false,
  },
});

// const { category, title, mainAuthor, content, createdAt, _id: storyId } = props;
const { category, title, mainAuthor, createdAt, _id: storyId } = props;
const { content } = toRefs(props);
const isStoryCompleted = computed(() => props.state);

const latestChapterName = computed(() => {
  if (content.value && content.value.length > 0) {
    return content.value[content.value.length - 1].chapterName || "暫無章節名";
  }
  return "暫無章節名";
});

const minWords = 1;

const maxWords = computed(() => {
  const remainingWordsInChapter =
    props.wordsPerChapter - props.currentChapterWordCount;
  if (remainingWordsInChapter === 0) {
    return props.extendWordLimit;
  }
  if (remainingWordsInChapter < props.extendWordLimit) {
    return remainingWordsInChapter;
  }
  return props.extendWordLimit || 50; // 如果 props 中沒有 extendWordLimit，則默認為 50
});

const contentRules = computed(() => [
  (v) =>
    (v.length >= minWords && v.length <= maxWords.value) ||
    `內容字數需在 ${minWords} 至 ${maxWords.value} 字之間`,
]);

const canInputNewChapterName = computed(() => {
  return props.currentChapterWordCount >= props.wordsPerChapter;
});

const schema = computed(() => {
  const baseSchema = {
    newChapterContent: yup
      .string()
      .required("故事內容必填")
      .min(minWords, `故事內容不能少於 ${minWords} 字`)
      .max(maxWords.value, `故事內容不能超過 ${maxWords.value} 字`),
  };

  if (canInputNewChapterName.value) {
    baseSchema.newChapterName = yup
      .string()
      .required("章節名稱必填")
      .min(1)
      .max(60);
  }

  return yup.object(baseSchema);
});

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    newChapterContent: "",
    newChapterName: "",
  },
});

const newChapterName = useField("newChapterName");
const newChapterContent = useField("newChapterContent");

const dialog = ref(false);

const storyContent = computed(() => {
  if (props.content && props.content.length > 0) {
    const latestContent = props.content[props.content.length - 1];
    return latestContent.content || [];
  }
  return [];
});

const calculateRemainingWords = () => {
  // 計算已完成章節的總字數
  const completedChaptersWordCount =
    (props.content.length - 1) * props.wordsPerChapter;

  // 計算當前章節的字數
  const currentChapterWordCount = props.currentChapterWordCount;

  // 計算已寫的總字數
  const totalWrittenWords =
    completedChaptersWordCount + currentChapterWordCount;

  // 計算剩餘字數
  return Math.max(0, props.totalWordCount - totalWrittenWords);
};

const remainingWords = computed(() => calculateRemainingWords());

const { extensions, voteEnd } = toRefs(props);

const hasCollection = ref(false);
const isFilled = ref(false);

// 檢查收藏狀態
const checkBookmarkStatus = async () => {
  if (!user.isLogin) return;
  try {
    const response = await apiAuth.get(`user/checkBookmark/${storyId}`);
    hasCollection.value = response.data.hasCollection;
    isFilled.value = response.data.hasCollection;
  } catch (error) {
    console.error("檢查收藏狀態失敗", error);
  }
};

const collectionFunc = async () => {
  if (!user.isLogin) {
    createSnackbar({
      text: "請先登入才能收藏",
      snackbarProps: {
        color: "red",
      },
    });
    return; // 未登入則不進行後續操作
  }
  try {
    const response = await apiAuth.post("user/addBookmark", {
      storyId: storyId,
    });
    hasCollection.value = response.data.hasCollection;
    isFilled.value = response.data.hasCollection; // 更新 isFilled 狀態
    createSnackbar({
      text: response.data.hasCollection ? "收藏故事" : "取消收藏",
      snackbarProps: {
        color: "accent",
      },
    });
  } catch (error) {
    console.error("收藏操作失败", error);
    createSnackbar({
      text: "收藏操作失败",
      snackbarProps: {
        color: "red",
      },
    });
  }
};
const collectionIcon = computed(() =>
  isFilled.value ? "mdi-heart" : "mdi-heart-outline"
);

const openDialog = () => {
  if (!user.isLogin) {
    router.push("/login");
  } else {
    dialog.value = true;
  }
};

const hasMerged = ref(false);

const mergeHighestVotedStory = async () => {
  console.log("mergeHighestVotedStory 開始執行");

  try {
    if (!extensions.value.length) {
      console.log("沒有延續故事可供合併");
      emit("update");
      return; // extensions 為空，直接返回，不執行合併
    }
    if (hasMerged.value) {
      emit("update");
      return;
    }
    hasMerged.value = true;

    // 檢查所有延續故事的票數
    const validExtensions = extensions.value.filter(
      (extension) => extension.voteCount.length > 0
    );

    if (!validExtensions.length) {
      console.log("所有延續故事的票數為 0，清空延續故事");
      // 發送請求來清空延續故事
      await apiAuth.patch(`/story/${storyId}/clearExtensions`);
      createSnackbar({
        text: "所有延續故事的票數為 0，已清空延續故事",
        snackbarProps: {
          color: "red",
        },
      });
      emit("update");
      return; // 不再執行後續合併邏輯
    }

    const highestVotedExtension = extensions.value.reduce((prev, current) =>
      current.voteCount.length > prev.voteCount.length ? current : prev
    );

    if (!highestVotedExtension?._id) {
      throw new Error("延續故事未找到");
    }

    // 檢查 currentChapterWordCount 是否達到 wordsPerChapter
    if (props.currentChapterWordCount === props.wordsPerChapter) {
      console.log("當前章節已達到字數上限，準備創建新章節");

      await apiAuth.post(`/story/${storyId}/newChapter`, {
        newContent: highestVotedExtension.content[0]?.latestContent, // 合併最高票數的內容
        newChapterName: highestVotedExtension.chapterName,
      });
      console.log("觸發 newChapter");
      createSnackbar({
        text: "已成功創建新章節並合併最高票數的延續故事",
        snackbarProps: {
          color: "green",
        },
      });
      emit("update");
    } else {
      // 如果字數還未達到上限，執行合併邏輯
      const response = await apiAuth.patch(`/story/${storyId}/merge`, {
        extensionsId: highestVotedExtension._id,
      });

      if (response.data.isCompleted) {
        // 更新故事状态
        props.state = true;
        createSnackbar({
          text: "故事已完结！",
          snackbarProps: {
            color: "success",
          },
        });
      } else {
        createSnackbar({
          text: "延续故事已成功合并到主故事中",
          snackbarProps: {
            color: "green",
          },
        });
      }
    }

    console.log("即將觸發 emit update");
    emit("update");
    console.log("已觸發 emit update");
    console.log("合併操作完成");
  } catch (error) {
    console.error(
      "合併故事時發生錯誤",
      error.response?.data || error.message || error
    );

    createSnackbar({
      text: error?.response?.data?.message || "合併故事時發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  } finally {
    console.log("重置 hasMerged ");
    hasMerged.value = false; // 確保無論成功或失敗後都會重置狀態
    emit("update");
  }
};

let isMergingCalled = false;

const setRemainingTime = async () => {
  const now = Date.now();
  const end = new Date(voteEnd.value).getTime();

  const timeRemaining = end - now;

  if (timeRemaining <= 0) {
    clearInterval(intervalId);
    remainingTime.value = "";

    // 先檢查 extensions 是否存在且有內容
    if (extensions.value.length > 0 && !hasMerged.value && !isMergingCalled) {
      isMergingCalled = true;
      await mergeHighestVotedStory();
      isMergingCalled = false;
    }

    return;
  }

  const totalSeconds = Math.floor(timeRemaining / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts = [];
  if (days > 0) parts.push(`${days} 天`);
  if (hours > 0) parts.push(`${hours} 小時`);
  if (minutes > 0) parts.push(`${minutes} 分`);
  if (seconds > 0) parts.push(`${seconds} 秒`);

  remainingTime.value = parts.join(" ");
};

const startCountdown = () => {
  if (intervalId) clearInterval(intervalId);
  setRemainingTime();
  intervalId = setInterval(setRemainingTime, 1000);
};

onMounted(() => {
  // 檢查收藏狀態
  if (user.isLogin) {
    checkBookmarkStatus();
  }

  // 如果投票已結束，啟動倒計時
  if (voteEnd) {
    startCountdown();
  }
});

const submit = handleSubmit(async (values) => {
  try {
    const isFirstExtension = extensions.value.length === 0;

    await apiAuth.post(`/story/${storyId}`, {
      chapterName: values.newChapterName,
      content: values.newChapterContent,

      voteStart: isFirstExtension ? new Date() : undefined, // 如果是第一個延續故事，設定 voteStart
    });

    createSnackbar({
      text: "延伸內容提交成功",
      snackbarProps: {
        color: "green",
      },
    });

    resetForm();
    dialog.value = false;

    emit("update");
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

watch(
  () => props.content,
  (newContent) => {
    storyContent.value = newContent[0].content; // 當 props 改變時，更新 storyContent
  }
);

watch(voteEnd, (newVoteEnd) => {
  if (newVoteEnd) {
    startCountdown();
  }
});

/**
 * 檢查延伸的投票狀態
 * @param extension 要檢查的的延伸
 */
const checkVoteStatus = (extension) => {
  // 檢查有沒有投過
  let hasVoted = false;
  // 是不是投要檢查的延伸
  let voteThis = false;
  // 迴圈每個故事延伸
  for (const e of extensions.value) {
    // 檢查投票陣列有沒有包含使用者
    const voteidx = e.voteCount.indexOf(userId);
    // 如果有包含，代表有投
    if (voteidx > -1) {
      // 有投過
      hasVoted = true;
      // 如果現在迴圈的 id = 要檢查的 id
      if (e._id === extension._id) {
        // 投這個
        voteThis = true;
      }
    }
  }
  return { hasVoted, voteThis };
};
</script>

<style scoped>
.text--muted {
  color: rgba(0, 0, 0, 0.4);
}
.text--danger {
  color: #b21010;
}

.heart-button .v-icon {
  color: red;
}
.heart-button:hover .v-icon {
  color: white;
}
.heart-button:hover {
  background-color: red;
}
.v-expansion-panel-title {
  border-bottom: 1px solid #e7e7e7;
}

.customMb:not(:last-child) {
  margin-bottom: 12px;
}
</style>
