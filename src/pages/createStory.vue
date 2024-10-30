<template>
  <v-container style="padding: 32px">
    <h2>創作新故事</h2>
    <v-divider class="mb-5"></v-divider>
    <v-form
      @submit.prevent="submit"
      :disabled="isSubmitting"
      style="padding: 10px 20px"
    >
      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <div class="me-2">
            <v-icon
              class="me-2"
              v-if="requiredFields.includes('totalWordCount')"
              style="color: red"
              size="12px"
              >mdi-asterisk</v-icon
            >
            <v-label class="me-6 mb-0">總字數</v-label>
          </div>
          <div class="d-flex align-center w-75 h-100">
            <v-text-field
              type="number"
              class="flex-grow-1"
              v-model="totalWordCount.value.value"
              :error-messages="totalWordCount.errorMessage.value"
              :maxlength="5000000"
              required
            ></v-text-field>

            <div style="height: 52%">
              <v-tooltip location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon
                    class="mdi mdi-lightbulb-outline"
                    v-bind="props"
                    style="color: darkorange"
                  ></v-icon>
                </template>
                <div class="" style="padding: 12px">
                  <p><strong>詩</strong></p>
                  <ul>
                    <li>短詩：50 字以内</li>
                  </ul>
                  <p><strong>短品</strong></p>
                  <ul>
                    <li>短篇散文：500 ~ 5,000 字</li>
                  </ul>
                  <p><strong>小說</strong></p>
                  <ul>
                    <li>短篇：1,000 ~ 20,000 字</li>
                    <li>長篇：超過 50,000 字</li>
                  </ul>
                </div>
              </v-tooltip>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('title')"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">故事名稱</v-label>
          <v-text-field
            class="flex-grow-1"
            v-model="title.value.value"
            :error-messages="title.errorMessage.value"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('chapterName')"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">章節名稱</v-label>
          <v-text-field
            class="flex-grow-1"
            v-model="chapterName.value.value"
            :error-messages="chapterName.errorMessage.value"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            v-if="requiredFields.includes('content')"
            class="me-2"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">起始故事</v-label>
          <v-textarea
            class="flex-grow-1"
            :counter="startingContentLimit"
            v-model="content.value.value"
            :error-messages="content.errorMessage.value"
            :maxlength="startingContentLimit"
            @input="validateContentLength"
            auto-grow
            required
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('category')"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">投票時間</v-label>
          <v-select
            class="flex-grow-1"
            hide-details
            v-model="voteTime.value.value"
            :error-messages="voteTime.errorMessage.value"
            :items="voteTimeOptions"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('category')"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">作品分類</v-label>
          <v-select
            class="flex-grow-1"
            hide-details
            v-model="category.value.value"
            :error-messages="category.errorMessage.value"
            :items="categoryOptions"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('chapterLabels')"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">作品標籤</v-label>
          <v-select
            class="flex-grow-1"
            multiple
            chips
            hide-details
            v-model="chapterLabels.value.value"
            :error-messages="chapterLabels.errorMessage.value"
            :items="labelOptions"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('state')"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">故事狀態</v-label>
          <v-radio-group
            class="d-flex align-center flex-grow-2"
            row
            hide-details
            v-model="state.value.value"
            :error-messages="state.errorMessage.value"
          >
            <div class="d-flex align-center">
              <v-radio label="連載中" :value="false"></v-radio>
            </div>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('show')"
            style="color: red"
            size="12px"
            >mdi-asterisk</v-icon
          >
          <v-label class="me-4 mb-0">顯示方式</v-label>
          <v-radio-group
            class="d-flex align-center flex-grow-1"
            row
            hide-details
            v-model="show.value.value"
            :error-messages="show.errorMessage.value"
          >
            <div class="d-flex align-center">
              <v-radio label="公開" :value="true" class="me-4"></v-radio>
              <v-radio label="隱藏" :value="false"></v-radio>
            </div>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-icon
            class="me-2"
            v-if="requiredFields.includes('fileRecords')"
            style="color: red"
            size="12px"
            icon="mdi-asterisk"
          ></v-icon>
          <v-label class="me-4 mb-0">封面圖片</v-label>
          <vue-file-agent
            v-model="fileRecords"
            v-model:raw-model-value="rawFileRecords"
            accept="image/jpeg,image/png"
            deletable
            max-size="1MB"
            help-text="選擇檔案或拖曳到這裡"
            :error-text="{
              type: '檔案格式不支援',
              size: '檔案大小不能超過 1MB',
            }"
            ref="fileAgent"
          ></vue-file-agent>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
            type="submit"
            :loading="isSubmitting"
            style="background-color: #4e9194; color: #ffffff"
            >發布</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script setup>
import { definePage } from "vue-router/auto";
import { ref, onMounted, computed } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import { useApi } from "../composables/axios.js";
import { useSnackbar } from "vuetify-use-dialog";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const user = useUserStore();

const toCreateStoryPage = () => {
  if (!user.isLogin) {
    // 如果使用者未登入，跳轉到登入頁面
    router.push("/login");
  } else {
    // 如果已登入，跳轉到創作頁面
    router.push("/createStory");
  }
};

onMounted(() => {
  toCreateStoryPage();
});

definePage({
  meta: {
    title: `界筆 ｜ 創建新故事`,
    login: false,
    admin: false,
  },
});

const { apiAuth } = useApi();
const createSnackbar = useSnackbar();

const fileAgent = ref(null);
const fileRecords = ref([]);
const rawFileRecords = ref([]);
const requiredFields = [
  "totalWordCount",
  "title",
  "chapterName",
  "content",
  "category",
  "chapterLabels",
  "state",
  "show",
  "fileRecords",
];

const schema = yup.object({
  totalWordCount: yup
    .number()
    .required("文章總字數必填")
    .typeError("文章總字數必須是數字")
    .positive("文章總字數必須是正數")
    .integer("文章總字數必須是整數")
    .min(1, "文章總字數不能為 0")
    .max(5000000, "總字數不能超過 500 萬字"),
  title: yup.string().required("故事名稱必填"),
  chapterName: yup.string().required("章節名稱必填"),
  content: yup
    .string()
    .required("內容必填")
    .test(
      "max-length",
      function () {
        return `不能超過 ${startingContentLimit.value} 個字`;
      },
      function (value) {
        return value.length <= startingContentLimit.value;
      }
    ),

  category: yup.string().required("作品分類必填"),
  chapterLabels: yup
    .array()
    .min(1, "至少需要選擇一個標籤")
    .required("作品標籤必填"),
  state: yup.boolean().required("狀態必填"),
  show: yup.boolean().required("顯示方式必填"),
  voteTime: yup.number().required("投票時間必填").min(10),
});

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    totalWordCount: 0,
    title: "",
    chapterName: "",
    content: "",
    voteTime: 1000 * 5 * 60,
    category: "",
    chapterLabels: [],
    state: false,
    show: true,
  },
});

const title = useField("title");
const chapterName = useField("chapterName");
const voteTime = useField("voteTime");
const category = useField("category");
const chapterLabels = useField("chapterLabels");
const state = useField("state");
const show = useField("show");
const totalWordCount = useField("totalWordCount");
const content = useField("content");

// const startingContentLimit = computed(() => {
//   const totalWords = Number(totalWordCount.value.value);
//   return Math.max(1, Math.floor(totalWords / 10));
// });
const startingContentLimit = computed(() => {
  const totalWords = Number(totalWordCount.value.value);
  return Math.max(1, Math.floor(totalWords / 5));
});

const validateContentLength = () => {
  if (content.value.value.length > startingContentLimit.value) {
    content.value.value = content.value.value.slice(
      0,
      startingContentLimit.value
    );
  }
};

const categoryOptions = ref([
  "愛情",
  "奇幻玄幻",
  "科幻未來",
  "驚悚推理",
  "靈異恐怖",
  "武俠仙俠",
  "都市",
  "心情抒發",
  "LGBTQ+",
  "勵志成長",
  "幽默諷喻",
  "影視",
  "同人",
  "網遊",
  "歷史傳記",
  "軍事戰爭",
  "生活風格",
  "親子共享",
  "藝術設計",
  "科普",
  "商業理財",
  "文藝評論",
  "其他",
]);
const labelOptions = ref([
  "不限",
  "戀愛",
  "異界",
  "校園",
  "戰鬥",
  "冒險",
  "魔法",
  "異能",
  "超能力",
  "超自然",
  "重生",
  "穿越",
  "爽文/輕鬆",
  "搞笑",
  "虐心",
  "復仇",
  "靈異神怪",
  "暗黑",
  "恐怖",
  "奇幻",
  "異世界轉生",
  "逆襲",
  "未來世界",
  "英雄",
  "百合",
  "同志",
  "日常",
  "科幻",
  "成長",
  "家庭",
  "友情",
  "偵探",
  "職場",
  "青梅竹馬",
  "後宮",
  "妖怪",
  "節操",
  "二創",
  "悲劇",
  "喜劇",
  "異國",
  "輕小說",
  "心理",
  "神話",
  "蒸汽龐克",
  "時間旅行",
  "機器人",
  "人工智能",
  "動物",
  "快樂",
  "悲傷",
  "焦慮",
  "平靜",
  "懷舊",
  "希望",
  "孤獨",
  "愛",
  "失落",
  "感激",
  "興奮",
  "迷惘",
  "安慰",
  "熱情",
  "自在",
]);

const voteTimeOptions = ref([
  { title: "10 秒", value: 1000 * 10 },
  { title: "20 秒", value: 1000 * 20 },
  { title: "5 分鐘", value: 1000 * 5 * 60 },
  { title: "10 分鐘", value: 1000 * 10 * 60 },
  { title: "30 分鐘", value: 1000 * 30 * 60 },
  { title: "1 小時", value: 1000 * 60 * 60 },
  { title: "2 小時", value: 1000 * 2 * 60 * 60 },
  { title: "4 小時", value: 1000 * 4 * 60 * 60 },
  { title: "8 小時", value: 1000 * 8 * 60 * 60 },
  { title: "12 小時", value: 1000 * 12 * 60 * 60 },
  { title: "24 小時", value: 1000 * 24 * 60 * 60 },
  { title: "36 小時", value: 1000 * 36 * 60 * 60 },
]);

const clearForm = () => {
  resetForm();
  fileAgent.value.deleteFileRecord();
};

const calculateStoryProperties = (totalWords) => {
  let chapters, wordsPerChapter, extendWordLimit;

  if (totalWords <= 1000) {
    chapters = Math.ceil(totalWords / 200);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 50;
  } else if (totalWords <= 40000) {
    chapters = Math.ceil(totalWords / 3000);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 300;
  } else if (totalWords <= 100000) {
    chapters = Math.ceil(totalWords / 5000);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 500;
  } else if (totalWords <= 300000) {
    chapters = Math.ceil(totalWords / 7000);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 1000;
  } else if (totalWords <= 600000) {
    chapters = Math.ceil(totalWords / 10000);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 2000;
  } else if (totalWords <= 1000000) {
    chapters = Math.ceil(totalWords / 15000);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 3000;
  } else if (totalWords <= 2000000) {
    chapters = Math.ceil(totalWords / 20000);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 4000;
  } else if (totalWords <= 5000000) {
    chapters = Math.ceil(totalWords / 30000);
    wordsPerChapter = Math.ceil(totalWords / chapters);
    extendWordLimit = 5000;
  } else {
    throw new Error("總字數超出範圍 (最多 5,000,000 字)。");
  }

  return { chapters, wordsPerChapter, extendWordLimit };
};

const calculateInitialWordCount = (content) => {
  return content.length;
};

const submit = handleSubmit(async (values) => {
  values.totalWordCount = Number(values.totalWordCount);
  const storyProperties = calculateStoryProperties(values.totalWordCount);
  const initialWordCount = calculateInitialWordCount(values.content);

  if (fileRecords.value[0]?.error) {
    console.log("文件錯誤：", fileRecords.value[0].error);
    return;
  }

  try {
    const fd = new FormData();
    fd.append("totalWordCount", values.totalWordCount);
    fd.append("title", values.title);
    fd.append("chapterName", values.chapterName);
    fd.append("content", values.content);
    fd.append("voteTime", values.voteTime);
    fd.append("category", values.category);
    for (const label of values.chapterLabels) {
      fd.append("chapterLabels", label);
    }
    fd.append("state", values.state);
    fd.append("show", values.show);
    if (fileRecords.value.length > 0) {
      fd.append("image", fileRecords.value[0].file);
    }

    fd.append("chapters", storyProperties.chapters);
    fd.append("wordsPerChapter", storyProperties.wordsPerChapter);
    fd.append("extendWordLimit", storyProperties.extendWordLimit);
    fd.append("currentChapterWordCount", initialWordCount);

    console.log("FormData 內容：", Object.fromEntries(fd));

    const response = await apiAuth.post("/story", fd);
    console.log("API 響應：", response.data);

    createSnackbar({
      text: "新增成功",
      snackbarProps: {
        color: "green",
      },
    });
    clearForm();
  } catch (error) {
    console.error("提交表單時發生錯誤:", error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
});
</script>

<style scoped>
.v-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.v-selection-control {
  flex: none;
}
</style>
