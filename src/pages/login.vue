<template>
  <v-container class="d-flex align-center justify-center h-100 mt-0 mb-0" fluid>
    <v-container
      class="text-center pa-8 rounded-lg elevation-4"
      style="
        width: 500px;
        background-color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
      "
    >
      <v-row class="d-flex flex-column justify-center">
        <v-col class="d-flex flex-column justify-center align-center my-2">
          <router-link to="/">
            <v-img
              class="my-4"
              :width="50"
              cover
              src="../assets/stor-genLogo.png"
            ></v-img>
          </router-link>
        </v-col>
        <v-divider class="my-2"></v-divider>
        <v-col cols="12">
          <v-form :disabled="isSubmitting" @submit.prevent="submit">
            <v-text-field
              label="信箱"
              type="email"
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              autocomplete="email"
            ></v-text-field>
            <v-text-field
              label="密碼"
              minlength="4"
              maxlength="20"
              counter
              :type="showPassword ? 'text' : 'password'"
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="togglePasswordVisibility"
              autocomplete="current-password"
            ></v-text-field>
            <v-btn
              type="submit"
              outlined
              border
              style="
                background-color: #f4b942;
                font-weight: bold;
                font-size: 16px;
              "
              class="my-4 elevation-1 w-33"
              :loading="isSubmitting"
            >
              登入
            </v-btn>
          </v-form>
          <v-btn class="" :ripple="false" variant="plain" to="/register">
            註冊
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import validator from "validator";
import { definePage } from "vue-router/auto";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";

definePage({
  meta: {
    title: `界筆 ｜ 登入`,
    login: false,
    admin: false,
    hideFooter: true,
  },
});

const router = useRouter();
const user = useUserStore();
const createSnackbar = useSnackbar();

const schema = yup.object({
  email: yup
    .string()
    .required("使用者信箱必填")
    .test("isEmail", "使用者信箱格式錯誤", (value) => {
      return validator.isEmail(value);
    }),
  password: yup
    .string()
    .required("使用者密碼必填")
    .min(4, "使用者密碼長度不符")
    .max(20, "使用者密碼長度不符"),
});

const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "visitor01@gmail.com",
    password: "visitor01",
  },
});
const email = useField("email");
const password = useField("password");

const submit = handleSubmit(async (values) => {
  const result = await user.login(values);
  if (result === "登入成功") {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: "green",
      },
    });
    router.push("/");
  } else {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: "red",
      },
    });
  }
});
</script>
