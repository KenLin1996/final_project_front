import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useApi } from "@/composables/axios";

export const useUserStore = defineStore(
  "user",
  () => {
    const { api, apiAuth } = useApi();

    const userId = ref("");
    const token = ref("");
    const username = ref("");
    const bookmarkStory = ref(0);
    const voteStory = ref(0);
    const createCharacters = ref(0);
    const notifies = ref(0);
    const theme = ref("");
    const avatar = ref("");

    const isLogin = computed(() => {
      return token.value.length > 0;
    });

    const login = async (values) => {
      try {
        const { data } = await api.post("/user/login", values);
        userId.value = data.result.userId;
        token.value = data.result.token;
        username.value = data.result.username;
        bookmarkStory.value = data.result.bookmarkStory;
        voteStory.value = data.result.voteStory;
        createCharacters.value = data.result.createCharacters;
        notifies.value = data.result.notifies;
        theme.value = data.result.theme;
        avatar.value = data.result.avatar;

        return "登入成功";
      } catch (error) {
        console.log(error);
        return error?.response?.data?.message || "發生錯誤，請稍後再試";
      }
    };

    const profile = async () => {
      if (!isLogin.value) return;

      try {
        const { data } = await apiAuth.get("/user/profile");
        userId.value = data.result.userId;
        username.value = data.result.username;
        bookmarkStory.value = data.result.bookmarkStory;
        voteStory.value = data.result.voteStory;
        createCharacters.value = data.result.createCharacters;
        notifies.value = data.result.notifies;
        theme.value = data.result.theme;
        avatar.value = data.result.avatar;
      } catch (error) {
        console.log(error);
        token.value = "";
        username.value = "";
        bookmarkStory.value = 0;
        voteStory.value = 0;
        createCharacters.value = 0;
        notifies.value = 0;
        theme.value = 0;
        avatar.value = "";
      }
    };

    const logout = async () => {
      try {
        await apiAuth.delete("/user/logout");
      } catch (error) {
        console.log(error);
      }
      token.value = "";
      username.value = "";
      bookmarkStory.value = 0;
      voteStory.value = 0;
      createCharacters.value = 0;
      notifies.value = 0;
      theme.value = 0;
      avatar.value = "";
      userId.value = "";
    };

    function setToken(newToken) {
      token.value = newToken;
    }

    return {
      userId,
      token,
      username,
      bookmarkStory,
      voteStory,
      createCharacters,
      notifies,
      theme,
      avatar,
      isLogin,
      login,
      profile,
      logout,
      setToken,
    };
  },
  {
    persist: {
      key: "storyGeneration",
      paths: ["token"],
    },
  }
);
