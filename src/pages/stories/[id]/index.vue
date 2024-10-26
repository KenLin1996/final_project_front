<template>
  <v-container style="padding: 32px">
    <v-card class="mb-4 rounded-lg pa-4">
      <v-row class="pa-4 align-center">
        <v-col cols="3">
          <v-img
            :src="story.image"
            alt="書籍封面"
            aspect-ratio="1"
            style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)"
          ></v-img>
        </v-col>

        <v-col cols="9">
          <v-row>
            <v-col cols="12">
              <h3 class="blue--text text-h5">{{ story.title }}</h3>
            </v-col>
            <v-col cols="12">
              <p>
                <strong>作者：</strong>
                <span class="blue--text">{{ story.mainAuthor?.username }}</span>
              </p>
            </v-col>
            <v-col cols="12">
              <p><strong>類別：</strong>{{ story.category }}</p>
            </v-col>
            <v-col cols="12">
              <p>
                <strong>狀態：</strong>
                <span class="orange--text">{{
                  story.state ? "完結" : "連載"
                }}</span>
              </p>
            </v-col>
            <v-col cols="12">
              <p>
                <strong>總字數：</strong>
                <span class="grey--text">{{ story.totalWordCount }}</span>
              </p>
            </v-col>
            <v-col cols="12" class="d-flex">
              <v-chip
                class="mr-2 text-white"
                label
                style="background-color: #ef5350; color: white"
                >收藏數 {{ story.collectionNum }}</v-chip
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <div class="my-2">
      <v-btn
        v-if="story.content[0]?._id"
        class="mr-4"
        style="background-color: #2883d3; color: white"
        :to="'/stories/' + story._id + '/articles/' + story.content[0]?._id"
        >開始閱讀</v-btn
      >
      <v-btn
        class="mr-4"
        @click="openDialog(item)"
        style="background-color: #2883d3; color: white"
        >章節列表</v-btn
      >
      <v-btn
        style="background-color: #2883d3; color: white"
        @click="collectionFunc"
        :text="hasCollection ? `取消收藏` : `收藏故事`"
      ></v-btn>
    </div>

    <v-card class="pa-4 rounded-lg" style="margin-top: 32px">
      <h3 class="">起始故事</h3>
      <v-divider class="my-2"></v-divider>
      <p class="py-4">{{ story.content[0]?.content?.[0] }}</p>
      <template v-for="chapterLabel in story.chapterLabels">
        <v-chip density="compact" color="primary" :label="true" class="mr-2">
          {{ chapterLabel }}
        </v-chip>
      </template>
    </v-card>
    <v-card class="pa-4 rounded-lg" style="margin-top: 32px">
      <h3 class="">故事投票</h3>
      <v-divider class="my-6"></v-divider>
      <StoryItem
        :key="story._id"
        v-bind="story"
        :isExpanded="expandedStoryId === story._id"
        @toggle="toggleStory(story._id)"
        @update="load"
      />
    </v-card>

    <!-- 留言區的元件 -->
    <Message />
  </v-container>
  <v-dialog v-model="chaptersListDia" width="400" scrollable>
    <v-card prepend-icon="mdi-book" title="章節列表">
      <v-divider></v-divider>
      <template v-for="(item, index) in story.content" :key="index">
        <v-card-text class="px-4" style="max-height: 400px">
          <v-list-item
            :key="index"
            :to="'/stories/' + story._id + '/articles/' + item._id"
            class="chapter-link"
          >
            {{ item.chapterName }}
          </v-list-item>
        </v-card-text>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { definePage } from "vue-router/auto";
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import { useUserStore } from "@/stores/user";
import mittt from "@/mitt";
import StoryItem from "@/components/StoryItem.vue";
import Message from "@/components/Message.vue";

definePage({
  meta: {
    title: `界筆 | 故事`,
    login: false,
    admin: false,
  },
});

const props = defineProps({
  story: Object,
  hasCollection: Boolean,
});

const { api, apiAuth } = useApi();
const user = useUserStore();

const route = useRoute();
const createSnackbar = useSnackbar();
const hasCollection = ref(props.hasCollection);

const story = ref({
  _id: "",
  image: "",
  title: "",
  mainAuthor: "",
  category: "",
  chapterLabels: "",
  state: true,
  totalWordCount: 0,
  collectionNum: 0,
  followNum: 0,
  content: [],
});

const load = async () => {
  try {
    const { data } = await api.get("/story/" + route.params.id);

    story.value._id = data.result._id;
    story.value.image = data.result.image;
    story.value.title = data.result.title;
    story.value.mainAuthor = data.result.mainAuthor;
    story.value.category = data.result.category;
    story.value.chapterLabels = data.result.chapterLabels;
    story.value.state = data.result.state;
    story.value.totalWordCount = data.result.totalWordCount;
    story.value.collectionNum = data.result.collectionNum;
    story.value.followNum = data.result.followNum;

    // 投票新增的
    story.value.storyId = data.result._id;
    story.value.createdAt = data.result.createdAt;
    story.value.extensions = data.result.extensions;

    story.value.voteTime = data.result.voteTime;
    story.value.voteStart = data.result.voteStart;
    story.value.voteEnd = data.result.voteEnd;

    story.value.chapters = data.result.chapters;
    story.value.currentChapterWordCount = data.result.currentChapterWordCount;
    story.value.wordsPerChapter = data.result.wordsPerChapter;
    story.value.extendWordLimit = data.result.extendWordLimit;

    if (Array.isArray(data.result.content) && data.result.content.length > 0) {
      story.value.content = data.result.content;
    } else {
      story.value.content = []; // 處理空數據的情況
    }

    document.title = "界筆 | " + story.value.title;
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
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
      storyId: story.value._id,
    });
    hasCollection.value = response.data.hasCollection;

    // 更新收藏數
    if (response.data.hasCollection) {
      story.value.collectionNum++;
    } else {
      story.value.collectionNum = Math.max(0, story.value.collectionNum - 1);
    }

    createSnackbar({
      text: response.data.hasCollection ? "收藏故事" : "取消收藏",
      snackbarProps: {
        color: "green",
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

// 檢查收藏狀態
const checkBookmarkStatus = async () => {
  if (!user.isLogin) return;
  try {
    const response = await apiAuth.get("user/checkBookmark/" + route.params.id);
    hasCollection.value = response.data.hasCollection;
  } catch (error) {
    console.error("檢查收藏狀態失敗", error);
  }
};

const expandedStoryId = ref(null); // 用來追蹤當前展開的故事 ID

const toggleStory = (storyId) => {
  // 如果點擊的故事已經展開，則關閉它；否則展開新的故事
  expandedStoryId.value = expandedStoryId.value === storyId ? null : storyId;
};

// 章節列表的 v-dialog 控制
const chaptersListDia = ref(false);
const item = ref([]);
const openDialog = () => {
  chaptersListDia.value = true;
};

onMounted(async () => {
  await load();
  mittt.on("updateStory", load);
  if (user.isLogin) {
    checkBookmarkStatus();
  }
});

onUnmounted(() => {
  mittt.off("updateStory", load);
});
</script>

<style scoped></style>
