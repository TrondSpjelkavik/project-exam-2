<template>
  <section class="error-section">
    <div class="error-box">
      <nuxt-img src="/404.jpg" class="img" height="300" width="300" />
      <div class="error-content" v-if="error.statusCode === 404">
        <h1>Whooops</h1>
        <p>This is not the webpage you are looking for</p>
        <NuxtLink to="/">Home page</NuxtLink>
      </div>
      <div class="error-content" v-else>
        <h1>An error occurred</h1>
        <p>This was unexpected, go back home and try again</p>
        <NuxtLink to="/">Home page</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>

<style lang="scss" scoped>
.error-section {
  min-height: 100vh;
  background: var(--brand-blue);

  .error-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 90vh;
    max-width: 800px;
    margin: 0 auto;
    color: white;
    @media (max-width: 778px) {
      flex-direction: column;
      justify-content: center;
    }

    .img {
      border-radius: 50%;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      border-radius: 20px;
      text-decoration: none;
      padding: 0.5rem 0;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      color: white;
      background: var(--brand-green);
      cursor: pointer;
      &:hover {
        background: var(--brand-orange);
      }
    }

    .error-content {
      display: flex;
      flex-direction: column;
      height: 250px;
      justify-content: space-around;
      padding-left: 20px;
      @media (max-width: 778px) {
        padding: 0 5px;
      }
    }
  }
}
</style>
