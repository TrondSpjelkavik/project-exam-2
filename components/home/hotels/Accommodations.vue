<template>
  <div>
    <SubHeadline headline="Featured Housing" />
    <div>
      <Hotel />
    </div>
  </div>
</template>
<script>
import Hotel from "./Hotel.vue";
import SubHeadline from "../../layout/SubHeadline.vue";

export default {
  name: "Accommodations",
  components: {
    Hotel,
    SubHeadline
  }
};
</script>
<style></style>
