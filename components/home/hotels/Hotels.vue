<template>
  <div>
    <SubHeadline headline="Featured Hotels" />
    <div>
      <Hotel />
    </div>
  </div>
</template>
<script>
import Hotel from "./Hotel.vue";
import SubHeadline from "../../layout/SubHeadline.vue";

export default {
  name: "Hotels",
  components: {
    Hotel,
    SubHeadline
  }
};
</script>
<style></style>
