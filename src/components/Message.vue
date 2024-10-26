<template>
  <v-card style="margin-top: 32px">
    <h3 class="pa-4" style="background-color: rgb(146 224 227)">留言區</h3>
    <v-row class="">
      <v-col>
        <div class="pa-4 pb-1">
          <v-row v-if="messages.length">
            <template v-for="(message, index) in messages" :key="index">
              <v-col
                class="d-flex justify-space-between align-center"
                style="padding-bottom: 0px"
              >
                <div>
                  <v-avatar color="primary" class="me-3" size="40">
                    <v-img :src="message.userId.avatar"></v-img>
                  </v-avatar>
                  <span>{{ message.userId.username }}</span>
                </div>
                <v-menu v-if="userId === message.userId._id" location="end">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      v-bind="props"
                      class="menu-btn"
                      style="width: 30px; height: 30px; padding: auto"
                      variant="plain"
                    >
                      <v-icon size="20">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list class="pa-0">
                    <v-list-item
                      class="px-4 py-1 my-0"
                      v-for="(item, i) in menuItems"
                      :key="i"
                      @click="item.action(message)"
                      link
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col
                    cols="1"
                    class="pt-0"
                    style="max-width: 0px; min-width: 60px"
                  ></v-col>
                  <v-col class="pt-0">
                    <!-- 編輯模式 -->
                    <template v-if="editingMessageId === message._id">
                      <v-form
                        @submit.prevent="submitEdit(message)"
                        :disabled="isSubmitting"
                      >
                        <v-textarea
                          v-model="editContent.value.value"
                          :error-messages="editContent.errorMessage.value"
                          variant="outlined"
                          maxlength="2000"
                          auto-grow
                          rows="1"
                        ></v-textarea>
                        <v-btn
                          variant="flat"
                          color="#4E9194"
                          class="mx-1"
                          @click="cancelEdit"
                          >取消</v-btn
                        >
                        <v-btn
                          @click="submitEdit(message)"
                          variant="flat"
                          color="#4E9194"
                          class="mx-1"
                          :loading="isSubmitting"
                          >保存</v-btn
                        >
                      </v-form>
                    </template>
                    <!-- 非編輯模式 -->
                    <template v-else>
                      <p class="mr-4 text-body-2">{{ message.content }}</p>
                    </template>
                  </v-col>
                </v-row>
              </v-col>
            </template>
          </v-row>
          <!-- 當沒有留言時顯示提示文字 -->
          <v-row v-else class="w-100 pa-0 ma-0">
            <v-col class="text-center my-2 py-0">
              <p class="text-body-1 font-weight-black">尚未有留言</p>
            </v-col>
          </v-row>
        </div>

        <!-- 留言發布 -->
        <div class="pa-4">
          <v-row>
            <v-col cols="1" style="max-width: 76px">
              <v-avatar color="primary" class="me-1" size="large">
                <template v-if="user.isLogin">
                  <v-img :src="userAvatar"></v-img>
                </template>
                <template v-else>
                  <v-icon
                    icon="mdi-account"
                    class=""
                    color="grey-lighten-2"
                    size="x-large"
                    style="
                      color: black;
                      background-color: grey;
                      width: 100%;
                      height: 100%;
                    "
                  ></v-icon>
                </template>
              </v-avatar>
            </v-col>
            <v-col class="pl-0">
              <v-form
                @submit.prevent="submit"
                :disabled="isSubmitting"
                class="d-flex align-end flex-column"
              >
                <v-textarea
                  v-model="content.value.value"
                  :error-messages="content.errorMessage.value"
                  placeholder="發表留言..."
                  variant="outlined"
                  maxlength="2000"
                  auto-grow
                  rows="1"
                  class="w-100"
                  hide-details
                  @focus="handleFocus"
                >
                </v-textarea>
                <template v-if="user.isLogin">
                  <v-btn
                    variant="text"
                    class="rounded-md bg-accent mt-3"
                    density="default"
                    :ripple="false"
                    type="submit"
                    style="background-color: #f4b942; width: 120px"
                    >送出</v-btn
                  >
                </template>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import { useUserStore } from "@/stores/user";
import { useApi } from "../composables/axios.js";
import { useRoute, useRouter } from "vue-router";
import { useSnackbar } from "vuetify-use-dialog";

const user = useUserStore();
const { apiAuth, api } = useApi();
const route = useRoute();
const router = useRouter();

const createSnackbar = useSnackbar();

const userStore = useUserStore();
const userId = userStore.userId;
const userAvatar = userStore.avatar;

// console.log("userStore 的值：", userStore);
// console.log("userAvatar 的值：", userAvatar);
// console.log("userId 的值：", userId);

const messages = ref([]);
const getMessage = async () => {
  try {
    const storyId = route.params.id;
    const response = await api.get(`message/${storyId}`);
    // console.log("response 的值：", response.data);

    messages.value = response.data.data; // 將回應的留言資料賦值給 messages
  } catch (error) {
    console.error(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

const schema = yup.object({
  content: yup.string().required().min(1, "字數不能小於 1"),
});

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    isSubmitting: false,
    content: "",
    editContent: "",
  },
});
const content = useField("content");

const submit = handleSubmit(async (value) => {
  if (!user.isLogin) {
    createSnackbar({
      text: "請先登入才能留言",
      snackbarProps: {
        color: "red",
      },
    });
    return;
  }

  const data = {
    content: value.content,
    storyId: route.params.id,
  };
  try {
    await apiAuth.post("/message", data);
    createSnackbar({
      text: "留言成功",
      snackbarProps: {
        color: "green",
      },
    });
    resetForm();
    await getMessage();
  } catch (error) {
    console.error(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
});

// 功能菜單選項
const menuItems = computed(() => [
  { title: "編輯", action: editMessage },
  { title: "刪除", action: deleteMessage },
]);

const deleteMessage = async (message) => {
  //   console.log("message 的值：", message._id);
  try {
    await apiAuth.delete(`message/${message._id}`);
    createSnackbar({
      text: "留言已刪除",
      snackbarProps: { color: "green" },
    });
    await getMessage();
  } catch (error) {
    console.error(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

// 控制目前編輯中的留言 ID
const editingMessageId = ref(null);
const editContent = useField("editContent");

// 開始編輯指定的留言
const editMessage = (message) => {
  editingMessageId.value = message._id;
  editContent.value.value = message.content;
};

// 提交編輯後的留言
const submitEdit = async (message) => {
  try {
    isSubmitting.value = true;
    // 這裡調用 API 更新留言
    await apiAuth.patch(`/message/${message._id}`, {
      content: editContent.value.value,
    });

    // 成功後更新 UI
    message.content = editContent.value.value;
    editingMessageId.value = null;
    createSnackbar({
      text: "留言已編輯",
      snackbarProps: {
        color: "green",
      },
    });
    resetForm();
  } catch (error) {
    console.error(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: { color: "red" },
    });
  } finally {
    isSubmitting.value = false;
  }
};

// 取消編輯模式
function cancelEdit() {
  editingMessageId.value = null;
}

const handleFocus = () => {
  // 未登入留言匡跳轉登入頁
  if (!user.isLogin) {
    createSnackbar({
      text: "請先登入才能留言",
      snackbarProps: {
        color: "red",
      },
    });
    router.push("/login");
  }
};

onMounted(() => {
  getMessage();
});
</script>
<style scoped lang="scss">
.menu-btn {
  display: flex;
  align-items: center;
}
.v-list-item--density-default.v-list-item--one-line {
  min-height: 0px;
}
</style>
