<template style="margin: auto">
  <v-container style="padding: 32px">
    <v-breadcrumbs :items="items" style="padding: 0px 12px 16px 12px">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>

    <div class="d-flex">
      <div
        class="sidebar"
        style="
          flex: 1;
          margin-right: 12px;
          background-color: white;
          border-radius: 12px;
        "
      >
        <v-list class="py-0" dense>
          <h3 class="mb-3">故事管理</h3>
          <v-list-item class="d-flex justify-center">
            <v-tabs v-model="tab" color="primary" direction="vertical">
              <v-tab
                class="my-1"
                prepend-icon="mdi-book"
                text="我的故事"
                value="option-1"
              ></v-tab>
              <v-tab
                class="my-1"
                prepend-icon="mdi-book"
                text="我的延續"
                value="option-2"
              ></v-tab>
              <v-tab
                class="my-1"
                prepend-icon="mdi-bookmark"
                text="收藏的故事"
                value="option-3"
              ></v-tab>

              <v-tab
                class="my-1"
                prepend-icon="mdi-vote"
                text="已投票的故事"
                value="option-4"
              ></v-tab>
            </v-tabs>
          </v-list-item>
        </v-list>
      </div>

      <div
        class="content"
        style="flex: 9; background-color: white; border-radius: 12px"
      >
        <v-tabs-window v-model="tab">
          <!-- 我的故事 -->
          <v-tabs-window-item value="option-1">
            <div class="d-flex align-center justify-space-between mb-4">
              <h3>我的故事</h3>
              <v-btn
                prepend-icon="mdi-plus"
                size="small"
                to="/createStory"
                style="background-color: #2883d3; color: white"
                >新增故事</v-btn
              >
            </div>
            <v-divider></v-divider>
            <v-card flat>
              <v-card-text>
                <v-data-table
                  v-model:items-per-page="tableItemsPerPage"
                  v-model:sort-by="tableSortBy"
                  v-model:page="tablePage"
                  :headers="myStoryHeaders"
                  :items="myStoryItems"
                  :items-length="tableItemsLength"
                  :items-per-page-options="itemsPerPageOptions"
                  @update:items-per-page="tableLoadMyStoryItems(false)"
                  @update:sort-by="tableLoadMyStoryItems(false)"
                  @update:page="tableLoadMyStoryItems(false)"
                  density="comfortable"
                  item-key="name"
                >
                  <template #[`item.image`]="{ value }">
                    <v-img :src="value" max-height="100px" class="py-1"></v-img>
                  </template>
                  <template #[`item.state`]="{ item }">
                    <span>{{ item.state ? "完結" : "連載" }}</span>
                  </template>

                  <!-- 顯示 -->
                  <template #[`item.show`]="{ item }">
                    <span>{{ item.show ? "公開" : "隱藏" }}</span>
                  </template>
                  <template #[`item.actions`]="{ item }">
                    <v-btn
                      text
                      to=""
                      :active="false"
                      :ripple="false"
                      variant="tonal"
                      @click="openDialog(item)"
                    >
                      編輯
                    </v-btn>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <!-- 我的延續 -->
          <v-tabs-window-item value="option-2">
            <div class="d-flex align-center justify-space-between mb-4">
              <h3>我的延續</h3>
            </div>
            <v-divider></v-divider>
            <v-card flat>
              <v-card-text class="pa-0 px-1 py-3">
                <v-data-table
                  :headers="ExtensionHeaders"
                  :items="exStoryItems"
                  :items-per-page-options="itemsPerPageOptions"
                  density="comfortable"
                  item-key="name"
                >
                  <template #item.storyTitle="{ item }">
                    <span>{{ item.storyTitle }}</span>
                  </template>
                  <template #item.storyStatus="{ item }">
                    <span>{{ item.storyStatus }}</span>
                  </template>
                  <template #item.extensionContent="{ item }">
                    <span>{{ item.extensionContent }}</span>
                  </template>
                  <template #item.voteCount="{ item }">
                    <span>{{ item.voteCount }}</span>
                  </template>
                  <template #item.actions="{ item }">
                    <v-btn
                      text
                      :active="false"
                      :ripple="false"
                      variant="tonal"
                      @click="openDeleteDialog(item)"
                      style="background-color: #f24e1e; color: white"
                    >
                      刪除
                    </v-btn>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <!-- 收藏的故事 -->
          <v-tabs-window-item value="option-3">
            <div class="d-flex align-center justify-space-between mb-4">
              <h3>收藏的故事</h3>
            </div>
            <v-divider></v-divider>
            <div class="d-flex align-center justify-space-between py-2">
              <v-btn
                size="small"
                @click="removeBookmarkFunc"
                :disabled="selected.length === 0"
                style="background-color: #ffcdd2"
                >取消收藏</v-btn
              >

              <v-select
                density="comfortable"
                label="故事分類"
                hide-details
                max-width="150px"
                :items="['全部', ...allCategories]"
                v-model="selectedCategory"
              ></v-select>
            </div>

            <v-data-table
              v-model="selected"
              :headers="bookmarkHeaders"
              :items="bookmarkStories"
              :items-per-page-options="itemsPerPageOptions"
              item-value="._id"
              show-select
            >
              <template #item.completion="{ item }">
                <span>{{ item.completion }}%</span>
                <!-- 顯示完成度 -->
              </template>
              <template #[`item.state`]="{ item }">
                <span>{{ item.state ? "完結" : "連載" }}</span>
              </template>
            </v-data-table>
          </v-tabs-window-item>

          <!-- 已投票的故事 -->
          <v-tabs-window-item value="option-4">
            <div class="d-flex align-center justify-space-between mb-4">
              <h3>已投票的故事</h3>
            </div>
            <v-divider></v-divider>
            <v-data-table
              density="comfortable"
              item-key="name"
              :headers="voteStoryHeaders"
              :items="voteStories"
              :items-per-page-options="itemsPerPageOptions"
            >
              <template #[`item.actions`]="{ item }">
                <v-btn
                  text
                  @click="removeVoteRec(item)"
                  :active="false"
                  :ripple="false"
                  variant="tonal"
                  style="background-color: #f24e1e; color: white"
                >
                  刪除紀錄
                </v-btn>
              </template>
            </v-data-table>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </div>
  </v-container>
  <v-dialog v-model="dialog.open" persistent width="500">
    <v-form @submit.prevent="submit" :disabled="isSubmitting">
      <v-card>
        <div
          class="d-flex align-center justify-space-between"
          style="padding: 24px 24px 0px 24px"
        >
          <v-card-title class="px-0">編輯</v-card-title>
          <v-btn
            style="background-color: #f24e1e; color: white"
            @click="deleteItem()"
            >刪除故事</v-btn
          >
        </div>

        <v-card-text>
          <v-label class="me-4 mb-1">更改書名</v-label>

          <v-text-field
            v-model="title.value.value"
            :error-messages="title.errorMessage.value"
          ></v-text-field>

          <v-label class="me-4 mb-0">故事狀態</v-label>
          <v-radio-group
            class="d-flex align-center"
            row
            hide-details
            v-model="state.value.value"
            :error-messages="state.errorMessage.value"
          >
            <div class="d-flex align-center">
              <v-radio label="完結" :value="true" class="me-4"></v-radio>
              <v-radio
                label="連載中"
                :value="false"
                style="flex: none"
              ></v-radio>
            </div>
          </v-radio-group>

          <v-label class="me-4 mb-0">顯示方式</v-label>
          <v-radio-group
            class="d-flex align-center"
            row
            hide-details
            v-model="show.value.value"
            :error-messages="show.errorMessage.value"
          >
            <div class="d-flex align-center">
              <v-radio label="公開" :value="true" class="me-4"></v-radio>
              <v-radio label="隱藏" :value="false"></v-radio>
            </div>
          </v-radio-group>

          <v-label class="me-4 mb-1">更換封面</v-label>
          <vue-file-agent
            v-model="fileRecords"
            v-model:raw-model-value="rawFileRecords"
            accept="image/jpeg,image/png"
            deletable
            max-size="1MB"
            help-text="選擇檔案或拖曳到這裡"
            :error-text="{
              type: '檔案格式不支援',
              size: '檔案大小不能超過 1MB',
            }"
            ref="fileAgent"
          ></vue-file-agent>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" :loading="isSubmitting" @click="closeDialog"
            >取消</v-btn
          >
          <v-btn color="green" type="submit" :loading="isSubmitting"
            >送出</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
  <v-dialog v-model="deleteDialog" width="auto">
    <v-card max-width="500" prepend-icon="mdi-update" title="刪除紀錄">
      <v-card-text>
        刪除後，故事內容並不受影響，只移除您的個人紀錄！想提醒您這些紀錄承載了過去的肯定和成長，不論多少都是您在界筆珍貴的足跡。<br />您確定要刪除嗎？
      </v-card-text>
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn
          class="ms-auto"
          text="取消"
          color="red"
          @click="deleteDialog = false"
        ></v-btn>
        <v-btn
          class="ms-auto"
          text="刪除"
          color="green"
          @click="handleDelete()"
        ></v-btn>
      </template> </v-card
  ></v-dialog>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { ref } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";

definePage({
  meta: {
    title: "界筆 ｜ 故事管理",
    login: false,
    admin: false,
    hideFooter: true,
  },
});

const items = ref([
  { title: "首頁", disabled: false, href: "/" },
  { title: "故事管理", disabled: true, href: "/management" },
]);

const { apiAuth } = useApi();
const createSnackbar = useSnackbar();

const tab = ref("option-1");

const tableItemsPerPage = ref(10);
const tableSortBy = ref([{ key: "createdAt", order: "desc" }]);
const tablePage = ref(1);
const tableItemsLength = ref(0);

// 項目每頁選項，不包括 -1、100
const itemsPerPageOptions = [
  { value: 10, title: "10" },
  { value: 25, title: "25" },
  { value: 50, title: "50" },
  { value: 100, title: "100" },
];

const fileRecords = ref([]);
const rawFileRecords = ref([]);

const fileAgent = ref(null);

const dialog = ref({
  // 編輯對話框的狀態
  open: false,
  // 紀錄編輯中的 id，沒有就是新增，有就是編輯
  id: "",
});

const openDialog = (item) => {
  dialog.value.id = item._id;
  title.value.value = item.title;
  state.value.value = item.state;
  show.value.value = item.show;

  dialog.value.open = true;
};

const closeDialog = () => {
  dialog.value.open = false;
  resetForm();
};

const schema = yup.object({
  title: yup.string().required("故事名稱必填"),
  state: yup.boolean(),
  show: yup.boolean(),
});

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    title: "",
    state: true,
    show: true,
  },
});

const title = useField("title");
const state = useField("state");
const show = useField("show");

const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return;
  if (dialog.value.id.length === 0 && fileRecords.value.length < 1) return;
  try {
    const fd = new FormData();
    fd.append("title", values.title);
    fd.append("state", values.state);
    fd.append("show", values.show);
    if (fileRecords.value.length > 0) {
      fd.append("image", fileRecords.value[0].file);
    }

    await apiAuth.patch("/story/" + dialog.value.id, fd);

    createSnackbar({
      text: "新增成功",
      snackbarProps: {
        color: "green",
      },
    });
    closeDialog();
    tableLoadMyStoryItems(true);
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
});

const myStoryHeaders = [
  {
    title: "書封",
    align: "start",
    width: "120px",
    sortable: false,
    key: "image",
  },
  { title: "書名", align: "center", width: "280px", key: "title" },
  { title: "狀態", align: "start", key: "state" },
  { title: "顯示", align: "center", key: "show", sortable: false },
  { title: "收藏數", align: "center", key: "collectionNum" },
  { title: "總票數", align: "center", key: "totalVotes" },
  { title: "編輯", align: "center", key: "actions", sortable: false },
];

const myStoryItems = ref([]);
const exStoryItems = ref([]);

const tableLoadMyStoryItems = async () => {
  try {
    const { data } = await apiAuth.get("/story/all", {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || "createdAt",
        sortOrder: tableSortBy.value[0]?.order || "desc",
      },
    });

    myStoryItems.value.splice(
      0,
      myStoryItems.value.length,
      ...data.result.data
    );

    tableItemsLength.value = data.result.total;
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};
tableLoadMyStoryItems();

const deleteItem = async () => {
  try {
    await apiAuth.delete(`/story/` + dialog.value.id);
    createSnackbar({
      text: "刪除成功",
      snackbarProps: {
        color: "green",
      },
    });
    closeDialog();
    tableLoadMyStoryItems(true); // 重新加載資料表
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

const ExtensionHeaders = [
  { title: "書名", align: "start", width: "150px", key: "storyTitle" },
  { title: "狀態", align: "start", key: "storyState" },
  {
    title: "延續內容",
    align: "center",
    width: "400px",
    key: "extensionContent",
    sortable: false,
  },
  { title: "票數", align: "center", key: "voteCount" },
  {
    title: "編輯",
    align: "center",
    key: "actions",
    sortable: false,
  },
];

const extensionStory = async () => {
  try {
    const response = await apiAuth.get(`/user/getExtension`);

    exStoryItems.value = response.data;
  } catch (error) {
    console.error("Error fetching story extensions:", error);
  }
};

extensionStory();

const selected = ref([]);

const bookmarkHeaders = [
  {
    title: "類別",
    align: "start",
    sortable: false,
    key: "category",
  },
  { title: "書名", key: "title", align: "start", sortable: false },
  {
    title: "狀態",
    key: "state",
    align: "start",
  },
  {
    title: "最新章節",
    key: "lastChapterName",
    align: "center",
    sortable: false,
  },
  {
    title: "作者",
    key: "mainAuthor.username",
    align: "center",
    sortable: false,
  },
  { title: "完成度", key: "completion", align: "center" },
];

const voteStoryHeaders = [
  { title: "書名", key: "storyTitle", align: "start", sortable: false },
  { title: "投票記錄內容", key: "content", align: "center", sortable: false },
  { title: "延續者", key: "exAuthor", align: "center", sortable: false },
  // { title: "總票數", key: "totalVotes", align: "center" },
  { title: "編輯", align: "center", key: "actions", sortable: false },
];

const voteStories = ref([]);
const getVoteStories = async () => {
  try {
    const response = await apiAuth.get("/voteRecord/getVoteStories");
    voteStories.value = response.data.voteStories;
  } catch (error) {
    console.log(error);
  }
};
getVoteStories();

const deleteDialog = ref(false);
const selectedRecItem = ref(null);

const handleDelete = async () => {
  if (selectedRecItem.value) {
    await deleteExtenRec(selectedRecItem.value);
    deleteDialog.value = false;
    selectedRecItem.value = null;
    await extensionStory();
  }
};

const openDeleteDialog = (item) => {
  selectedRecItem.value = item; // 將 item 存儲到 selectedItem
  deleteDialog.value = true;
};

const deleteExtenRec = async (item) => {
  try {
    await apiAuth.patch(`/user/deleteExtenRec/${item.id}`);
    createSnackbar({
      text: "刪除成功",
      snackbarProps: {
        color: "green",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const originalBookmarkStories = ref([]);
const bookmarkStories = ref([]);
const getBookmarkStories = async () => {
  try {
    const response = await apiAuth.get("/story/getBookmarkStories");
    originalBookmarkStories.value = response.data.result.data; // 保存原始數據
    bookmarkStories.value = originalBookmarkStories.value.map((item) => ({
      ...item,
      lastChapterName: item.content[item.content.length - 1]?.chapterName,
      completion: calculateCompletion(item), // 計算完成度
    }));
  } catch (error) {
    console.log(error);
  }
};

// 計算完成度的函數
const calculateCompletion = (item) => {
  // 使用已寫字數和總字數計算完成度
  const totalWrittenWords = calTotalWrittenWords(item); // 使用已寫的總字數
  const totalWords = item.totalWordCount || 1; // 確保不為零
  // 返回已寫字數和總字數的比值

  return ((totalWrittenWords / totalWords) * 100).toFixed(0); // 計算完成度百分比
};

// 計算剩餘字數的函數
const calTotalWrittenWords = (item) => {
  // 計算已完成章節的總字數
  const completedChaptersWordCount =
    (item.content.length - 1) * item.wordsPerChapter;

  // 計算當前章節的字數
  const currentChapterWordCount = item.currentChapterWordCount;

  // 計算已寫的總字數
  const totalWrittenWords =
    completedChaptersWordCount + currentChapterWordCount;

  return totalWrittenWords;
};

getBookmarkStories();

const allCategories = computed(() => {
  return [
    ...new Set(originalBookmarkStories.value.map((story) => story.category)),
  ];
});

const selectedCategory = ref(null);

const filterBookmark = () => {
  if (selectedCategory.value === "全部") {
    bookmarkStories.value = originalBookmarkStories.value.map((item) => ({
      ...item,
      lastChapterName: item.content[item.content.length - 1]?.chapterName, // 確保提取 lastChapterName
      completion: calculateCompletion(item), // 計算完成度
    })); // 顯示所有收藏故事
  } else if (selectedCategory.value) {
    const filteredStories = originalBookmarkStories.value
      .filter((story) => selectedCategory.value.includes(story.category))
      .map((item) => ({
        ...item,
        lastChapterName: item.content[item.content.length - 1]?.chapterName, // 確保提取 lastChapterName
        completion: calculateCompletion(item), // 計算完成度
      }));

    bookmarkStories.value = filteredStories;
  } else {
    bookmarkStories.value = originalBookmarkStories.value; // 顯示所有收藏故事
  }
};

watch(selectedCategory, () => {
  filterBookmark();
});

const removeBookmarkFunc = async () => {
  try {
    // 在這裡添加取消收藏的邏輯
    await apiAuth.delete(`/user/removeBookmark`, { data: { ids: selected } }); // 傳遞多個 ID

    createSnackbar({
      text: "取消收藏成功",
      snackbarProps: {
        color: "green",
      },
    });
    // 重新加載收藏故事
    getBookmarkStories();
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

const removeVoteRec = async (item) => {
  try {
    await apiAuth.delete(`/voteRecord/delVoteRec/${item.id}`);

    createSnackbar({
      text: "已刪除投票紀錄",
      snackbarProps: {
        color: "green",
      },
    });
    getVoteStories();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.sidebar {
  width: 20%;
  padding: 20px;
}

.content {
  width: 80%;
  padding: 16px;
}

::v-deep .v-data-table-footer {
  justify-content: space-between;
}

::v-deep .v-data-table-footer__info {
  display: none; /* 隱藏該元素 */
}
</style>
