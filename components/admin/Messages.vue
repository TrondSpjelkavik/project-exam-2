<template lang="">
  <div class="container-hoo">
    <SubHeadline headline="Messages" />
    <div class="create-hotel-container">
      <div
        class="message-container"
        v-for="message in messages"
        @click="messagePage(message)"
      >
        <div class="message-box">
          <p class="message-headline">From:</p>
          <p class="message-content">{{ message.name }}</p>
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
<style lang="scss">
.create-hotel-container {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  background: #f2f2f2;
  margin: 0 auto;
}

.message-container {
  background: white;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  margin: 1rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 1rem;
}

.message-headline {
  font-weight: 700;
  padding-right: 10px;
}

.message-box {
  display: flex;
}

.message-date {
  font-weight: 700;

  color: var(--brand-green);
}
</style>
