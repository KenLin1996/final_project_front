<template>
  <v-card
    class="w-100 px-3 py-3 rounded-lg"
    style="border: 1px solid #48a9a6; margin: 16px 0px"
  >
    <v-card-title class="pa-0 pr-7">
      <div class="title-row">
        <div class="title-text">
          <v-avatar color="secondary" class="me-3" size="46">
            <v-img :src="author?.avatar"></v-img>
          </v-avatar>
          <h1 class="card-title my-1">{{ author?.username }}</h1>
        </div>
        <div class="vote-section">
          <v-icon class="vote-icon" size="20">mdi-vote</v-icon>
          <span class="vote-count text-body-2">{{ voteCount.length }}</span>
          <v-menu location="end" v-if="userId === author._id">
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
                v-for="(item, i) in items"
                :key="i"
                @click="item.action ? item.action() : null"
                link
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-card-title>
    <v-card-text class="pa-0 mx-7 pl-8 pr-2 py-1">
      {{ content?.[0].latestContent }}
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn
        :disabled="hasVoted || voteStatus.hasVoted"
        style="background-color: #f24e1e; color: white"
        @click="changeVoteCount(1)"
        >投票</v-btn
      >
      <v-btn
        :disabled="!hasVoted || (voteStatus.hasVoted && !voteStatus.voteThis)"
        style="background-color: #f4b942; color: black; margin-right: 24px"
        @click="changeVoteCount(-1)"
        >取消</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { toRefs, computed } from "vue";
import { defineProps } from "vue";
import { useApi } from "../composables/axios.js";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import mittt from "@/mitt.js";

const { apiAuth } = useApi();
const userStore = useUserStore();
const user = useUserStore();
const createSnackbar = useSnackbar();

const props = defineProps([
  "content",
  "chapterName",
  "author",
  "voteCount",
  "storyId",
  "extensionId",
  "voteStatus",
  "authorId",
]);

const {
  content,
  author,
  voteStatus,
  voteCount: extensionVoteCount,
  storyId,
  extensionId,
} = toRefs(props);

const userId = userStore.userId;

const hasVoted = computed(() => {
  return extensionVoteCount.value.includes(userId);
});

const changeVoteCount = async (voteCountChange) => {
  if (!user.isLogin) {
    createSnackbar({
      text: "請先登入才能投票",
      snackbarProps: {
        color: "red",
      },
    });
    return;
  }

  try {
    if (voteCountChange > 0) {
      // 投票：後端會在同一個 transaction 裡建立 VoteRecord、更新故事票數、更新作者統計
      await apiAuth.post(`/voteRecord/${storyId.value}/${extensionId.value}`, {
        content: content.value?.[0]?.latestContent,
        exAuthor: author.value.username,
      });
    } else {
      // 取消投票：同一個 transaction 一次同步刪除 VoteRecord 並扣回票數
      await apiAuth.delete(`/voteRecord/${storyId.value}/${extensionId.value}`);
    }

    mittt.emit("updateStory");
  } catch (error) {
    console.error("Error updating vote count:", error);
    createSnackbar({
      text: error?.response?.data?.message || "操作失敗，請稍後再試",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

const items = computed(() => [{ title: "刪除", action: deleteExtensionStory }]);

const deleteExtensionStory = async () => {
  try {
    await apiAuth.delete(
      `/story/${storyId.value}/${extensionId.value}/deleteExtensionStory`
    );
    createSnackbar({
      text: "刪除成功",
      snackbarProps: {
        color: "green",
      },
    });
    mittt.emit("updateStory");
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
</script>

<style scoped>
.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-left: 28px; */
}

.title-text,
.vote-section {
  display: flex;
  align-items: center;
}

.card-title {
  font-size: 14px;
  color: #4e9194;
}

.vote-icon {
  margin-right: 4px;
}

.vote-count {
  margin-right: 4px;
}

.menu-btn {
  display: flex;
  align-items: center;
}
.v-list-item--density-default.v-list-item--one-line {
  min-height: 0px;
}
</style>
