<template>
  <div>
    <Hotel :hotel="hotel" />
  </div>
</template>
<script>
import Hotel from "../../components/establishment/Hotel.vue";

export default {
  components: {
    Hotel
  },
  head() {
    return {
      title: this.hotel.name
    };
  },

  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    const hotel = await $strapi.$hotels.findOne(id);
    return {
      hotel
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
