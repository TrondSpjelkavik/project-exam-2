<template>
  <div class="admin-box">
    <SubHeadline headline="Enquiries" />
    <div class="create-hotel-container">
      <div>
        <h2>New enquirires</h2>
        <div
          class="messages-container"
          v-for="(enquirie, index) in enquiriesRead"
          :key="index"
          @click="enquiriePage(enquirie)"
        >
          <div class="box-foo">
            <p class="message-headline">{{ enquirie.name }}</p>
            <p v-if="!enquirie.hasRead" class="new">New</p>

            <p class="message-date">{{ formatDate(enquirie.created_at) }}</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Old enquirires</h2>
        <div
          class="messages-container"
          v-for="enquirie in enquiriesNotRead"
          :key="enquirie.id"
          @click="enquiriePage(enquirie)"
        >
          <div class="box-foo">
            <p class="message-headline">{{ enquirie.name }}</p>

            <p v-if="enquirie.hasRead" class="old">Old</p>
            <p class="message-date">{{ formatDate(enquirie.created_at) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import SubHeadline from "../layout/SubHeadline.vue";
export default {
  name: "Enquiries",
  props: ["enquiries", "enquiriePage"],
  components: {
    SubHeadline
  },
  methods: {
    // Moment pkg. Date formatter
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY ");
    }
  },
  computed: {
    // Checking if the Enquirie post is read.
    enquiriesRead() {
      return this.enquiries.filter(read => read.hasRead === false);
    },
    enquiriesNotRead() {
      return this.enquiries.filter(read => read.hasRead === true);
    }
  },
  created() {
    // Sorting dates
    const array = this.enquiries;
    array.forEach(item => {
      let dates = [item.created_at];
      const sortedArray = dates.sort((a, b) => a.created_at - b.created_at);
      this.enquiries.created_at = sortedArray;
    });
  }
};
</script>
<style lang="scss" scoped>
.box-foo {
  display: flex;
  width: 400px;
  justify-content: space-between;
}

.enquirie-container {
  display: flex;
  width: 1200px;
  justify-content: space-around;
  margin: 0 auto;
  flex-wrap: wrap;
}

.old {
  color: var(--brand-red);
  font-weight: 700;
}

.new {
  color: green;
  font-weight: 700;
}
</style>
