<template>
  <div>
    <div class="head-img">
      <Header />
      <video muted autoPlay loop>
        <source :src="res.video" type="video/mp4" />
      </video>
    </div>
    <Explore />
    <Hotels />
    <Questions />
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Explore from "../components/home/explore/Explore.vue";
import Hotels from "../components/home/hotels/Hotels.vue";
import Questions from "../components/home/questions/Questions.vue";
import Nav from "../components/layout/Nav.vue";

export default {
  components: {
    Header,
    Explore,
    Hotels,
    Questions,
    Nav
  },
  async asyncData({ $strapi }) {
    const hotels = await $strapi.$hotels.find();
    const video = await fetch(
      "https://young-gorge-89900.herokuapp.com/header-video"
    );
    const res = await video.json();
    console.log(res);
    return { hotels, res };
  },
  methods: {
    hotelPage(hotel) {
      this.$nuxt.$router.push(`/hotel/${hotel.id}`);
    }
  }
};
</script>

<style lang="scss">
:root {
  --brand-green: #28696a;
  --brand-orange: #f4ae3f;
  --brand-grey: #f0e6d7;
  --brand-white: #ffff;
  --brand-grey-background: #f0ece7;
  --brand-blue: #213058;
  --brand-red: #ac2c2c;
  --font-headline: "Lato", sans-serif;
  --font-text: "Montserrat", sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

video {
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 800px;
}

body {
  font-family: var(--font-text);
  margin: 0 auto;
}

.v-btn__content {
  font-weight: 700;
}

.v-application {
  font-family: var(--font-text);
}

input:focus {
  outline: none;
}

ul {
  list-style: none;
}

.head-img {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
</style>
