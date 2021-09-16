<template lang="">
  <div>
    <ul>
      <div @click="showAll" v-model="all" :class="{ active: all }">
        <li>All</li>
      </div>
      <div @click="showHotels" v-model="hotels" :class="{ active: hotels }">
        <li>Hotels</li>
      </div>
      <div
        @click="showGuesthouses"
        v-model="guesthouse"
        :class="{ active: guesthouse }"
      >
        <li>Guesthouses</li>
      </div>
      <div @click="showBBs" v-model="bb" :class="{ active: bb }">
        <li>B & Bs</li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HousingNav",
  data() {
    return {
      all: true,
      hotels: false,
      guesthouse: false,
      bb: false
    };
  },
  methods: {
    // An easy check which component is active, and content updates on each click -> switching component.
    showAll() {
      this.$emit("update:content", "All");

      this.all = true;
      this.hotels = false;
      this.guesthouse = false;
      this.bb = false;
    },
    showHotels() {
      this.$emit("update:content", "Hotels");
      this.all = false;
      this.hotels = true;
      this.guesthouse = false;
      this.bb = false;
    },
    showGuesthouses() {
      this.$emit("update:content", "Guesthouses");
      this.all = false;
      this.hotels = false;
      this.guesthouse = true;
      this.bb = false;
    },
    showBBs() {
      this.$emit("update:content", "BBs");
      this.all = false;
      this.hotels = false;
      this.guesthouse = false;
      this.bb = true;
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
}
li {
  display: flex;
  width: 100%;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.active {
  background: var(--brand-green);
  color: white;
}
</style>
