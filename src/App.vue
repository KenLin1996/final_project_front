<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<!-- <script setup>
//
</script> -->
<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (token) {
    userStore.setToken(token); // 將 token 存入 store
    // 可選：根據需要調用 API 以獲取用戶詳細資料
    // 清除 URL 中的 token
    urlParams.delete("token");
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, document.title, newUrl);
  }
});
</script>
