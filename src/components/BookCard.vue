<template>
  <router-link :to="'/stories/' + _id" style="text-decoration: none">
    <v-card
      class="pa-3 customMargin h-100 pa-4 rounded-lg ma-2"
      style="
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
        width: 230px;
        min-width: 228px;
      "
    >
      <v-card-text
        class="pa-0 mb-2 cursor-pointer"
        style="font-size: 12px; color: #4e9194"
      >
        {{ mainAuthor?.username }}
      </v-card-text>
      <v-img
        class="cursor-pointer rounded-lg"
        height="160px"
        :src="image"
        cover
        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)"
      >
      </v-img>

      <div class="d-flex justify-space-between align-center my-2">
        <v-card-title
          class="pa-0 text-subtitle-1 cursor-pointer"
          style="width: 130px"
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

      <v-card-text class="pa-0 ellipsis-3-lines">
        {{ content[0].content[0] }}
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script setup>
const { _id, image, title, category, mainAuthor, content } = defineProps([
  "_id",
  "image",
  "title",
  "category",
  "mainAuthor",
  "content",
  "chapterName",
]);
</script>
<style scoped>
.customMargin:not(:last-child) {
  margin-right: 10px;
}

.ellipsis-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.2rem;
}
</style>
