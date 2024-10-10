<template>
  <v-container
    class="d-flex flex-column justify-space-between pa-8"
    style="min-height: 480px"
  >
    <!-- 章節和章節內容 -->
    <div>
      <h2>{{ currentChapter?.chapterName }}</h2>
      <p class="my-4 white-space-pre-line word-wrap-break-word">
        {{ currentChapterContent }}
      </p>
    </div>
    <!-- 換頁按鈕 -->
    <div class="text-center">
      <v-btn
        class="mx-2"
        @click="navigateChapter(-1)"
        :disabled="!hasPreviousChapter"
        >上一章</v-btn
      >
      <v-btn class="mx-2" :to="`/stories/${storyId}`" color="primary"
        >回故事頁</v-btn
      >
      <v-btn
        class="mx-2"
        @click="navigateChapter(1)"
        :disabled="!hasNextChapter"
        >下一章</v-btn
      >
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useApi } from "@/composables/axios";
import { definePage } from "vue-router/auto";

// 定義頁面元數據
definePage({
  meta: {
    title: `界筆 | 故事`,
    login: false,
    admin: false,
  },
});

// 初始化 API、route、router
const { api } = useApi();
const route = useRoute();
const router = useRouter();

// 定義響應式變量和計算屬性
const story = ref({ content: [] });
const storyId = computed(() => route.params.id);
const articleId = computed(() => route.params.articleId);

// 獲取當前章節資訊
const currentChapter = computed(() =>
  story.value.content.find((c) => c._id === articleId.value)
);

// 獲取當前章節內容
const currentChapterContent = computed(
  () => currentChapter.value?.content.join("") || ""
);

// 獲取當前章節索引
const currentChapterIndex = computed(() =>
  story.value.content.findIndex((c) => c._id === articleId.value)
);

// 檢查是否有上一章和下一章
const hasPreviousChapter = computed(() => currentChapterIndex.value > 0);
const hasNextChapter = computed(
  () => currentChapterIndex.value < story.value.content.length - 1
);

// 章節導航函數
const navigateChapter = (direction) => {
  const newIndex = currentChapterIndex.value + direction;

  if (newIndex >= 0 && newIndex < story.value.content.length) {
    const newChapterId = story.value.content[newIndex]._id;

    router.push(`/stories/${storyId.value}/articles/${newChapterId}`);
  }
};

// 加載故事數據
const loadStory = async () => {
  try {
    const { data } = await api.get(`/story/${storyId.value}`);
    story.value = data.result;
    // 更新頁面標題
    document.title = `界筆 | ${
      currentChapter.value?.chapterName || "錯誤章節"
    }`;
  } catch (error) {
    console.error("加載故事失敗:", error);
  }
};

// 在組件創建時加載故事
loadStory();
</script>

<style scoped>
.white-space-pre-line {
  white-space: pre-line;
}
.word-wrap-break-word {
  word-wrap: break-word;
}
</style>
