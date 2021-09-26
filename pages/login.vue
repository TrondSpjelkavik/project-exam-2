<template>
  <div>
    <Login />
  </div>
</template>
<script>
import Login from "../components/login/Login.vue";
export default {
  components: {
    Login
  },
  head() {
    return {
      title: "Login"
    };
  }
};
</script>
<style></style>
