<template>
  <v-row>
    <v-col cols="12">
      <v-card
        class="rounded-0 px-10 py-auto"
        height="200px"
        color="surface-variant"
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        cover
        elevation="5"
      >
        <v-col>
          <v-card-title class="text-h4 font-weight-bold">
            歡迎來到界筆！
          </v-card-title>
          <v-card-text
            class="font-weight-bold pa-0 py-2 px-4 mb-2"
            style="font-size: 24px; letter-spacing: 12px"
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
    <v-container style="padding: 32px">
      <v-row class="justify-space-between">
        <v-col cols="12" class="pb-0">
          <h2>追蹤故事</h2>
        </v-col>
        <v-divider class="mb-3"></v-divider>
        <v-col cols="12" class="d-flex flex-column justify-space-between">
          <StoryItem
            v-for="story in stories"
            :key="story._id"
            v-bind="story"
            @update="loadStories"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>

  <v-container style="padding: 32px">
    <v-row class="justify-space-between">
      <v-col cols="12" class="pb-0">
        <h2>熱門故事</h2>
      </v-col>
      <v-divider class="mb-3"></v-divider>
      <v-col cols="12" class="d-flex flex-row justify-start">
        <BookCard
          v-for="story in popularStories"
          :key="story._id"
          v-bind="story"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-container style="padding: 32px">
    <v-row class="justify-space-between">
      <v-col cols="12" class="pb-0">
        <h2>最新故事</h2>
      </v-col>
      <v-divider class="mb-3"></v-divider>
      <v-col cols="12" class="d-flex flex-column justify-space-between">
        <!-- <StoryItem
          v-for="story in newestStories"
          :key="story._id"
          v-bind="story"
          @update="loadStories"
        /> -->
      </v-col>
    </v-row>
  </v-container>

  <!-- 不確定要不要這個 -->
  <!-- <v-container style="padding: 32px">
    <v-row class="justify-space-between">
      <v-col cols="12" class="pb-0">
        <h2>所有故事</h2>
      </v-col>
      <v-divider class="mb-3"></v-divider>
      <v-col cols="12" class="d-flex flex-column justify-space-between">
        <BookCard v-for="story in stories" :key="story._id" v-bind="story" />
      </v-col>
    </v-row>
  </v-container> -->

  <v-container style="padding: 32px">
    <v-row class="justify-space-between">
      <v-col cols="12" class="pb-0">
        <h2>完結故事</h2>
      </v-col>
      <v-divider class="mb-3"></v-divider>
      <v-col cols="12" class="d-flex flex-row justify-space-between">
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
      </v-col>
    </v-row>
  </v-container>

  <v-container style="padding: 32px">
    <v-row class="justify-space-between">
      <v-col cols="12" class="pb-0">
        <h2>創作資源區</h2>
      </v-col>
      <v-divider class="mb-3"></v-divider>
      <v-col cols="12" class="d-flex flex-row justify-space-between py-0">
        <!-- icon -->
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

const { api } = useApi();
const stories = ref([]);
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

const popularStories = ref([]);
const newestStories = ref([]);
const completedStories = ref([]);

const loadStories = async () => {
  try {
    const { data } = await api.get("/story");
    stories.value = data.result.data; // 更新 stories

    const popularRes = await api.get("/story/getPopularStories");
    popularStories.value = popularRes.data.result.data;

    const newestRes = await api.get("/story/getNewestStories");
    newestStories.value = newestRes.data.result.data;

    const completedRes = await api.get("/story/getCompletedStories");
    completedStories.value = completedRes.data.result.data;
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
