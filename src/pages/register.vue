<template>
  <div class="register-page">
    <v-card class="register-card" style="margin-top: 46px">
      <v-card-text class="card-content px-8 py-4">
        <!-- <div class="text-center mb-4"> -->
        <div class="d-flex justify-center text-center">
          <router-link to="/">
            <v-img
              class="mx-auto"
              :width="80"
              aspect-ratio="1/1"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
          </router-link>
        </div>
        <div class="d-flex flex-column align-center">
          <v-btn
            outlined
            border
            style="background-color: #ffffff"
            color="#000000"
            prepend-icon="mdi-google"
            class="my-4 elevation-1 w-66"
            variant="plain"
            to="/login"
          >
            使用 Google 註冊
          </v-btn>
          <!-- <v-btn
            outlined
            border
            style="background-color: #ffffff"
            color="#000000"
            size="default"
            prepend-icon="mdi-facebook"
            class="mb-4 elevation-1 w-66"
            variant="plain"
            to="/login"
          >
            使用 Facebook 註冊
          </v-btn> -->
        </div>
        <v-divider class="mb-4"></v-divider>
        <v-form @submit.prevent="submit" :disabled="isSubmitting">
          <v-text-field
            label="信箱"
            type="email"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            class="mb-2"
            autocomplete="email"
          ></v-text-field>
          <v-text-field
            label="暱稱"
            minlength="3"
            maxlength="20"
            counter
            v-model="username.value.value"
            :error-messages="username.errorMessage.value"
            class="mb-2"
            autocomplete="username"
          ></v-text-field>
          <v-text-field
            label="密碼"
            :type="showPassword ? 'text' : 'password'"
            minlength="4"
            maxlength="20"
            counter
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="togglePasswordVisibility"
            class="mb-2"
            autocomplete="new-password"
          ></v-text-field>
          <v-text-field
            label="確認密碼"
            :type="showPasswordConfirm ? 'text' : 'password'"
            minlength="4"
            maxlength="20"
            counter
            v-model="passwordConfirm.value.value"
            :error-messages="passwordConfirm.errorMessage.value"
            :append-inner-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="togglePasswordConfirmVisibility"
            class="mb-4"
            autocomplete="new-password"
          ></v-text-field>
          <div class="text-center">
            <v-btn
              type="submit"
              outlined
              border
              class="register-btn mb-3 w-33"
              :loading="isSubmitting"
            >
              註冊
            </v-btn>
          </div>
        </v-form>
        <div class="text-center">
          <v-btn :ripple="false" variant="plain" to="/login"> 登入 </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import validator from "validator";
import { useRouter } from "vue-router";
import { useApi } from "../composables/axios.js";
import { definePage } from "vue-router/auto";
import { useSnackbar } from "vuetify-use-dialog";

definePage({
  meta: {
    title: `界筆 ｜ 註冊`,
    login: false,
    admin: false,
    hideFooter: true,
  },
});

const { api } = useApi();
const router = useRouter();
const createSnackbar = useSnackbar();

const schema = yup.object({
  email: yup
    .string()
    .required("使用者信箱必填")
    .test("isEmail", "使用者信箱格式錯誤", (value) => {
      return validator.isEmail(value);
    }),
  username: yup
    .string()
    .required("使用者暱稱必填")
    .min(1, "使用者暱稱長度不符")
    .max(20, "使用者暱稱長度不符"),
  // .test("isAlphanumeric", "使用者帳號格式錯誤", (value) => {
  //   return validator.isAlphanumeric(value);
  // })
  password: yup
    .string()
    .required("使用者密碼必填")
    .min(4, "使用者密碼長度不符")
    .max(20, "使用者密碼長度不符"),
  passwordConfirm: yup.string().oneOf([yup.ref("password")], "密碼不一致"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const email = useField("email");
const username = useField("username");
const password = useField("password");
const passwordConfirm = useField("passwordConfirm");

const showPassword = ref(false);
const showPasswordConfirm = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const togglePasswordConfirmVisibility = () => {
  showPasswordConfirm.value = !showPasswordConfirm.value;
};

const submit = handleSubmit(async (values) => {
  try {
    await api.post("/user", {
      email: values.email,
      username: values.username,
      password: values.password,
    });
    createSnackbar({
      text: "註冊成功",
      snackbarProps: {
        color: "green",
      },
    });
    router.push("/login");
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
</script>

<style scoped>
.v-main {
  padding: 0;
}
.register-page {
  background-color: #e7dfc6;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

.register-card {
  width: 100%;
  max-width: 500px;
  background-color: white;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.register-btn {
  background-color: #f4b942;
  font-weight: bold;
  font-size: 16px;
}

@media (max-width: 600px) {
  .card-content {
    padding: 20px;
  }
}

@media (max-height: 700px) {
  .register-card {
    max-height: 95vh;
    overflow-y: auto;
  }
}
</style>
