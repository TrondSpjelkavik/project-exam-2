<template lang="">
  <div class="services">
    <div class="services-icon" v-if="hotel.parking">
      <font-awesome-icon
        class="hotel-star"
        style=" font-size: 20px;"
        :icon="['fas', 'parking']"
      />
      <p>Parking</p>
    </div>
    <div class="services-icon" v-if="hotel.restaurant">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'utensils']" />
      <p>Restaurant</p>
    </div>

    <div class="services-icon" v-if="hotel.smoking">
      <font-awesome-icon
        class="hotel-star"
        style=" font-size: 18px;"
        :icon="['fas', 'smoking-ban']"
      />
      <p>Non-smoking</p>
    </div>

    <div class="services-icon" v-if="hotel.gym">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'dumbbell']" />
      <p>Gym</p>
    </div>
    <div class="services-icon" v-if="hotel.wifi">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'wifi']" />
      <p>Free WiFi</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Services",
  props: ["hotel"]
};
</script>
<style lang="scss">
.services {
  display: flex;
  position: absolute;
  bottom: 0;
  background: var(--brand-blue);
  width: 100%;
  height: 45px;
  justify-content: space-around;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @media (max-width: 800px) {
    position: relative;
  }
}

.services-icon {
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: center;
  color: white;

  p {
    padding-left: 10px;
    font-size: 16px;
    @media (max-width: 800px) {
      display: none;
    }
  }
}
</style>
