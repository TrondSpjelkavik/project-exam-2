<template>
  <div>
    <Message :message="message" />
  </div>
</template>
<script>
import Message from "../../components/admin/Message.vue";

export default {
  components: {
    Message
  },
  head() {
    return {
      title: this.message.name
    };
  },

  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    const message = await $strapi.$messages.findOne(id);

    return {
      message
    };
  }
};
</script>
<style scoped>
h1 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0.5em 0;
}
</style>
