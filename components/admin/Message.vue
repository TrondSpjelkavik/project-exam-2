<template lang="">
  <div class="container-hoo">
    <SubHeadline :headline="message.name" />
    <div class="create-hotel-container">
      <div class="message-container">
        <p class="message-headline">Name:</p>

        <p class="message-content">{{ message.name }}</p>

        <p class="message-headline">Email:</p>
        <p class="message-content">{{ message.email }}</p>
        <p class="message-headline">Message:</p>
        <p class="message-content">{{ message.message }}</p>
        <p class="message-date">{{ formatDate(message.created_at) }}</p>
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

export default {
  props: ["message"],
  components: {
    SubHeadline
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
    }
  },
  middleware: "authenticated"
};
</script>
<style lang="scss" scoped>
.message-container {
  background: white;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  padding: 2rem 0;
  border-radius: 20px;
  margin: 1rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.create-hotel-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  background: #f2f2f2;
  height: 100vh;
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
  position: absolute;
  color: var(--brand-green);
  right: 10px;
  top: 10px;
}
</style>
