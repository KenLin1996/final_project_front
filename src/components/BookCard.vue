<template>
  <v-card class="pa-3 customMargin" width="220">
    <router-link :to="'/stories/' + _id">
      <v-img class="cursor-pointer" height="150px" :src="image" cover> </v-img>
    </router-link>
    <div class="d-flex justify-space-between align-center my-1">
      <v-card-title
        class="pa-0 text-subtitle-1 cursor-pointer"
        @click="navigateTo('/123')"
      >
        {{ title }}
      </v-card-title>
      <v-chip
        density="compact"
        color="primary"
        label
        style="font-size: 12px; padding: 2px 6px"
      >
        {{ category }}
      </v-chip>
    </div>

    <v-card-subtitle class="pa-0">{{
      content[content.length - 1].chapterName
    }}</v-card-subtitle>

    <v-card-text
      class="pa-0 mb-1 cursor-pointer"
      style="font-size: 12px; color: #4e9194"
      @click="navigateTo('/1234')"
    >
      {{ mainAuthor?.username }}
    </v-card-text>

    <v-card-text class="pa-0">
      {{ content[0].content[0] }}
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const { _id, image, title, category, mainAuthor, content } = defineProps([
  "_id",
  "image",
  "title",
  "category",
  "mainAuthor",
  "content",
  "chapterName",
]);

const navigateTo = (path) => {
  router.push(path);
};
</script>
<style scoped>
.customMargin:not(:last-child) {
  margin-right: 10px;
}
</style>
