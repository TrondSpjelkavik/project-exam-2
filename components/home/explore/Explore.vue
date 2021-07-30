<template>
  <div>
    <Experience />
  </div>
</template>
<script>
import Experience from "./Experience.vue";

export default {
  name: "Explore",
  components: {
    Experience
  }
};
</script>
<style lang="scss">
.explore-box {
  height: 400px;
  display: flex;
  max-width: 1200px;
  justify-content: space-around;
  padding: 2rem 0;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 1050px;
    align-items: center;
  }
}
</style>
