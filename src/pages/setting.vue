<template style="margin: auto">
  <v-container
    class="d-flex align-center justify-center ma-0 bg-white h-100"
    style="max-width: 100vw; max-height: 100%"
  >
    <v-container class="w-100 h-xs-100" style="padding: 32px">
      <div
        class="smallSidebar mb-3 w-100"
        style="background-color: white; border-radius: 12px"
      >
        <v-list class="py-0" dense>
          <v-list-item class="w-100">
            <v-tabs v-model="tab" color="primary" grow>
              <v-tab
                prepend-icon="mdi-cog-outline"
                text="帳號設定"
                value="option-1"
              ></v-tab>
              <v-tab
                prepend-icon="mdi-bell-outline"
                text="通知設定"
                value="option-2"
              ></v-tab>
              <!-- <v-tab
                
                prepend-icon="mdi-theme-light-dark"
                text="主題設定"
                value="option-3"
              ></v-tab> -->
            </v-tabs>
          </v-list-item>
        </v-list>
      </div>
      <div class="d-flex justify-center">
        <div
          class="sidebar"
          style="
            margin-right: 12px;
            background-color: white;
            border-radius: 12px;
          "
        >
          <v-list class="py-0" dense>
            <h3 class="mb-1">設定</h3>
            <v-list-item class="d-flex">
              <v-tabs v-model="tab" color="primary" direction="vertical">
                <v-tab
                  class="my-1"
                  prepend-icon="mdi-cog-outline"
                  text="帳號設定"
                  value="option-1"
                ></v-tab>
                <v-tab
                  class="my-1"
                  prepend-icon="mdi-bell-outline"
                  text="通知設定"
                  value="option-2"
                ></v-tab>
                <!-- <v-tab
                class="my-1"
                prepend-icon="mdi-theme-light-dark"
                text="主題設定"
                value="option-3"
              ></v-tab> -->
              </v-tabs>
            </v-list-item>
          </v-list>
        </div>

        <div
          class="content w-100"
          style="background-color: white; border-radius: 12px"
        >
          <v-tabs-window v-model="tab">
            <!-- 帳號設定 -->
            <v-tabs-window-item value="option-1">
              <div class="d-flex align-center justify-space-between mb-4">
                <h3>帳號設定</h3>
              </div>
              <v-divider></v-divider>

              <v-card flat>
                <v-form @submit.prevent="submit" :disabled="isSubmitting">
                  <v-card-text>
                    <div
                      id="profile"
                      class="w-md-50 w-100 text-center mx-auto rounded-lg"
                    >
                      <vue-file-agent
                        class="d-flex justify-center mb-5"
                        accept="image/jpeg,image/png"
                        deletable
                        max-size="1MB"
                        help-text="上傳大頭照"
                        :error-text="{
                          type: '檔案格式不支援',
                          size: '檔案大小不能超過 1MB',
                        }"
                        v-model:file-records="fileRecords"
                      />
                      <!-- <div v-if="fileRecords[0].thumbnailUrl">
                      <img :src="fileRecords[0].thumbnailUrl" alt="Avatar" />
                    </div> -->

                      <v-row class="text-center" style="padding: 8px">
                        <template v-for="item in users" :key="item.id">
                          <template v-if="!item.isEditing">
                            <v-col cols="2" class="my-auto pa-0">
                              <label class="form-label" style="font-size: 18px">
                                暱稱
                              </label>
                            </v-col>
                            <v-col cols="8" class="my-auto">
                              <p style="font-size: 18px">
                                {{ item.username }}
                              </p>
                            </v-col>
                          </template>

                          <template v-else>
                            <v-col cols="2" class="my-auto pa-0">
                              <label class="form-label" style="font-size: 18px">
                                暱稱
                              </label>
                            </v-col>
                            <v-col cols="10" class="my-auto">
                              <v-text-field
                                class="form-label"
                                style="font-size: 18px"
                                minlength="3"
                                maxlength="20"
                                variant="outlined"
                                single-line
                                density="comfortable"
                                clearable
                                dense
                                v-model="newUsername"
                                :error-messages="newUsernameError"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="my-auto">
                              <v-btn
                                variant="flat"
                                color="#4E9194"
                                class="mx-1"
                                @click="cancelEdit(item, 'username')"
                                >取消</v-btn
                              >
                              <v-btn
                                type="submit"
                                variant="flat"
                                color="#4E9194"
                                class="mx-1"
                                :loading="isSubmitting"
                                >保存</v-btn
                              >
                            </v-col>
                          </template>
                          <template v-if="!item.isEditing">
                            <v-col cols="2" class="my-auto pa-0">
                              <v-btn
                                @click="toggleEdit(item)"
                                variant="flat"
                                color="#4E9194"
                                class="pa-0"
                                >編輯</v-btn
                              >
                            </v-col>
                          </template>
                        </template>
                      </v-row>

                      <v-divider class="text-center my-3"></v-divider>

                      <v-row class="text-center" style="padding: 8px">
                        <template v-for="item in users" :key="item.id">
                          <template v-if="!item.isEmailToggleEditing">
                            <v-col cols="2" class="my-auto pa-0">
                              <label class="form-label" style="font-size: 18px">
                                帳號
                              </label>
                            </v-col>
                            <v-col cols="8" class="my-auto">
                              <p style="font-size: 18px">
                                {{ item.email }}
                              </p>
                            </v-col>
                          </template>
                          <template v-else>
                            <v-col cols="2" class="my-auto pa-0">
                              <label class="form-label" style="font-size: 18px">
                                帳號
                              </label>
                            </v-col>
                            <v-col cols="10" class="my-auto">
                              <v-text-field
                                class="form-label"
                                style="font-size: 18px"
                                variant="outlined"
                                single-line
                                density="comfortable"
                                clearable
                                dense
                                v-model="newEmail"
                                :error-messages="newEmailError"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" class="my-auto">
                              <v-btn
                                variant="flat"
                                color="#4E9194"
                                class="mx-1"
                                @click="cancelEdit(item, 'email')"
                                >取消</v-btn
                              >
                              <v-btn
                                type="submit"
                                variant="flat"
                                color="#4E9194"
                                class="mx-1"
                                :loading="isSubmitting"
                                >保存</v-btn
                              >
                            </v-col>
                          </template>
                          <template v-if="!item.isEmailToggleEditing">
                            <v-col cols="2" class="my-auto pa-0">
                              <v-btn
                                @click="emailToggleEdit(item)"
                                variant="flat"
                                color="#4E9194"
                                class="pa-0"
                                >編輯</v-btn
                              >
                            </v-col>
                          </template>
                        </template>
                      </v-row>
                      <v-divider class="text-center my-3"></v-divider
                      ><v-row class="text-center" style="padding: 8px">
                        <template v-for="item in users" :key="item.id">
                          <template v-if="!item.passwordisEditing">
                            <v-col cols="2" class="my-auto pa-0">
                              <label class="form-label" style="font-size: 18px">
                                密碼
                              </label>
                            </v-col>
                            <v-col cols="8" class="my-auto">
                              <p style="font-size: 18px">
                                {{ item.password }}
                              </p>
                            </v-col>
                          </template>
                          <template v-else>
                            <v-col cols="2" class="my-auto pa-0">
                              <label class="form-label" style="font-size: 18px">
                                新密碼
                              </label>
                            </v-col>
                            <v-col cols="10" class="my-auto">
                              <v-text-field
                                class="form-label"
                                style="font-size: 18px"
                                variant="outlined"
                                single-line
                                density="comfortable"
                                clearable
                                dense
                                :type="showPassword ? 'text' : 'password'"
                                minlength="4"
                                maxlength="20"
                                v-model="newPassword"
                                :error-messages="newPasswordError"
                                :append-inner-icon="
                                  showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                @click:append-inner="togglePasswordVisibility"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="2" class="my-auto pa-0">
                              <label class="form-label" style="font-size: 18px">
                                確認密碼
                              </label>
                            </v-col>
                            <v-col cols="10" class="my-auto">
                              <v-text-field
                                class="form-label"
                                style="font-size: 18px"
                                variant="outlined"
                                single-line
                                density="comfortable"
                                clearable
                                dense
                                :type="
                                  showPasswordConfirm ? 'text' : 'password'
                                "
                                minlength="4"
                                maxlength="20"
                                v-model="passwordConfirm"
                                :error-messages="passwordConfirmError"
                                :append-inner-icon="
                                  showPasswordConfirm
                                    ? 'mdi-eye'
                                    : 'mdi-eye-off'
                                "
                                @click:append-inner="
                                  togglePasswordConfirmVisibility
                                "
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="my-auto">
                              <v-btn
                                variant="flat"
                                color="#4E9194"
                                class="mx-1"
                                @click="cancelEdit(item, 'password')"
                                >取消</v-btn
                              >
                              <v-btn
                                type="submit"
                                variant="flat"
                                color="#4E9194"
                                class="mx-1"
                                :loading="isSubmitting"
                                >保存</v-btn
                              >
                            </v-col>
                          </template>
                          <template v-if="!item.passwordisEditing">
                            <v-col cols="2" class="my-auto pa-0">
                              <v-btn
                                variant="flat"
                                color="#4E9194"
                                @click="passwordToggleEdit(item)"
                                >編輯</v-btn
                              >
                            </v-col>
                          </template>
                        </template>
                      </v-row>
                      <v-divider class="text-center my-3"></v-divider>
                    </div>
                  </v-card-text>
                </v-form>
              </v-card>
            </v-tabs-window-item>

            <!-- 通知設定 -->
            <v-tabs-window-item value="option-2" style="height: 320px">
              <div class="d-flex align-center justify-space-between mb-4">
                <h3>通知設定</h3>
              </div>
              <v-divider></v-divider>
              <div class="d-flex align-center justify-space-between py-2">
                <v-card-actions class="d-flex flex-column w-100">
                  <div class="d-flex align-center justify-space-between w-100">
                    <p>投票通知</p>
                    <p>其他使用者投票給你的故事時寄送推播</p>
                    <v-switch
                      :model-value="true"
                      color="primary"
                      hide-details
                    ></v-switch>
                  </div>
                  <div class="d-flex align-center justify-space-between w-100">
                    <p>收藏通知</p>
                    <p>您所收藏的故事有更新時會寄送通知</p>
                    <v-switch
                      :model-value="true"
                      color="primary"
                      hide-details
                    ></v-switch>
                  </div>
                </v-card-actions>
              </div>
            </v-tabs-window-item>

            <!-- 主題設定 -->
            <v-tabs-window-item value="option-3" style="height: 450px">
              <div class="d-flex align-center justify-space-between mb-4">
                <h3>主題設定</h3>
              </div>
              <v-divider></v-divider>
              <div class="d-flex align-center justify-space-between py-2">
                <v-card-actions class="d-flex flex-column w-100">
                  <div class="d-flex align-center justify-space-between w-100">
                    <p>淺色模式</p>
                    <v-switch
                      :model-value="true"
                      color="primary"
                      hide-details
                    ></v-switch>
                  </div>
                  <div class="d-flex align-center justify-space-between w-100">
                    <p>深色模式</p>
                    <v-switch
                      :model-value="false"
                      color="primary"
                      hide-details
                    ></v-switch>
                  </div>
                </v-card-actions>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import validator from "validator";
import { useApi } from "../composables/axios.js";
import { definePage } from "vue-router/auto";
import { useSnackbar } from "vuetify-use-dialog";

definePage({
  meta: {
    title: "界筆 ｜ 設定",
    login: false,
    admin: false,
    hideFooter: true,
  },
});

const { apiAuth } = useApi();
const createSnackbar = useSnackbar();

const tab = ref("option-1");

const schema = yup.object({
  newEmail: yup.string().test("isEmail", "使用者信箱格式錯誤", (value) => {
    return value ? validator.isEmail(value) : true;
  }),
  newUsername: yup
    .string()
    .min(1, "使用者暱稱長度不符")
    .max(20, "使用者暱稱長度不符"),
  newPassword: yup
    .string()
    .min(4, "使用者密碼長度不符")
    .max(20, "使用者密碼長度不符"),
  passwordConfirm: yup.string().oneOf([yup.ref("newPassword")], "密碼不一致"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const { value: newUsername, errorMessage: newUsernameError } =
  useField("newUsername");
const { value: newEmail, errorMessage: newEmailError } = useField("newEmail");
const { value: newPassword, errorMessage: newPasswordError } =
  useField("newPassword");
const { value: passwordConfirm, errorMessage: passwordConfirmError } =
  useField("passwordConfirm");

const showPassword = ref(false);
const showPasswordConfirm = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const togglePasswordConfirmVisibility = () => {
  showPasswordConfirm.value = !showPasswordConfirm.value;
};

// 後端傳來的基本資料
const users = ref([]);
const loadUser = async () => {
  try {
    const { data } = await apiAuth.get("/user/profile");
    users.value = [data.result];
    users.value[0].newAvatar = users.value[0].avatar; // 設置新用戶頭貼為現有用戶頭貼
    users.value[0].password = "********";
    users.value[0].newUsername = users.value[0].username; // 設置新用戶名為現有用戶名
    users.value[0].newEmail = users.value[0].email;
    users.value[0].newPassword = ""; // 用於存儲新密碼
    users.value[0].passwordConfirm = "";
  } catch (error) {
    console.log(error);
  }
};

loadUser();

const user = computed(() => users.value[0] || {});

const toggleEdit = (item) => {
  users.value.forEach((user) => {
    user.isEditing = false;
    user.isEmailToggleEditing = false;
    user.passwordisEditing = false;
  });
  item.isEditing = !item.isEditing;
};

const emailToggleEdit = (item) => {
  users.value.forEach((user) => {
    user.isEditing = false;
    user.isEmailToggleEditing = false;
    user.passwordisEditing = false;
  });
  item.isEmailToggleEditing = !item.isEmailToggleEditing;
};

const passwordToggleEdit = (item) => {
  users.value.forEach((user) => {
    user.isEditing = false;
    user.isEmailToggleEditing = false;
    user.passwordisEditing = false;
  });
  item.passwordisEditing = !item.passwordisEditing;
};

const cancelEdit = (item, type) => {
  switch (type) {
    case "username":
      newUsername.value = "";
      item.isEditing = false;
      break;
    case "email":
      newEmail.value = "";
      item.isEmailToggleEditing = false;
      break;
    case "password":
      newPassword.value = "";
      passwordConfirm.value = "";
      item.passwordisEditing = false;
      break;
    default:
  }
};

const submit = handleSubmit(async () => {
  try {
    const updatedData = {}; // 用來存儲需要更新的資料

    if (newUsername.value && newUsername.value !== user.value.username) {
      updatedData.username = newUsername.value;
    }
    if (newEmail.value && newEmail.value !== user.value.email) {
      updatedData.email = newEmail.value;
    }
    if (newPassword.value) {
      updatedData.password = newPassword.value;
    }

    if (Object.keys(updatedData).length === 0) {
      createSnackbar({
        text: "沒有任何變更",
        snackbarProps: {
          color: "accent",
        },
      });
      return;
    }

    const response = await apiAuth.patch("/user/profile", updatedData);
    if (response.data.success) {
      createSnackbar({
        text: "資料修改成功",
        snackbarProps: {
          color: "green",
        },
      });
      loadUser(); // 重新加載用戶資料
    } else {
      createSnackbar({
        text: response.data.message || "發生錯誤",
        snackbarProps: {
          color: "red",
        },
      });
    }
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
});

// const fileRecords = ref([
//   {
//     name: "Avatar.png", // 預設圖片的名稱
//     size: 12345, // 假設的文件大小
//     type: "image/png", // 文件類型
//     ext: "png",
//     thumbnailUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIclrE8xeM_yzEKEF59fHpOvEzmfVzvX66Jg&s", // 去掉多餘的單引號
//     isDefault: true, // 標記此文件為預設圖片
//   },
// ]);
// window.fileRecords = fileRecords;
</script>

<style scoped lang="scss">
.smallSidebar {
  display: none;
}
.sidebar {
  width: 20%;
  padding: 16px;
}

.content {
  width: 80%;
  padding: 20px;
}

.photoBtn {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.photoBtn:hover {
  background-color: #e0e0e0;
}

::v-deep .file-preview-wrapper {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #7a7a7a;
}
::v-deep .vue-file-agent.file-input-wrapper {
  border: none;
}
::v-deep .grid-block-wrapper .grid-block {
  min-width: 125px;
}

@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
  .smallSidebar {
    display: block;
  }
}
</style>
