<template>
  <v-app-bar color="#4E9194" class="position-fixed" :elevation="5">
    <v-container class="d-flex align-center" fluid>
      <!-- 網站 logo -->
      <router-link to="/">
        <v-img
          class="mx-3"
          width="50"
          aspect-ratio="1/1"
          cover
          src="https://img.icons8.com/?size=100&id=zVbUsD7GnSYl&format=png&color=000000"
        ></v-img>
      </router-link>

      <!-- 首頁 -->
      <v-btn text to="/" :active="false" :ripple="false" variant="plain"
        >首頁</v-btn
      >

      <!-- 動態生成的菜單 -->
      <template v-for="menu in menus" :key="menu.title">
        <v-menu open-on-hover transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="white" :ripple="false" variant="plain">
              {{ menu.title }}
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-2 text-center" density="compact" :lines="false" nav>
            <v-list-item
              class="px-5 py-0 my-0 custom-menu-item"
              v-for="(item, i) in menu.items"
              :key="i"
              :to="item.to"
              link
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <v-spacer></v-spacer>

      <!-- 註冊/登入按鈕 -->
      <template v-if="!user.isLogin && !isAuthPage">
        <v-btn
          outlined
          border
          variant="elevated"
          color="#F4B942"
          size="default"
          prepend-icon="mdi-login"
          class="mx-2"
          to="/login"
        >
          登入/註冊
        </v-btn>
      </template>

      <!-- 通知 -->
      <template v-else>
        <v-menu open-on-hover transition="slide-y-transition">
          <!-- <template v-slot:activator="{ props }">
            <v-btn icon="mdi-bell" v-bind="props" class="mr-2"></v-btn>
          </template> -->
          <v-list class="pa-2 text-center" density="compact" :lines="false" nav>
            <v-list-item
              class="px-5 py-0 my-0 custom-menu-item"
              v-for="(notification, i) in notifications"
              :key="i"
              :to="notification.to"
              link
            >
              <v-list-item-title>{{ notification.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- 會員頭像 -->
        <template v-if="user.isLogin">
          <v-menu open-on-hover transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props" class="d-flex">
                <v-avatar color="secondary" class="">
                  <v-img :src="user.avatar"></v-img>
                </v-avatar>
              </v-btn>
            </template>
            <v-list
              class="pa-2 text-center"
              density="compact"
              :lines="false"
              nav
            >
              <v-list-item
                class="px-5 py-0 my-0 custom-menu-item"
                v-for="(setting, i) in settings"
                :key="i"
                :to="setting.to"
                link
                @click="handleClick(setting)"
              >
                <v-list-item-title>{{ setting.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </template>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import { useRoute, useRouter } from "vue-router";

const user = useUserStore();
const createSnackbar = useSnackbar();
const route = useRoute();
const router = useRouter();

const isAuthPage = computed(() => {
  return route.path === "/login" || route.path === "/register";
});

const menus = computed(() => {
  return [
    {
      title: "故事",
      items: [
        { to: "/createStory", text: "創建新故事" },
        { to: "/category", text: "故事分類" },
      ],
    },
    {
      title: "創作資源",
      items: [{ to: "/articleArea", text: "創作指引" }],
    },
  ];
});

const notifications = computed(() => [
  { to: "/notification1", text: "通知一" },
  { to: "/notification2", text: "通知二" },
]);

const settings = computed(() => [
  { to: "/management", text: "故事管理" },
  { to: "/setting", text: "設定" },
  { text: "登出", click: logout },
]);

const logout = async () => {
  await user.logout();
  createSnackbar({
    text: "登出成功",
    snackbarProps: {
      color: "green",
    },
  });
  router.push("/");
};

const handleClick = (setting) => {
  if (setting.click) {
    setting.click();
  }
};
</script>

<style scoped>
.custom-menu-item :deep(.v-list-item-title) {
  font-size: 14px;
}
</style>
