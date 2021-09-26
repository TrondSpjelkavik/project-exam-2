<template>
  <div>
    <Signup />
  </div>
</template>
<script>
import Signup from "../components/signup/Signup.vue";

export default {
  components: {
    Signup
  },
  head() {
    return {
      title: "Sign up"
    };
  }
};
</script>
<style lang="scss"></style>
