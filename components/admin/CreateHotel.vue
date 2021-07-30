<template>
  <div class="create-hotel-container">
    <form ref="form" @submit="createPost">
      <h2>Create a new hotel</h2>
      <div class="input-container">
        <div class="input-container__item">
          <label for="name">Name</label>
          <input
            v-model="form.name"
            name="name"
            type="text"
            placeholder="name"
          />
        </div>
        <div class="input-container__item">
          <label for="featured">Featured?</label>
          <input v-model="form.isFeatured" name="featured" type="checkbox" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-container__item">
          <label for="address">Address</label>
          <input
            v-model="form.address"
            name="address"
            type="text"
            placeholder="address"
          />
        </div>
      </div>
      <div class="input-container">
        <div class="input-container__item">
          <label for="pitch">Pitch</label>
          <input
            v-model="form.pitch"
            name="pitch"
            type="text"
            placeholder="pitch"
          />
        </div>
      </div>
      <div class="input-container">
        <div class="input-container__item">
          <label for="image">Image</label>
          <input
            v-model="form.img_url"
            name="image"
            type="text"
            placeholder="image"
          />
        </div>
      </div>
      <div class="number-container">
        <div class="input-container__item">
          <label for="stars">Stars</label>
          <input
            v-model="form.stars"
            name="stars"
            type="number"
            placeholder="stars"
          />
        </div>
        <div class="input-container__item">
          <label for="price">Price</label>
          <input
            v-model="form.price"
            name="price"
            type="number"
            placeholder="price"
          />
        </div>
      </div>
      <div class="checkbox-container">
        <div class="input-container__item">
          <label class="input-container__item--label" for="wifi">Wifi?</label>
          <input v-model="form.wifi" name="wifi" type="checkbox" />
        </div>
        <div class="input-container__item">
          <label class="input-container__item--label" for="parking"
            >Parking?</label
          >
          <input v-model="form.parking" name="parking" type="checkbox" />
        </div>
        <div class="input-container__item">
          <label class="input-container__item--label" for="gym">Gym?</label>
          <input v-model="form.gym" name="gym" type="checkbox" />
        </div>
        <div class="input-container__item">
          <label class="input-container__item--label" for="smoking"
            >Smoking?</label
          >
          <input v-model="form.smoking" name="smoking" type="checkbox" />
        </div>
        <div class="input-container__item">
          <label class="input-container__item--label" for="restaurant"
            >Restaurant?</label
          >
          <input v-model="form.restaurant" name="restaurant" type="checkbox" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-container__textarea">
          <label for="description">Description</label>
          <textarea
            v-model="form.description"
            name="description"
            type="text"
            placeholder="description"
          />
        </div>
      </div>

      <div>
        <button :disabled="form.name === ''" type="submit">
          Create
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CreateHotel",
  data() {
    return {
      form: {
        name: "",
        address: "",
        pitch: "",
        image: "",
        stars: 0,
        price: 0,
        isFeatured: false,
        wifi: false,
        parking: false,
        gym: false,
        smoking: false,
        restaurant: false,
        description: "",
        users_permissions_user: this.$strapi.user
      }
    };
  },
  methods: {
    async createPost(e) {
      const formData = new FormData();

      formData.append("data", JSON.stringify(this.form));
      e.preventDefault();
      await this.$strapi.$hotels.create(formData);
    }
  },
  middleware({ $strapi, redirect }) {
    if (!$strapi.user) {
      redirect("/");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/variables.scss";

h2 {
  text-align: center;
  padding: 2rem 0;
}

.create-hotel-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  width: 100%;
  height: 100vh;
}

.input-container {
  display: flex;
  justify-content: space-between;
  width: 350px;
  padding: 0.5rem 0;
}

.number-container {
  display: flex;
  justify-content: space-between;
  width: 250px;
  padding: 0.5rem 0;
}

.checkbox-container {
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 0.5rem 0.5rem;
  background: $brand-grey;
}

.input-container__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
}

.input-container__textarea {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
}

input[type="checkbox"] {
  transform: scale(1.5);
  margin: 0 auto;
  height: 35px;
}

input[type="text"] {
  height: 35px;
  width: 250px;
}

input[type="number"] {
  height: 35px;
  width: 100px;
}

.input-container__item--label {
  font-size: 12px;
}

textarea {
  width: 300px;
  height: 200px;
}
</style>
