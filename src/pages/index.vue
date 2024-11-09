<template>
  <v-container class="ma-0 bg-white" style="max-width: 100vw">
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-card
          class="rounded-0 px-10 py-auto rounded-lg"
          height="200px"
          color="surface-variant"
          image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          cover
          elevation="5"
        >
          <v-col>
            <v-card-title
              class="text-h4 font-weight-bold"
              style="font-size: 2rem"
            >
              歡迎來到界筆！
            </v-card-title>
            <v-card-text
              class="font-weight-bold pa-0 pb-2 px-4 mb-2"
              style="font-size: 1rem; letter-spacing: 12px"
            >
              探索和創作無限可能的故事
            </v-card-text>
            <div class="pa-0 px-4">
              <v-btn
                class="font-weight-black mr-3 px-4"
                variant="elevated"
                color="#CCB78E"
                @click="handleCreateStory"
                to="/createStory"
              >
                立即創作
              </v-btn>
              <v-btn
                class="font-weight-black px-4"
                outlined
                border
                variant="elevated"
                style="
                  color: #ccb78e;
                  border: 1px solid #ccb78e;
                  background-color: rgba(0, 0, 0, 0.47);
                "
                to="/category"
              >
                探索故事
              </v-btn>
            </div>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <template v-if="user.isLogin">
      <template v-if="bookmarkStories.length > 0">
        <v-container style="padding: 32px; max-width: 98%" class="">
          <v-row class="justify-space-between">
            <v-col cols="12" class="pb-0">
              <h2>收藏故事</h2>
            </v-col>
            <v-divider class="mb-3"></v-divider>
            <v-col cols="12" class="d-flex flex-column justify-space-between">
              <StoryItem
                v-for="story in bookmarkStories"
                :key="story._id"
                v-bind="story"
                :isExpanded="expandedStoryId === story._id"
                @toggle="toggleStory(story._id)"
                @update="loadStories"
              />
            </v-col>
          </v-row>
        </v-container>
      </template>
    </template>

    <v-container style="padding: 32px; max-width: 98%">
      <v-row class="justify-space-between">
        <v-col cols="12" class="pb-0">
          <h2>熱門故事</h2>
        </v-col>
        <v-divider class="mb-3"></v-divider>
        <v-col cols="12" class="d-flex flex-row align-center justify-center">
          <v-row class="w-100 d-flex align-center justify-center">
            <BookCard
              v-for="story in popularStories"
              :key="story._id"
              v-bind="story"
          /></v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="padding: 32px; max-width: 98%">
      <v-row class="justify-space-between">
        <v-col cols="12" class="pb-0">
          <h2>最新故事</h2>
        </v-col>
        <v-divider class="mb-3"></v-divider>
        <v-col cols="12" class="d-flex flex-column justify-space-between">
          <StoryItem
            v-for="story in newestStories"
            :key="story._id"
            v-bind="story"
            @update="loadStories"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container style="padding: 32px; max-width: 98%">
      <v-row class="justify-space-between">
        <v-col cols="12" class="pb-0">
          <h2>完結故事</h2>
        </v-col>
        <v-divider class="mb-3"></v-divider>
        <v-col cols="12" class="d-flex flex-row align-center justify-center">
          <v-row class="w-100 d-flex align-center justify-space-between">
            <template v-if="completedStories.length > 0">
              <BookCard
                v-for="story in completedStories"
                :key="story._id"
                v-bind="story"
              />
            </template>
            <template v-else>
              <div class="">尚未有已完結故事</div>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container style="padding: 32px; max-width: 98%">
      <v-row class="justify-space-between">
        <v-col cols="12" class="pb-0">
          <h2>創作資源區</h2>
        </v-col>
        <v-divider class="mb-3"></v-divider>
        <v-col cols="12" class="d-flex flex-row justify-space-between py-0">
          <v-list
            class="d-flex justify-space-between w-100 py-0"
            style="background-color: transparent"
          >
            <v-list-item
              v-for="(item, i) in resources"
              :key="i"
              :to="item.to"
              link
            >
              <template v-slot:prepend>
                <v-icon size="80" :color="item.color">
                  {{ item.icon }}
                </v-icon>
              </template>
              <v-list-item-title
                style="font-size: 20px; font-weight: bold"
                v-text="item.title"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { definePage } from "vue-router/auto";
import { useApi } from "@/composables/axios";
import BookCard from "../components/BookCard.vue";
import StoryItem from "@/components/StoryItem.vue";
import mittt from "@/mitt";
import { useUserStore } from "@/stores/user";

definePage({
  meta: {
    title: "界筆",
    login: false,
    admin: false,
  },
});
const user = useUserStore();

const { api, apiAuth } = useApi();
const router = useRouter();

const handleCreateStory = () => {
  if (!user.isLogin) {
    // 如果使用者未登入，跳轉到登入頁面
    router.push("/login");
  } else {
    // 如果已登入，跳轉到創作頁面
    router.push("/createStory");
  }
};

// const stories = ref([]);
const bookmarkStories = ref([]);
const popularStories = ref([]);
const newestStories = ref([]);
const completedStories = ref([]);

const expandedStoryId = ref(null); // 用來追蹤當前展開的故事 ID

const toggleStory = (storyId) => {
  // 如果點擊的故事已經展開，則關閉它；否則展開新的故事
  expandedStoryId.value = expandedStoryId.value === storyId ? null : storyId;
};

const loadStories = async () => {
  try {
    // 獲取所有故事數據
    // const { data } = await api.get("/story");
    // stories.value = data.result.data;

    // 獲取熱門、最新和完結故事
    const [popularRes, newestRes, completedRes] = await Promise.all([
      api.get("/story/getPopularStories"),
      api.get("/story/getNewestStories"),
      api.get("/story/getCompletedStories"),
    ]);
    popularStories.value = popularRes.data.result.data;
    newestStories.value = newestRes.data.result.data;
    completedStories.value = completedRes.data.result.data;

    // 如果已登入，則加載收藏故事
    if (user.isLogin) {
      const bookmarkRes = await apiAuth.get("/story/getBookmarkStories");
      bookmarkStories.value = bookmarkRes.data.result.data;
    } else {
      bookmarkStories.value = []; // 未登入時清空收藏故事
    }
  } catch (error) {
    console.error("Failed to load stories:", error);
  }
};

const resources = [
  {
    to: "/articleArea",
    icon: "mdi-lightbulb-on-outline",
    title: "創作指引",
    color: "#F9A825",
  },
];

onMounted(() => {
  loadStories();
  mittt.on("updateStory", loadStories);
});

onUnmounted(() => {
  mittt.off("updateStory", loadStories);
});
</script>
