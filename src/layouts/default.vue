<template>
  <v-app>
    <NavBar />
    <v-main :class="{ 'auth-page': isAuthPage }">
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer v-if="showFooter" />
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

const route = useRoute();
const showFooter = computed(() => route.meta.hideFooter !== true);
const isAuthPage = computed(() => {
  const authRoutes = ["/login", "/register"];
  return authRoutes.includes(route.name);
});
</script>
<style lang="scss">
@import "../styles/_variable.scss";
// 將登入、註冊頁的 v-main padding 設為 0
.v-main.auth-page {
  padding: 0 !important;
}
</style>
