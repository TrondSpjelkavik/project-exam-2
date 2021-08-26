<template>
  <div>
    <footer>
      <div class="footer-container">
        <nuxt-img src="/footer-logo.svg" class="footer-logo" format="svg" />
        <h2 class="footer-headline">Search, book and explore</h2>
        <div class="footer-social">
          <font-awesome-icon class="footer-icon" :icon="['fab', 'twitter']" />
          <font-awesome-icon class="footer-icon" :icon="['fab', 'instagram']" />
          <font-awesome-icon class="footer-icon" :icon="['fab', 'facebook']" />
        </div>
      </div>
    </footer>
    <p>Copyright 2021 Holidaze</p>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
footer {
  height: 400px;
  border-top: 4px solid var(--brand-orange);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
}
.footer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
}
.footer-social {
  display: flex;
  justify-content: space-between;
  width: 150px;
}

.footer-icon {
  font-size: 36px;
  color: var(--brand-blue);
  cursor: pointer;
  &:hover {
    color: var(--brand-orange);
  }
}

p {
  text-align: center;
  padding-bottom: 10px;
  font-weight: 700;
  background-color: white;
}
</style>
