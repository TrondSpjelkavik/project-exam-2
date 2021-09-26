<template>
  <div>
    <div class="head-img">
      <Header />
      <video muted autoPlay loop>
        <source :src="res.video" type="video/mp4" />
      </video>
    </div>
    <Explore />
    <Accommodations :hotelPage="hotelPage" />
    <Questions />
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Explore from "../components/home/explore/Explore.vue";
import Accommodations from "../components/home/hotels/Accommodations.vue";
import Questions from "../components/home/questions/Questions.vue";

export default {
  components: {
    Header,
    Explore,
    Accommodations,
    Questions
  },

  head() {
    return {
      title: "Welcome to Holidaze"
    };
  },

  async asyncData({ $strapi }) {
    const hotels = await $strapi.$hotels.find();
    const video = await fetch(
      "https://young-gorge-89900.herokuapp.com/header-video"
    );
    const res = await video.json();
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

small {
  display: flex;
  justify-content: center;
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

  background-image: url("../assets/pattern.png");
  background-repeat: repeat;
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
