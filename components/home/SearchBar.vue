<template>
  <div>
    <form @submit.prevent>
      <input
        type="text"
        v-model.trim="search"
        placeholder="search hotels"
        @keyup="getAllHotels"
        v-on:keyup="hidden = true"
      />

      <button>
        <font-awesome-icon icon="search" style="font-size: 16px" />
        Search
      </button>
    </form>
    <ul :class="{ hidden: hidden }">
      <li v-for="hotel in hotels" :key="hotel.id" @click="hotelPage(hotel)">
        {{ hotel.name }}
      </li>
      <li>{{ hotels.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      hotels: [],
      search: "",
      hidden: false,
      results: ""
    };
  },
  methods: {
    // Fetching all hotels from API.
    async getAllHotels() {
      const url = process.env.STRAPI_URL + "hotels";
      const res = await fetch(url);

      const data = await res.json();

      // Filtering this.search when typing
      if (this.search) {
        this.hotels = data.filter(hotel =>
          hotel.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.hotels = data;
      }
      // No results if the length of hotels is 0 after filtering
      if (this.hotels.length === 0) {
        this.hotels.name = "No results...";
      }

      if (this.search.length >= 1) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    },
    hotelPage(hotel) {
      // Sending user to hotel on click
      this.$nuxt.$router.push(`/hotel/${hotel.id}`);
    }
  },
  created() {
    // fetching all hotels on created
    this.getAllHotels();
  }
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.hidden {
  display: block;
}

ul {
  display: none;
  position: absolute;
  background: var(--brand-white);
  left: 14px;
  width: 352px;

  border-left: 3px solid var(--brand-green);
  border-bottom: 3px solid var(--brand-green);
  border-right: 3px solid var(--brand-green);
  li {
    font-size: 20px;
    z-index: 9999;
    color: black;
    cursor: pointer;
    padding-left: 5px;
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--brand-green);
    }
  }
  @media (max-width: 800px) {
    width: 201px;
    left: 0px;
  }
}

input {
  width: 350px;
  height: 40px;
  font-size: 18px;
  border: 3px solid var(--brand-green);
  border-right: none;
  padding-left: 10px;
  background: white;
  &:focus {
    outline: none;
  }
  @media (max-width: 800px) {
    width: 200px;
    height: 30px;
  }
}

button {
  border: 3px solid var(--brand-green);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left: none;
  width: 100px;
  color: var(--brand-white);
  background: var(--brand-green);
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;
}
</style>
