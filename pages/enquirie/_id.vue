<template>
  <div>
    <Enquirie :enquirie="enquirie" />
  </div>
</template>
<script>
import Enquirie from "../../components/admin/Enquirie.vue";

export default {
  components: {
    Enquirie
  },
  head() {
    return {
      title: this.enquirie.name
    };
  },

  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    const enquirie = await $strapi.$enquiries.findOne(id);

    return {
      enquirie
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
