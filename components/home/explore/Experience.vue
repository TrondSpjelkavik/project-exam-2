<template>
  <div class="explore-box">
    <div :key="exp.id" v-for="exp in xp" class="experience-box">
      <div class="icon-box">
        <font-awesome-icon :icon="exp.logo" class="explore-icon" />
      </div>
      <p class="experience-paragraph">{{ exp.info }}</p>
      <NuxtLink :to="exp.src">{{ exp.name }}</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "Experience",
  data() {
    return {
      xp: []
    };
  },
  created() {
    // Experience data
    this.xp = [
      {
        id: 1,
        logo: "headset",
        name: "Contact us",
        info:
          "Our costumer service is a award winning service. We are her for you 24/7. We can help you with booking, order or just answering your questions.",
        src: "/contact"
      },
      {
        id: 2,
        logo: "dollar-sign",
        type: "Price range",
        info:
          "We offer great prices on our hotels deals. If you have any questions about our prices or hotel deals. Send the hotel an enquiry, and we will help you find the best deals",
        name: "Hotels",
        src: "/accommodations"
      },
      {
        id: 3,
        logo: "award",
        type: "Award winning",
        info:
          "Our award winning hotels is the best Bergen has to offer. Choose between hotels at the coast, in the center of the city, spa hotels or our famous Linden hotel that guarantees rain",
        name: "Find a hotel",
        src: "/accommodations"
      }
    ];
  }
};
</script>
<style lang="scss" scoped>
.experience-box {
  display: flex;
  background: var(--brand-grey);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  width: 350px;
  border-bottom: 5px solid var(--brand-blue);
  box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1089px) {
    height: 300px;
    width: 300px;
  }
}
.icon-box {
  color: var(--brand-blue);
}
.experience-paragraph {
  max-width: 320px;
  font-size: 18px;
  @media (max-width: 1089px) {
    font-size: 16px;
    max-width: 260px;
  }
}

.explore-icon {
  font-size: 48px;
  @media (max-width: 1089px) {
    font-size: 38px;
  }
}

a {
  background: var(--brand-green);
  cursor: pointer;
  color: var(--brand-white);
  padding: 0.7rem 2rem;
  border-radius: 25px;
  font-size: 18px;
  width: fit-content;
  text-decoration: none;
  @media (max-width: 1089px) {
    font-size: 16px;
    padding: 0.5rem 1rem;
  }
}
a:hover {
  background: var(--brand-orange);
}
</style>
