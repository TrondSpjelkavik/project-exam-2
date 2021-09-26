<template lang="">
  <div class="admin-box">
    <SubHeadline :headline="'From: ' + message.name" />
    <div class="create-hotel-container">
      <div class="message-container">
        <v-icon @click="goBack" color="black" size="36" class="back-icon">
          {{ icons.mdiArrowLeft }}
        </v-icon>
        <p class="message-date">{{ formatDate(message.created_at) }}</p>
        <p class="message-headline">Name:</p>

        <p class="message-content">{{ message.name }}</p>

        <p class="message-headline">Email:</p>
        <p class="message-content">{{ message.email }}</p>
        <p class="message-headline">Message:</p>
        <p class="message-content">{{ message.message }}</p>

        <div class="button-box">
          <a class="reply" :href="`mailto:${message.email}`">Reply</a>
          <button class="delete" @click="deleteMessage(message.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import SubHeadline from "../layout/SubHeadline.vue";
import { mdiArrowLeft } from "@mdi/js";

export default {
  props: ["message"],
  components: {
    SubHeadline
  },

  data() {
    return {
      icons: {
        mdiArrowLeft
      }
    };
  },

  methods: {
    // Delete function with a alert box
    async deleteMessage(id) {
      try {
        if (confirm("Are you sure you want to delete this message?")) {
          await this.$strapi.$messages.delete(id);
        }
      } catch (error) {
        console.log(error);
      } finally {
        // Sending user back to admin if delete is confirmed
        this.$nuxt.$router.push("/admin");
      }
    },
    // Moment pkg. Date formatter
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    goBack() {
      // Back function

      this.$nuxt.$router.push("/admin");
    }
  },
  middleware: "authenticated"
};
</script>
<style lang="scss">
.message-container {
  background: white;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  padding-top: 1rem;
  border-radius: 20px;
  margin: 1rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.button-box {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}

.message-content {
  padding: 5px 20px;
  word-break: break-all;
}

.message-headline {
  font-weight: 700;
  padding: 5px 10px;
}

.reply {
  text-decoration: none;
  color: white;
  background: var(--brand-green);
  padding: 0.5rem;
}

.delete {
  text-decoration: none;
  color: white;
  background: var(--brand-red);
  padding: 0.5rem;
}

.message-date {
  font-weight: 700;
  padding-bottom: 20px;
  color: var(--brand-green);
  text-align: center;
}
</style>
