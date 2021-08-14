<template>
  <div>
    <!-- Layout -->
    <Nav />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/layout/Nav.vue";
import Footer from "../components/layout/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  }
};
</script>

<style>
main {
  min-height: 100vh;
}
</style>
