<template lang="">
  <h1 class="headline">
    {{ headline }}
  </h1>
</template>
<script>
export default {
  name: "Headline",
  props: {
    headline: String,
    required: true
  }
};
</script>
<style lang="scss" scoped>
.headline {
  text-align: center;
  font-size: 44px;
  padding: 2rem 0;
  font-family: var(--font-headline);
  @media (max-width: 400px) {
    font-size: 28px;
  }
}
</style>
