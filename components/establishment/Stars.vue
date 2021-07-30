<template lang="">
  <div class="stars">
    <div v-if="hotel.stars == 1">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
    </div>
    <div v-if="hotel.stars == 2">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
    </div>
    <div v-if="hotel.stars == 3">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
    </div>
    <div v-if="hotel.stars == 4">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
    </div>
    <div v-if="hotel.stars == 5">
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
      <font-awesome-icon class="hotel-star" :icon="['fas', 'star']" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Stars",
  props: ["hotel"]
};
</script>
<style lang="scss" scoped>
.stars {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.hotel-star {
  color: var(--brand-orange);
}
</style>
