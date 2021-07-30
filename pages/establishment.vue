<template>
  <div>
    <p>Create new hotel</p>
    <form ref="form" @submit="createPost">
      <h2>Create a new hotel</h2>
      <div>
        <input v-model="form.name" name="name" type="text" placeholder="name" />
      </div>
      <!-- <div>
        <input
          v-model="form.description"
          name="description"
          type="text"
          placeholder="description"
          class="p-3 my-3 border w-full"
        />
      </div>
      <div>
        <textarea
          v-model="form.Content"
          name="Content"
          cols="30"
          rows="10"
          class="p-3 my-3 border w-full"
        ></textarea>
      </div>
      <div>
        <input
          type="file"
          name="Image"
          class="p-3 my-3 border w-full"
          @change="assignFileInput()"
        />
      </div> -->
      <div>
        <button :disabled="form.name === ''" type="submit">
          Create
        </button>
      </div>
    </form>

    <!-- <form @submit.prevent="handleSubmit">
      <div>
        <label>Name</label>
        <input type="text" v-model="name" placeholder="Name" />
      </div>

      <div>
        <label>Feature this hotel?</label>
        <input type="checkbox" v-model="isFeatured" />
      </div>
      <div>
        <label>Pitch</label>
        <input type="text" v-model="pitch" placeholder="Pitch" />
      </div>

      <div>
        <label>Other</label>
        <input type="checkbox" v-model="wifi" />
        Wifi
        <input type="checkbox" v-model="parking" />
        Parking
        <input type="checkbox" v-model="gym" />
        Gym
        <input type="checkbox" v-model="smoking" />
        Smoking
        <input type="checkbox" v-model="restaurant" />
        Restaurant
      </div>
      <div>
        <label>Image url</label>
        <input type="text" v-model="img_url" placeholder="Image url" />
      </div>
      <div>
        <label>Price</label>
        <input type="number" v-model="price" placeholder="Price" />
      </div>
      <div>
        <label>Stars</label>
        <input type="number" v-model="stars" placeholder="Stars" />
      </div>
      <div>
        <label>Address</label>
        <input type="text" v-model="address" placeholder="Address" />
      </div>
      <div>
        <label>Description</label>
        <textarea type="text" v-model="description" placeholder="Description" />
      </div>

      <button type="submit">Sign In</button>
    </form> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
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
      this.$nuxt.$router.push("/admin");
    }
  },
  middleware({ $strapi, redirect }) {
    if (!$strapi.user) {
      redirect("/");
    }
  }
};

// import axios from "axios";

// export default {
//   name: "Login",

//   data() {
//     return {
//       name: "",
//       isFeatured: false,
//       pitch: "",
//       wifi: false,
//       parking: false,
//       gym: false,
//       smoking: false,
//       restaurant: false,
//       img_url: "",
//       price: 0,
//       stars: 0,
//       address: "",
//       description: ""
//     };
//   },
//   methods: {
//     async handleSubmit() {
//       const data = {
//         name: this.name,
//         isFeatured: this.isFeatured,
//         pitch: this.pitch,
//         wifi: this.wifi,
//         parking: this.parking,
//         gym: this.gym,
//         smoking: this.smoking,
//         restrurant: this.restaurant,
//         img_url: this.img_url,
//         price: this.price,
//         stars: this.stars,
//         address: this.address,
//         description: this.description
//       };

//       const url = "https://young-gorge-89900.herokuapp.com/hotels";

//       const token = localStorage.getItem("token");

//       console.log(token);

//       const resonse = await axios.post(url, data, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       console.log("response", resonse.data);
//     }
//   }
// };
</script>
<style scoped>
form {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
}
</style>
