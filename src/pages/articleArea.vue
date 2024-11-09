<template>
  <div class="w-100 d-flex align-center justify-center" style="padding: 32px">
    <v-container
      class="ma-0 d-flex"
      style="padding: 32px; max-width: 100%; min-height: 70vh"
    >
      <!-- 創作指引 -->
      <v-row class="d-flex justify-center align-center">
        <v-col cols="12">
          <v-card class="pa-3 rounded-lg" style="min-height: 60vh">
            <v-card-title>創作指引</v-card-title>
            <v-divider></v-divider>

            <!-- 創作流程指導 -->
            <v-card-subtitle class="mt-4">創作流程指導</v-card-subtitle>

            <v-list dense>
              <v-list-group
                v-for="item in creativeProcessGuidance"
                :key="item.title"
                :value="item.title"
              >
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="item.title"></v-list-item>
                </template>

                <v-list-item
                  v-for="subItem in item.subItems"
                  :key="subItem.title"
                  :title="subItem.title"
                  :href="subItem.link"
                  target="_blank"
                ></v-list-item>
              </v-list-group>
            </v-list>

            <!-- 創作技巧 -->
            <v-card-subtitle class="mt-4">創作技巧</v-card-subtitle>
            <v-list dense>
              <v-list-group
                v-for="item in creativeSkills"
                :key="item.title"
                :value="item.title"
              >
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="item.title"></v-list-item>
                </template>

                <v-list-item
                  v-for="subItem in item.subItems"
                  :key="subItem.title"
                  :title="subItem.title"
                  :href="subItem.link"
                  target="_blank"
                ></v-list-item>
              </v-list-group>
            </v-list>

            <!-- 常見問題與解答 -->
            <v-card-subtitle class="mt-4">常見問題與解答</v-card-subtitle>
            <v-list dense>
              <v-list-group
                v-for="item in faq"
                :key="item.title"
                :value="item.title"
              >
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="item.title"></v-list-item>
                </template>

                <v-list-item
                  v-for="subItem in item.subItems"
                  :key="subItem.title"
                  :title="subItem.title"
                  :href="subItem.link"
                  target="_blank"
                ></v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { ref } from "vue";

definePage({
  meta: {
    title: `界筆 ｜ 創作指引`,
    login: false,
    admin: false,
  },
});

const creativeProcessGuidance = ref([
  {
    title: "選題與構思",
    subItems: [
      {
        title: "選題，要做什麼準備？",
        link: "https://www.enago.tw/academy/how-to-select-a-research-topic/",
      },
      {
        title: "如何寫好專題報告？訂題、資料蒐集到確立內文架構",
        link: "https://www.awec.ntu.edu.tw/%E5%A6%82%E4%BD%95%E5%AF%AB%E5%A5%BD%E5%B0%88%E9%A1%8C%E5%A0%B1%E5%91%8A%EF%BC%9F%E8%A8%82%E9%A1%8C%E3%80%81%E8%B3%87%E6%96%99%E8%92%90%E9%9B%86%E5%88%B0%E7%A2%BA%E7%AB%8B%E5%85%A7%E6%96%87%E6%9E%B6/?lang=en",
      },
    ],
  },
  {
    title: "故事架構",
    subItems: [
      {
        title: "關於故事的結構：V、倒V、N、W型故事結構",
        link: "https://www.domorenovel.com/story-structure/",
      },
    ],
  },
]);

const creativeSkills = ref([
  {
    title: "寫作技巧",
    subItems: [
      {
        title:
          "作文怎麼寫？寫作技巧／作文格式／段落架構／萬用句型 國小到職場都適用的作文技巧！",
        link: "https://www.parenting.com.tw/article/5092784",
      },
    ],
  },
]);

const faq = ref([
  {
    title: "創作困境",
    subItems: [
      {
        title: "五個突破創作困境的方法",
        link: "https://vocus.cc/article/610e608afd897800014084c2",
      },
    ],
  },
]);
</script>

<style scoped>
.v-list-item {
  margin: 0px 12px;
}
</style>
