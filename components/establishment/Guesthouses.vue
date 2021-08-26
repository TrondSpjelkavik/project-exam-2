<template>
  <div>
    <div class="hotels-container">
      <div class="marked-div"></div>
      <div :key="hotel.id" v-for="hotel in hotels" @click="hotelPage(hotel)">
        <div class="card" v-if="hotel.guesthouse">
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
<style lang="scss" scoped>
.marked-div {
  width: 50%;
  height: 400px;
  border-top: 4px solid var(--brand-blue);
  border-radius: 26px 36px 0px 0px;
  position: absolute;
}
</style>
