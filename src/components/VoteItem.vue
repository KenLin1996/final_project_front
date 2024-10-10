<template>
  <v-card
    class="w-100 px-6 py-2 rounded-lg"
    style="border: 1px solid #48a9a6; margin: 16px 0px"
  >
    <v-card-title class="pa-0">
      <div class="title-row">
        <div class="title-text">
          <h1 class="card-title my-1">{{ author?.username }}</h1>
        </div>
        <div class="vote-section">
          <v-icon class="vote-icon" size="20">mdi-vote</v-icon>
          <span class="vote-count text-body-2">{{ voteCount.length }}</span>
          <v-menu location="end">
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
    <v-card-text class="pa-0 mx-7 py-1">
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

  <v-dialog v-model="reportDialog" max-width="500px">
    <v-form @submit.prevent="submit" :disabled="isSubmitting">
      <v-card>
        <v-card-title>
          <span class="headline">檢舉故事</span>
        </v-card-title>
        <v-card-text>
          <v-textarea
            v-model="report.value.value"
            :error-messages="report.errorMessage.value"
            label="請描述檢舉原因"
            rows="3"
            auto-grow
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="reportDialog = false"
            >取消</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            type="submit"
            :loading="isSubmitting"
            >提交</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref, toRefs, watch } from "vue";
import { defineProps } from "vue";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import { useApi } from "../composables/axios.js";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import mittt from "@/mitt.js";

const { apiAuth } = useApi();
const userStore = useUserStore();
const user = useUserStore();
const createSnackbar = useSnackbar();

const hasVotedInOtherExtension = ref(false);
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
    const storyResponse = await apiAuth.patch(
      `/story/${storyId.value}/${extensionId.value}`,
      {
        voteCountChange: voteCountChange,
      }
    );

    if (!storyResponse.data.hasVotedInOtherExtension) {
      hasVotedInOtherExtension.value = true;
    }

    mittt.emit("updateStory");
  } catch (error) {
    console.log(error);
    console.error("Error updating vote count:", error);
  }
};

const schema = yup.object({
  report: yup.string().required("請描述檢舉原因").min(50, "檢舉不能低於 50 字"),
});

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    report: "",
  },
});

const report = useField("report");

const reportDialog = ref(false);
const handleReport = () => {
  reportDialog.value = true;
};

const items = computed(() => {
  const baseItems = [{ title: "檢舉", action: handleReport }];
  if (userId === props.authorId) {
    baseItems.push({ title: "刪除", action: deleteExtensionStory });
  }
  return baseItems;
});

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    createSnackbar({
      text: "請先登入才能檢舉",
      snackbarProps: {
        color: "red",
      },
    });
    return;
  }
  try {
    // await apiAuth.post(`/story/${storyId.value}/${extensionId.value}`, {
    //   report: values.report,
    // });
    console.log("檢舉已提交");

    reportDialog.value = false;
  } catch (error) {
    console.log(error);
  }
});

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

watch(reportDialog, (newValue) => {
  if (!newValue) {
    resetForm();
  }
});
</script>

<style scoped>
.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 28px;
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
