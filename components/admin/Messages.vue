<template>
  <div class="admin-box">
    <SubHeadline headline="Messages" />
    <div class="create-hotel-container">
      <div
        class="messages-container"
        v-for="message in messages"
        :key="message.id"
        @click="messagePage(message)"
      >
        <div class="message-box">
          <p class="messages-headline">From:</p>
          <p class="messages-content">{{ message.name }}</p>
        </div>

        <p class="message-date">{{ formatDate(message.created_at) }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import SubHeadline from "../layout/SubHeadline.vue";

export default {
  name: "Messages",
  props: ["messages", "messagePage"],
  components: {
    SubHeadline
  },
  methods: {
    // Date formatter. Moment pkg
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  },
  created() {
    // Sorting date
    const array = this.messages;
    array.forEach(item => {
      let dates = [item.created_at];
      const sortedArray = dates.sort((a, b) => a.created_at - b.created_at);
      this.messages.created_at = sortedArray;
    });
  }
};
</script>
<style lang="scss" lang="scss">
.create-hotel-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: space-around;
  margin: 0 auto;
}

.messages-container {
  background: white;
  width: 500px;
  display: flex;
  justify-content: space-between;

  height: fit-content;
  margin: 1rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 1rem;
}

.messages-headline {
  font-weight: 700;
  padding-right: 10px;
  @media (max-width: 450px) {
    padding-right: 0px;
  }
}

.messages-content {
  padding-right: 10px;
}

.message-box {
  display: flex;
  @media (max-width: 450px) {
    display: block;
  }
}

.message-date {
  font-weight: 700;

  color: var(--brand-green);
}
</style>
