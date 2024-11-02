<template>
  <v-app>
    <NavBar />
    <v-main :class="{ 'auth-page': isAuthPage }" class="main-content">
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer v-if="showFooter" style="max-height: 120px" />
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
<style lang="scss" scoped>
@import "../styles/_variable.scss";
// 將登入、註冊頁的 v-main padding 設為 0
.v-main.auth-page {
  padding: 0 !important;
}

.main-content {
  min-height: calc(100vh - 64px - (v-if(showFooter, 120px, 0)));
}

// .navHeight {
//   height: 64px;
// }
</style>
