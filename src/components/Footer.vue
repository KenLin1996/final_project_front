<template>
  <v-footer
    class="d-flex flex-column align-center justify-center text-center"
    color="#4E9194"
    density="comfortable"
  >
    <div
      class="d-flex justify-space-between align-center flex-wrap px-6 py-0 w-100"
    >
      <div
        class="d-flex align-center justify-center justify-sm-start pt-0 order-2 order-sm-1 w-100 w-sm-33"
        style="font-size: 14px"
      >
        COPYRIGHT &#xa0; &copy; &#xa0; {{ new Date().getFullYear() }} &#xa0;
        <strong>界筆</strong>
      </div>
      <div
        class="d-flex align-center justify-center justify-sm-end order-1 order-sm-2 w-100 w-sm-33"
      >
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon.name"
          class="mx-4"
          variant="text"
          density="compact"
          @click="navigateToLink(icon.link)"
        ></v-btn>
      </div>
    </div>
  </v-footer>
</template>
<script setup>
import { ref } from "vue";

const icons = ref([
  { name: "mdi-instagram", link: "https://www.example.com/instagram" },
  { name: "mdi-facebook", link: "https://www.example.com/facebook" },
  { name: "mdi-linkedin", link: "https://www.example.com/linkedin" },
]);

const navigateToLink = (link) => {
  window.open(link, "_blank");
};
</script>
