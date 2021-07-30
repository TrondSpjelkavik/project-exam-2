<template>
  <div>
    <Hotels :hotels="hotels" :hotelPage="hotelPage" />
  </div>
</template>
<script>
import Hotels from "../components/establishment/Hotels.vue";

export default {
  components: {
    Hotels
  },
  async asyncData({ $strapi }) {
    const hotels = await $strapi.$hotels.find();
    console.log(hotels);
    return { hotels };
  },
  methods: {
    hotelPage(hotel) {
      this.$nuxt.$router.push(`/hotel/${hotel.id}`);
    }
  }
};
</script>
<style lang="scss" scoped></style>
