<template>
  <v-container class="ma-0 bg-white" style="max-width: 100vw">
    <v-container class="w-100" style="padding: 32px">
      <div class="d-flex justify-space-between align-center">
        <h2>故事分類</h2>
        <v-btn @click="resetFilters" class="custom-reset-btn"
          >重設所有篩選</v-btn
        >
      </div>
      <v-divider class="custom-mb-5"></v-divider>
      <v-responsive class="my-5">
        <v-text-field
          v-model="searchQuery"
          label="搜尋作者及書名"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          hide-details
          single-line
          variant="solo"
          clearable
          color="black"
        ></v-text-field>
      </v-responsive>

      <h3>作品分類</h3>
      <v-divider class="custom-mb-5"></v-divider>
      <v-row class="custom-mb-5" no-gutters>
        <v-col v-for="category in categories" :key="category" cols="auto">
          <v-btn
            :class="{
              'custom-btn': true,
              selected: selectedCategory === category,
            }"
            @click="selectCategory(category)"
            class="my-1 mr-1"
            >{{ category }}</v-btn
          >
        </v-col>
      </v-row>

      <h3>作品字數</h3>
      <v-divider class="custom-mb-5"></v-divider>
      <v-row class="custom-mb-5" no-gutters>
        <v-col v-for="wordCount in wordCounts" :key="wordCount" cols="auto">
          <v-btn
            class="mr-1 my-1"
            :class="{
              'custom-btn': true,
              selected: selectedWordCount === wordCount,
            }"
            @click="selectWordCount(wordCount)"
            >{{ wordCount }}</v-btn
          >
        </v-col>
      </v-row>

      <h3>作品狀態</h3>
      <v-divider class="custom-mb-5"></v-divider>
      <v-row class="custom-mb-5" no-gutters>
        <v-col v-for="storyState in storyStates" :key="storyState" cols="auto">
          <v-btn
            class="mr-1"
            :class="{
              'custom-btn': true,
              selected: selectedStoryState === storyState,
            }"
            @click="selectStoryState(storyState)"
            >{{ storyState }}</v-btn
          >
        </v-col>
      </v-row>

      <div class="d-flex justify-space-between align-cente">
        <h3>標籤選擇</h3>
        <v-btn @click="resetLabels" class="custom-reset-btn">重設標籤</v-btn>
      </div>

      <v-divider class="custom-mb-5"></v-divider>
      <v-row class="custom-mb-5" no-gutters>
        <v-chip-group
          column
          multiple
          v-model="selectedLabels"
          selected-class="custom-chipsSelected"
        >
          <v-chip
            v-for="label in chapterLabels"
            :key="label"
            :text="label"
            class="custom-chip d-flex align-center justify-center"
            elevation="2"
            :value="label"
          ></v-chip>
        </v-chip-group>
      </v-row>

      <template v-for="story in paginatedStories" :key="story.id">
        <router-link
          :to="'/stories/' + story._id"
          style="text-decoration: none"
        >
          <v-card
            class="rounded-lg"
            style="
              margin: 15px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(0, 0, 0, 0.2);
            "
          >
            <v-row no-gutters>
              <v-col cols="2" class="pt-4 pb-4 pl-4">
                <v-img
                  class="rounded-lg"
                  :src="story.image"
                  width="200px"
                  height="150px"
                  cover
                ></v-img>
              </v-col>
              <v-col cols="10">
                <v-row no-gutters>
                  <v-col class="mt-4">
                    <v-card-title class="d-flex justify-space-between pt-0">
                      <span>{{ story.title }}</span>
                      <v-chip
                        style="
                          border-radius: 4px;
                          padding: 0px 12px;
                          /* border: 1px solid black; */
                          /* background-color: rgba(151, 216, 196, 0.4); */
                          /* background-color: #67accf; */
                          background-color: #7dbfe0;
                          color: black;
                          font-weight: bold;
                        "
                        >{{ story.category }}</v-chip
                      >
                    </v-card-title>
                  </v-col>
                </v-row>
                <v-card-subtitle>
                  <div>
                    <span class="mr-4" style="font-weight: bolder; color: black"
                      >初創者：{{ story.mainAuthor.username }}</span
                    >
                    <!-- <span style="font-weight: bolder; color: black"
                    >最新延續者：{{ story.latestAuthor }}</span
                  > -->
                  </div>
                  <p class="mb-2" style="font-weight: bolder; color: black">
                    作品字數：{{ story.totalWordCount }}
                  </p>
                  <p class="mb-2" style="font-weight: bolder; color: black">
                    作品狀態：{{ story.state ? "完結" : "連載" }}
                  </p>
                  <p style="font-weight: bolder; color: black">最新內容：</p>
                </v-card-subtitle>
                <v-card-text class="text py-1" style="font-weight: 500">
                  {{
                    story.content[story.content.length - 1]?.content.join("")
                  }}
                </v-card-text>
              </v-col>
            </v-row>
            <v-divider style="color: black"></v-divider>
            <v-card-actions class="px-4 py-1">
              <v-icon class="mr-2">mdi-label-outline</v-icon>
              <template v-for="label in story.chapterLabels">
                <v-chip
                  class="mr-2"
                  style="
                    border-radius: 4px;
                    background-color: rgba(151, 216, 196, 0.4);
                  "
                  >#{{ label }}</v-chip
                >
              </template>
            </v-card-actions>
          </v-card>
        </router-link>
      </template>

      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        @input="onPageChange"
        class="mt-5"
        density="compact"
      ></v-pagination>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { definePage } from "vue-router/auto";
import { useApi } from "@/composables/axios";

definePage({
  meta: {
    title: `界筆 ｜ 故事分類`,
    login: false,
    admin: false,
  },
});

const selectedLabels = ref([]);
const searchQuery = ref("");
const selectedCategory = ref("");
const selectedWordCount = ref("");
const selectedStoryState = ref("");
const currentPage = ref(1);
const itemsPerPage = 3;

const { api } = useApi();
const stories = ref([]);

const categories = [
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
];

const wordCounts = [
  "不限",
  "50字以下",
  "1000字以下",
  "2萬字以內",
  "2萬-5萬字",
  "5萬-10萬字",
  "10萬-30萬字",
  "30萬-60萬字",
  "60萬-100萬字",
  "100萬字以上",
];

const storyStates = ["不限", "連載", "完結"];

const chapterLabels = [
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
];

const loadStories = async () => {
  try {
    const { data } = await api.get("/story");
    stories.value = data.result.data || [];
  } catch (error) {
    console.error(error);
    stories.value = [];
  }
};
loadStories();

const selectCategory = (category) => {
  selectedCategory.value = selectedCategory.value === category ? "" : category;
};

const selectWordCount = (wordCount) => {
  selectedWordCount.value =
    selectedWordCount.value === wordCount ? "" : wordCount;
};

const selectStoryState = (storyState) => {
  selectedStoryState.value =
    selectedStoryState.value === storyState ? "" : storyState;
};

const resetLabels = () => {
  selectedLabels.value = [];
};

const parseWordCount = (wordCount) => {
  switch (wordCount) {
    case "50字以下":
      return { min: 0, max: 50 };
    case "1000字以下":
      return { min: 51, max: 1000 };
    case "2萬字以內":
      return { min: 1001, max: 20000 };
    case "2萬-5萬字":
      return { min: 20001, max: 50000 };
    case "5萬-10萬字":
      return { min: 50001, max: 100000 };
    case "10萬-30萬字":
      return { min: 100001, max: 300000 };
    case "30萬-60萬字":
      return { min: 300001, max: 600000 };
    case "60萬-100萬字":
      return { min: 600001, max: 1000000 };
    case "100萬字以上":
      return { min: 1000001, max: Infinity };
    default:
      return { min: 0, max: Infinity };
  }
};

const filteredStories = computed(() => {
  return stories.value.filter((story) => {
    if (!story) return false;

    const searchItem = searchQuery.value ? searchQuery.value.toLowerCase() : "";

    const matchesSearchTitle = story.title
      ? story.title.toLowerCase().includes(searchItem)
      : false;

    const matchesSearchAuthor = story.mainAuthor?.username
      ? story.mainAuthor.username.toLowerCase().includes(searchItem)
      : false;

    const matchesCategory = selectedCategory.value
      ? story.category === selectedCategory.value
      : true;

    const wordCountRange = parseWordCount(selectedWordCount.value);
    const matchesWordCount = selectedWordCount.value
      ? story.totalWordCount >= wordCountRange.min &&
        story.totalWordCount <= wordCountRange.max
      : true;

    const storyStateOp = story.state ? "完結" : "連載";
    const matchesState = selectedStoryState.value
      ? selectedStoryState.value === "不限" ||
        storyStateOp === selectedStoryState.value
      : true;
    const matchesLabels = selectedLabels.value.length
      ? selectedLabels.value.every((label) =>
          story.chapterLabels.includes(label)
        )
      : true;

    return (
      (matchesSearchTitle || matchesSearchAuthor) &&
      matchesCategory &&
      matchesWordCount &&
      matchesState &&
      matchesLabels
    );
  });
});

const resetFilters = () => {
  searchQuery.value = "";
  selectedLabels.value = [];
  selectedCategory.value = "";
  selectedWordCount.value = "";
  selectedStoryState.value = "";
};

// 計算總頁數
const totalPages = computed(() => {
  return Math.ceil(filteredStories.value.length / itemsPerPage);
});

// 計算當前頁面的故事
const paginatedStories = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredStories.value.slice(start, start + itemsPerPage);
});

// 當頁碼改變時的處理函數
const onPageChange = (page) => {
  currentPage.value = page;
};
</script>
<style scoped>
.custom-btn {
  border-radius: 8px;
  background-color: white;
  font-weight: bold;
  border: 1px solid black;
  color: black;
}
.custom-btn:hover {
  background-color: #67accf !important;
  color: black !important;
}
.selected {
  background-color: #67accf;
  color: black;
}

.custom-chip {
  border-radius: 8px;
  margin: 5px;
  padding: 2px 10px;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  font-weight: bold;
}

.custom-chip:hover {
  background-color: rgba(151, 216, 196, 0.4) !important;
  color: black !important;
}

.custom-mb-5 {
  margin-top: 5px;
  margin-bottom: 30px;
}

.custom-reset-btn {
  padding: 1px 2px;
  border: 1px solid black;
  color: black;
  font-size: 16px;
  font-weight: bold;
  height: fit-content;
}

.custom-chipsSelected {
  background-color: rgba(151, 216, 196, 0.4);
  color: black;
}

::v-deep .v-chip--variant-tonal .v-chip__underlay {
  background: none;
}
</style>
