<template lang="">
  <div>
    <div>
      <div>
        <ul>
          <div @click="showAll">
            <li>All</li>
          </div>
          <div @click="showHotels">
            <li>Hotels</li>
          </div>
          <div @click="showGuesthouses">
            <li>Guesthouses</li>
          </div>
          <div @click="showBBs">
            <li>Bed & Breakfast</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HousingNav",
  methods: {
    showAll() {
      this.$emit("update:content", "All");
    },
    showHotels() {
      this.$emit("update:content", "Hotels");
    },
    showGuesthouses() {
      this.$emit("update:content", "Guesthouses");
    },
    showBBs() {
      this.$emit("update:content", "BBs");
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  width: 600px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
}
li {
  display: flex;
  width: 100%;
  color: black;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
