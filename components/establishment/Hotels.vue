<template>
  <div>
    <div class="hotels-container">
      <div class="marked-main"></div>
      <div :key="hotel.id" v-for="hotel in hotels" @click="hotelPage(hotel)">
        <div class="card" v-if="hotel.hotel">
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
  </div>
</template>
<script>
import Stars from "./Stars.vue";

export default {
  props: ["hotels", "hotelPage", "hotel"],
  components: {
    Stars
  }
};
</script>
<style lang="scss"></style>
