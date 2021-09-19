<template>
  <div class="admin-box">
    <SubHeadline headline="Enquiries" />
    <div class="create-hotel-container">
      <div>
        <h2>New enquirires</h2>
        <div
          class="enquirie-container"
          v-for="(enquirie, index) in enquiriesRead"
          :key="index"
          @click="enquiriePage(enquirie)"
        >
          <div class="message-box">
            <p class="enquirie-headline">{{ enquirie.name }}</p>
            <p v-if="!enquirie.hasRead" class="new">New</p>
          </div>
          <p class="message-date">{{ formatDate(enquirie.created_at) }}</p>
        </div>
      </div>
      <div>
        <h2>Old enquirires</h2>
        <div
          class="enquirie-container"
          v-for="enquirie in enquiriesNotRead"
          :key="enquirie.id"
          @click="enquiriePage(enquirie)"
        >
          <div class="message-box">
            <p class="enquirie-headline">{{ enquirie.name }}</p>

            <p v-if="enquirie.hasRead" class="old">Old</p>
          </div>
          <p class="message-date">{{ formatDate(enquirie.created_at) }}</p>
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
.enquirie-container {
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
  @media (max-width: 520px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 320px;
  }
}

.old {
  color: var(--brand-red);
  font-weight: 700;
  margin-left: 5px;
}

.new {
  color: green;
  font-weight: 700;
  margin-left: 5px;
}

.enquirie-headline {
  font-weight: 700;
  padding-left: 5px;
}
</style>
