<template>
  <div class="header-container">
    <Heading headline="Welcome to Holidaze" />
    <h2>Search, book and explore</h2>
    <SearchBar />
  </div>
</template>
<script>
import Heading from "../layout/Heading.vue";
import SearchBar from "../home/SearchBar.vue";

export default {
  name: "Header",
  components: {
    Heading,
    SearchBar
  }
};
</script>
<style lang="scss" scoped>
.header-container {
  position: absolute;
  color: var(--brand-white);
  top: 50%;
  transform: translateY(-50%);
  @media (max-height: 800px) {
     top: 40%;
  transform: translateY(-40%);
  }
   @media (max-height: 700px) {
     top: 30%;
  transform: translateY(-30%);
  }
}

h2 {
  text-align: center;
  color: white;
  text-shadow: 2px 2px black;
  font-size: 22px;
  font-weight: 400;
  font-family: var(--font-headline);
  @media (max-width: 800px) {
    padding-top: 5px;
    font-size: 18px;
  }
}
</style>
