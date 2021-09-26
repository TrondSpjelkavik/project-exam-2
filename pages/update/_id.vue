<template>
  <div>
    <UpdateHotel :hotels="hotels" />
  </div>
</template>
<script>
import UpdateHotel from "../../components/admin/UpdateHotel.vue";

export default {
  components: {
    UpdateHotel
  },

  head() {
    return {
      title: this.hotels.name
    };
  },

  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    const hotels = await $strapi.$hotels.findOne(id);
    return {
      hotels
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
