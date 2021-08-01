<template>
  <div class="feature-box">
    <div :key="hotel.id" v-for="hotel in hotels" @click="hotelPage(hotel)">
      <div class="card" v-if="hotel.isFeatured">
        <div></div>
        <nuxt-img :src="hotel.img_url" class="img-hotel" />
        <h2 class="hotel-headline">{{ hotel.name }}</h2>
        <div class="hotel-features">
          <Stars :hotel="hotel" />
          <div class="hotel-price">$ {{ hotel.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Stars from "../../establishment/Stars.vue";
export default {
  name: "Hotel",
  props: ["hotelPage"],
  components: {
    Stars
  },

  data() {
    return {
      hotels: []
    };
  },
  async fetch() {
    const url = process.env.STRAPI_URL + "hotels";
    const res = await fetch(url);

    const data = await res.json();

    this.hotels = data;
  }
};
</script>
<style lang="scss">
.feature-box {
  display: flex;
  max-width: 1600px;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
