<template lang="">
  <div class="create-hotel-container">
    <div class="message-container">
      <p>{{ enquirie.name }}</p>
      <p>{{ enquirie.username }}</p>
      <p>{{ enquirie.email }}</p>
      <p>{{ enquirie.arrival }}</p>
      <p>{{ enquirie.depature }}</p>
      <p>{{ enquirie.enquirie }}</p>
      <v-checkbox
        @click="toggleText(enquirie.id)"
        v-model="hasRead"
        :label="`${text}`"
      ></v-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  props: ["enquirie"],
  data() {
    return {
      hasRead: false,
      text: "Mark as read"
    };
  },
  methods: {
    // Cheking of checkbox is toggled, and updating API -> hasRead
    async toggleText(id) {
      this.text = this.hasRead ? "Mark as unread" : "Mark as read";
      try {
        const update = await this.$strapi.$enquiries.update(id, {
          hasRead: this.hasRead
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    // This.hasRead updated on created
    this.hasRead = this.enquirie.hasRead;
  }
};
</script>
<style lang="scss" scoped>
.create-hotel-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  background: #f2f2f2;
  min-height: 100vh;
}

.message-container {
  background: white;
  max-width: 300px;
  padding-top: 2rem;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: 400px;
  border-radius: 20px;
  margin: 1rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
