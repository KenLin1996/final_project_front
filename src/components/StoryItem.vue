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
            <br />
            <span
              v-if="extensions && extensions.length > 0"
              class="text--danger my-2 d-inline-block font-weight-black"
              style="font-size: 12px"
              >投票倒數計時：</span
            >
            <br />
            <span>{{ chapterName }}</span>
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
              {{ content[0].latestContent ? "最新內容" : "開始故事" }}
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
                  @click="toggleHeart"
                  :class="{ filled: isFilled }"
                >
                  <v-icon>{{ icon }}</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="11" class="pl-0">
                <p style="word-wrap: break-word">
                  <!-- {{
                    content[0].latestContent
                      ? content[0].latestContent
                      : content[0]?.content.join("")
                  }} -->

                  <!-- 以下為測試用 -->
                  <!-- {{ content[0].content.join("") }} -->
                  {{ storyContent.join("") }}
                </p>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="secondary"
                    variant="outlined"
                    @click="openDialog"
                  >
                    延續故事
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
                          v-model="newChapterName.value.value"
                          class="mb-4"
                          label="輸入章節名稱"
                          hide-details
                          :minlength="1"
                          :maxlength="60"
                        ></v-text-field>
                        <v-textarea
                          v-model="newChapterContent.value.value"
                          :label="`故事內容（字數：${minWords} - ${maxWords} 字`"
                          rows="10"
                          :minlength="`${minWords}`"
                          :maxlength="`${maxWords}`"
                          counter
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
            <!-- <VoteItem
              :storyId="storyId"
              :extensionId="extension._id"
              :content="extension.content"
              :chapterName="extension.chapterName"
              :author="extension.author"
              :voteCount="extension.voteCount"
              :voteStatus="checkVoteStatus(extension)"
              @update="loadStories"
            /> -->

            <!-- 以下 VoteItem 測試用 -->
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
// import mittt from "@/mitt.js";

const userStore = useUserStore();
const userId = userStore.userId;

const emit = defineEmits(["update"]);
const { apiAuth, api } = useApi();

const remainingTime = ref("");
let intervalId = 0;

const createSnackbar = useSnackbar();

const minWords = ref(10);
const maxWords = ref(50);

const schema = yup.object({
  newChapterName: yup.string().required("章節名稱必填").min(1).max(60),
  newChapterContent: yup
    .string()
    .required("故事內容必填")
    .min(minWords.value, `故事內容不能少於 ${minWords.value} 字`)
    .max(maxWords.value, `故事內容不能超過 ${maxWords.value} 字`),
});

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    newChapterContent: "",
  },
});

const newChapterName = useField("newChapterName");
const newChapterContent = useField("newChapterContent");

const isFilled = ref(false);
const dialog = ref(false);

const props = defineProps(
  [
    "category",
    "title",
    "chapterName",
    "mainAuthor",
    "content",
    "createdAt",
    "extensions",
    "_id",
    "voteTime",
    "voteStart",
    "voteEnd",
  ],
  {
    extensions: {
      type: Array,
      default: () => [],
    },
  }
);

const {
  category,
  title,
  chapterName,
  mainAuthor,
  content,
  createdAt,
  _id: storyId,
} = props;

const storyContent = ref(content ? content[0].content : []);

const { extensions, voteEnd } = toRefs(props);

const toggleHeart = () => {
  isFilled.value = !isFilled.value;
};
const icon = computed(() =>
  isFilled.value ? "mdi-heart" : "mdi-heart-outline"
);

// let isLoading = false;
// const loadStories = async () => {
//   // if (isLoading) return;
//   // isLoading = true;
//   try {
//     const { data } = await api.get("/story");
//     stories.value.splice(0, stories.value.length, ...data.result.data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     isLoading = false; // 加載完成後重置
//   }
// };

const openDialog = () => {
  dialog.value = true;
};

const contentRules = computed(() => [
  (v) =>
    (v.length >= minWords.value && v.length <= maxWords.value) ||
    `內容字數需在 ${minWords.value} 至 ${maxWords.value} 字之間`,
]);

const hasMerged = ref(false);

const mergeHighestVotedStory = async () => {
  if (extensions.value.length === 0) {
    console.log("沒有延續故事可供合併");
    return; // extensions 為空，直接返回，不執行合併
  }
  if (hasMerged.value) {
    return;
  }
  hasMerged.value = true;

  try {
    const highestVotedExtension = extensions.value.reduce((prev, current) =>
      current.voteCount.length > prev.voteCount.length ? current : prev
    );

    await apiAuth.patch(`/story/${storyId}/merge`, {
      extensionsId: highestVotedExtension._id,
    });

    createSnackbar({
      text: "延續故事已成功合併到主故事中",
      snackbarProps: {
        color: "green",
      },
    });

    console.log("即將觸發 emit update");
    emit("update");
    console.log("已觸發 emit update");
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

    hasMerged.value = false;
  }
};

//以下 loadStories() 測試用
// const loadStories = async () => {
//   try {
//     const { data } = await api.get("/story");
//     stories.value = data.result.data; // 確保 stories.value 為最新資料
//     console.log("Updated stories:", stories.value);
//   } catch (error) {
//     console.log("Error loading stories:", error);
//   }
// };

const setRemainingTime = async () => {
  const now = Date.now();
  const end = new Date(voteEnd.value).getTime();

  const timeRemaining = end - now;

  if (timeRemaining <= 0) {
    clearInterval(intervalId);
    remainingTime.value = "投票已結束";

    await mergeHighestVotedStory();
    // await clearExtensionsStory();

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
  intervalId = setInterval(() => {
    setRemainingTime();
  }, 1000);
};

onMounted(() => {
  if (voteEnd) {
    startCountdown();
  }
});

const submit = handleSubmit(async (values) => {
  try {
    console.log(storyId);
    await apiAuth.post(`/story/${storyId}`, {
      chapterName: values.newChapterName,
      content: values.newChapterContent,
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
  clearInterval(intervalId);
});

watch(
  () => props.content,
  (newContent) => {
    storyContent.value = newContent[0].content; // 當 props 改變時，更新 storyContent
  }
);

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
