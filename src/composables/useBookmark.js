import { reactive, computed, toValue } from "vue";
import { useSnackbar } from "vuetify-use-dialog";
import { useApi } from "@/composables/axios";
import { useUserStore } from "@/stores/user";

// 收藏狀態放在模組層級、以 storyId 為 key 共用：
// 故事頁上同時有「收藏故事」按鈕和 StoryItem 裡的愛心，兩者必須看同一份狀態，
// 否則點了其中一個，另一個不會跟著變。
// 每個 storyId 對應 { bookmarked: boolean, collectionNum: number | null }，
// collectionNum 只在切換收藏後才有值（取自後端交易完的實際數字）。
const bookmarkState = reactive({});

const ensureEntry = (id) => {
  if (!bookmarkState[id]) {
    bookmarkState[id] = { bookmarked: false, collectionNum: null };
  }
  return bookmarkState[id];
};

// storyId 可以是字串、ref 或 getter
export function useBookmark(storyId) {
  const user = useUserStore();
  const { apiAuth } = useApi();
  const createSnackbar = useSnackbar();

  const id = computed(() => toValue(storyId));

  const isBookmarked = computed(
    () => bookmarkState[id.value]?.bookmarked ?? false
  );
  const collectionNum = computed(
    () => bookmarkState[id.value]?.collectionNum ?? null
  );

  const checkBookmark = async () => {
    if (!user.isLogin || !id.value) return;
    try {
      const { data } = await apiAuth.get(`user/checkBookmark/${id.value}`);
      ensureEntry(id.value).bookmarked = data.hasCollection;
    } catch (error) {
      console.error("檢查收藏狀態失敗", error);
    }
  };

  const toggleBookmark = async () => {
    if (!user.isLogin) {
      createSnackbar({
        text: "請先登入才能收藏",
        snackbarProps: { color: "red" },
      });
      return;
    }
    try {
      const { data } = await apiAuth.post("user/addBookmark", {
        storyId: id.value,
      });
      const entry = ensureEntry(id.value);
      entry.bookmarked = data.hasCollection;
      entry.collectionNum = data.collectionNum;
      createSnackbar({
        text: data.hasCollection ? "收藏故事" : "取消收藏",
        snackbarProps: { color: "green" },
      });
    } catch (error) {
      console.error("收藏操作失敗", error);
      createSnackbar({
        text: error?.response?.data?.message || "收藏操作失敗",
        snackbarProps: { color: "red" },
      });
    }
  };

  return { isBookmarked, collectionNum, checkBookmark, toggleBookmark };
}
