<template>
  <div class="">
    <SubHeadline headline="Enquiries" />
    <div class="create-hotel-container">
      <div
        class="message-container"
        v-for="enquirie in enquiries"
        :key="enquirie.id"
        @click="enquiriePage(enquirie)"
      >
        <div class="box-foo">
          <p>{{ enquirie.name }}</p>
          <p v-if="!enquirie.hasRead">New</p>
          <p v-if="enquirie.hasRead">Old</p>
          <p>{{ formatDate(enquirie.created_at) }}</p>
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
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY ");
    }
  },
  created() {
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
  width: 500px;
  justify-content: space-between;
}

.active {
  color: blue;
}
</style>
