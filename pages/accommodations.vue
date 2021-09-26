<template>
  <div>
    <Headline headline="Our housing" />
    <HousingNav :content.sync="comp" />
    <Accommodations
      :hotels="hotels"
      :hotelPage="hotelPage"
      v-if="comp === 'All'"
    />
    <Guesthouses
      :hotels="hotels"
      :hotelPage="hotelPage"
      v-if="comp === 'Guesthouses'"
    />
    <BBs :hotels="hotels" :hotelPage="hotelPage" v-if="comp === 'BBs'" />
    <Hotels :hotels="hotels" :hotelPage="hotelPage" v-if="comp === 'Hotels'" />
  </div>
</template>
<script>
import HousingNav from "../components/establishment/HousingNav.vue";
import Accommodations from "../components/establishment/Accommodations.vue";
import Guesthouses from "../components/establishment/Guesthouses.vue";
import BBs from "../components/establishment/BBs.vue";
import Hotels from "../components/establishment/Hotels.vue";
import Headline from "../components/layout/Headline.vue";

export default {
  components: {
    HousingNav,
    Accommodations,
    Guesthouses,
    BBs,
    Hotels,
    Headline
  },
  data() {
    return {
      comp: "All"
    };
  },
  head() {
    return {
      title: "Our housing"
    };
  },
  async asyncData({ $strapi }) {
    const hotels = await $strapi.$hotels.find();
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
