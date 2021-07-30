<template>
  <h1>{{ headline }}</h1>
</template>
<script>
export default {
  name: "Heading",
  props: {
    headline: String,
    required: true
  }
};
</script>
<style lang="scss" scoped>
h1 {
  color: var(--brand-white);
  text-shadow: 2px 2px black;
  font-size: 50px;
  white-space: nowrap;
  font-family: var(--font-headline);
  @media (max-width: 800px) {
    font-size: 28px;
    text-align: center;
  }
}
</style>
