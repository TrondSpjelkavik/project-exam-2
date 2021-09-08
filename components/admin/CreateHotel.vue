<template>
  <div class="create-hotel-container">
    <!-- Vuetify with custom class and elements -->
    <v-app>
      <v-card
        width="500"
        class="mx-auto my-auto"
        style="position: relative; max-width: 400px"
      >
        <v-card-title>
          <div class="success-container">
            <h1 class="display-1  mx-auto  ">Create a hotel</h1>
            <div class="success-form mx-auto" v-if="loading">
              Submitting...
            </div>
            <div class="success-form mx-auto" v-if="success">
              Hotel created.
            </div>
          </div>
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="sendForm">
            <v-text-field
              label="Name"
              prepend-icon="mdi-account"
              :error-messages="nameErrors"
              v-model="form.name"
              @input="$v.form.name.$touch()"
            />
            <v-text-field
              label="Address"
              prepend-icon="mdi-email"
              v-model="form.address"
              required
              :error-messages="addressErrors"
              @input="$v.form.address.$touch()"
            />
            <v-text-field
              label="Pitch"
              prepend-icon="mdi-account"
              :error-messages="pitchErrors"
              v-model="form.pitch"
              @input="$v.form.pitch.$touch()"
            />
            <v-text-field
              label="Image"
              prepend-icon="mdi-account"
              :error-messages="imageErrors"
              v-model="form.img_url"
              @input="$v.form.img_url.$touch()"
            />

            <div class="stars">
              <v-text-field
                label="Stars"
                type="number"
                prepend-icon="mdi-account"
                :error-messages="starsErrors"
                v-model="form.stars"
                @input="$v.form.stars.$touch()"
              />
              <v-text-field
                label="Price"
                type="number"
                prepend-icon="mdi-account"
                :error-messages="priceErrors"
                v-model="form.price"
                @input="$v.form.price.$touch()"
              />
            </div>
            <div class="accomodation-type">
              <div class=" services-content ">
                <v-checkbox light v-model="form.bb" label="B & B"></v-checkbox>
                <v-checkbox v-model="form.hotel" label="Hotel"></v-checkbox>
                <v-checkbox
                  v-model="form.guesthouse"
                  label="Guesthouse"
                ></v-checkbox>
              </div>
            </div>
            <div class="service-box">
              <div class="services-content ">
                <v-checkbox light v-model="form.wifi" label="Wifi"></v-checkbox>
                <v-checkbox v-model="form.parking" label="Parking"></v-checkbox>
                <v-checkbox v-model="form.gym" label="Gym"></v-checkbox>
              </div>
              <div class="services-content ">
                <v-checkbox v-model="form.smoking" label="Smoking"></v-checkbox>
                <v-checkbox
                  v-model="form.restaurant"
                  label="Restaurant"
                ></v-checkbox>
              </div>
            </div>

            <v-textarea
              class="test"
              prepend-icon="mdi-message-text"
              label="Description"
              :error-messages="descriptionErrors"
              v-model="form.description"
              @input="$v.form.description.$touch()"
            ></v-textarea>

            <v-card-actions>
              <v-btn type="submit" class=" mt-2 primary">
                Submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-app>
    <!-- Vuetify End  -->
  </div>
</template>

<script>
// Validations from vuelidate / added to plugins

import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  url,
  integer,
  between
} from "vuelidate/lib/validators";

export default {
  name: "CreateHotel",

  mixins: [validationMixin],
  validations: {
    form: {
      name: { required, minLength: minLength(3) },
      address: { required },
      description: { required, minLength: minLength(12) },
      price: { required, integer },
      stars: { required, integer, between: between(1, 5) },
      pitch: { required, minLength: minLength(6) },
      img_url: { required, url }
    }
  },

  data() {
    return {
      loading: false,
      success: false,
      error: "",
      // Sending req on submit
      form: {
        address: "",
        name: "",
        pitch: "",
        description: "",
        img_url: "",
        stars: 0,
        price: "",
        wifi: false,
        parking: false,
        gym: false,
        smoking: false,
        restaurant: false,
        bb: false,
        hotel: false,
        guesthouse: false
      }
    };
  },

  computed: {
    // Validations
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.minLength &&
        errors.push("Name must be min 3 characters long");
      !this.$v.form.name.required && errors.push("Name is required.");
      return errors;
    },
    pitchErrors() {
      const errors = [];
      if (!this.$v.form.pitch.$dirty) return errors;
      !this.$v.form.pitch.minLength &&
        errors.push("Pitch must be min 6 characters long");
      !this.$v.form.pitch.required && errors.push("Pitch is required.");
      return errors;
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.form.img_url.$dirty) return errors;
      !this.$v.form.img_url.url && errors.push("Image must be a valid url");
      !this.$v.form.img_url.required && errors.push("Image is required.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.form.description.$dirty) return errors;
      !this.$v.form.description.minLength &&
        errors.push("description must be min 12 characters long");
      !this.$v.form.description.required &&
        errors.push("description is required.");
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.form.address.$dirty) return errors;
      !this.$v.form.address.required && errors.push("Address is required.");
      return errors;
    },
    priceErrors() {
      const errors = [];
      if (!this.$v.form.price.$dirty) return errors;
      !this.$v.form.price.integer && errors.push("Please use a number");
      !this.$v.form.price.required && errors.push("Price is required.");
      return errors;
    },
    starsErrors() {
      const errors = [];
      if (!this.$v.form.stars.$dirty) return errors;
      !this.$v.form.stars.integer && errors.push("Please use a number");
      !this.$v.form.stars.between &&
        errors.push("Please use a number between 1 and 5");

      !this.$v.form.stars.required && errors.push("Price is required.");
      return errors;
    }
  },

  methods: {
    // Sending data to API. Also validate if the form is pending, or has error.

    async sendForm() {
      this.$v.form.$touch();

      if (this.$v.form.$pending || this.$v.form.$error) return;
      try {
        this.loading = true;

        const formData = new FormData();

        formData.append("data", JSON.stringify(this.form));

        // Strapi pkg for Nuxtjs Read more at https://strapi.nuxtjs.org/
        await this.$strapi.$hotels.create(formData);
      } catch (error) {
        console.log(error);
        this.error = error.message;
      } finally {
        this.loading = false;
        // Checking if there is no error -> sucess message and reset form
        if (!this.error) {
          this.success = true;
          this.$v.form.$reset();
        }
      }
    }
  },
  // Checking if user is authenticated on Strapi
  middleware: "authenticated"
};
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
}

.services-content {
  display: flex;
  justify-content: space-around;
}

.service-box {
  background: var(--brand-grey);
}

.create-hotel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f2f2f2;
}

.theme--light.v-application {
  background: transparent !important;
}

.success-container {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.accomodation-type {
  padding: 1rem 0;
}
</style>
