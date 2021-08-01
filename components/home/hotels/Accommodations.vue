<template>
  <div>
    <SubHeadline headline="Featured Housing" />
    <div>
      <Hotel :hotelPage="hotelPage" />
    </div>
  </div>
</template>
<script>
import Hotel from "./Hotel.vue";
import SubHeadline from "../../layout/SubHeadline.vue";

export default {
  name: "Accommodations",
  props: ["hotelPage"],
  components: {
    Hotel,
    SubHeadline
  }
};
</script>
<style></style>
