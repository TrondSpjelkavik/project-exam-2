<template>
  <div>
    <div class="hotels-container">
      <div class="marked-main"></div>
      <div
        :key="hotel.id"
        v-for="hotel in hotels"
        class="card"
        @click="hotelPage(hotel)"
      >
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
import Stars from "./Stars.vue";

export default {
  props: ["hotels", "hotelPage", "hotel"],
  components: {
    Stars
  }
};
</script>
<style lang="scss">
.marked-main {
  width: 100%;
  max-width: 1100px;
  height: 100%;

  border-top: 4px solid var(--brand-green);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
}
.card {
  height: 325px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: relative;
  background: white;
  overflow: hidden;
  margin: 1rem;
  border-radius: 20px;
  &:hover {
    filter: brightness(80%);
  }
}

.hotel-headline {
  z-index: 9;
  color: white;
  text-shadow: 2px 2px black;
}

.hotel-features {
  display: flex;
  justify-content: space-around;
  background: var(--brand-blue);
  text-align: center;
  z-index: 9;
}

.hotel-price {
  background: var(--brand-green);
  color: white;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 80px;
  border-radius: 25px;
}

.hotel-btn {
  width: fit-content;
  padding: 0.2rem 1rem;
  margin: 0 auto;
}

.img-hotel {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  position: absolute;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}

h2 {
  text-align: center;
  font-weight: 700;
}

.hotels-container {
  display: flex;
  max-width: 1000px;

  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  margin: 0 auto;
}
</style>
