<template lang="">
  <h2 class="sub-headline">
    {{ headline }}
  </h2>
</template>
<script>
export default {
  name: "SubHeadline",
  props: {
    headline: String,
    required: true
  }
};
</script>
<style lang="scss" scoped>
.sub-headline {
  text-align: center;
  font-size: 38px;
  padding: 4rem 0;
  font-family: var(--font-headline);
  font-weight: 700;
  @media (max-width: 400px) {
    font-size: 28px;
  }
}
</style>
