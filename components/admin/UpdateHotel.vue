<template>
  <div class="create-hotel-container">
    <v-app>
      <v-card
        width="500"
        class="mx-auto my-auto"
        style="position: relative; max-width: 400px"
      >
        <v-icon @click="goBack" color="black" size="36" class="back-icon">
          {{ icons.mdiArrowLeft }}
        </v-icon>
        <v-icon
          @click="deleteHotel(hotels.id)"
          color="black"
          size="36"
          class="delete-icon"
        >
          {{ icons.mdiDelete }}
        </v-icon>

        <v-card-title class="header-center">
          <h1 class="display-1  mx-auto  ">Update housing</h1>
          <div class="success-form " v-if="loading">
            Submitting...
          </div>
          <div class="success-form" v-if="success">
            Hotel updated.
          </div>
          <div class="success-form" v-if="deleted">
            Hotel deleted. Redirecting...
          </div>
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="sendForm(hotels.id)">
            <v-text-field
              label="Name"
              prepend-icon="mdi-account"
              :error-messages="nameErrors"
              v-model="name"
              @input="$v.name.$touch()"
            />
            <v-text-field
              label="Address"
              prepend-icon="mdi-email"
              v-model="address"
              required
              :error-messages="addressErrors"
              @input="$v.address.$touch()"
            />
            <v-text-field
              label="Pitch"
              prepend-icon="mdi-account"
              :error-messages="pitchErrors"
              v-model="pitch"
              @input="$v.pitch.$touch()"
            />
            <v-text-field
              label="Image"
              prepend-icon="mdi-account"
              :error-messages="imageErrors"
              v-model="img_url"
              @input="$v.img_url.$touch()"
            />

            <div class="stars">
              <v-text-field
                label="Stars"
                type="number"
                prepend-icon="mdi-account"
                :error-messages="starsErrors"
                v-model="stars"
                @input="$v.stars.$touch()"
              />
              <v-text-field
                label="Price"
                type="number"
                prepend-icon="mdi-account"
                :error-messages="priceErrors"
                v-model="price"
                @input="$v.price.$touch()"
              />
            </div>
            <div class="accomodation-type">
              <small>Please chose only one housing type</small>
              <div class=" services-content ">
                <v-checkbox light v-model="bb" label="B & B"></v-checkbox>
                <v-checkbox v-model="hotel" label="Hotel"></v-checkbox>
                <v-checkbox
                  v-model="guesthouse"
                  label="Guesthouse"
                ></v-checkbox>
              </div>
            </div>
            <div class="service-box">
              <div class="services-content ">
                <v-checkbox light v-model="wifi" label="Wifi"></v-checkbox>
                <v-checkbox v-model="parking" label="Parking"></v-checkbox>
                <v-checkbox v-model="gym" label="Gym"></v-checkbox>
              </div>
              <div class="services-content ">
                <v-checkbox v-model="smoking" label="Smoking"></v-checkbox>
                <v-checkbox
                  v-model="restaurant"
                  label="Restaurant"
                ></v-checkbox>
              </div>
            </div>

            <v-textarea
              class="test"
              prepend-icon="mdi-message-text"
              label="Description"
              :error-messages="descriptionErrors"
              v-model="description"
              @input="$v.description.$touch()"
            ></v-textarea>

            <v-card-actions>
              <v-card-actions>
              <div class="form-actions">
              <v-btn type="submit" class=" mt-2 primary">
                Submit
              </v-btn>
               <v-checkbox class="feature-check" v-model="featured" label="Featured"></v-checkbox>
               </div>
            </v-card-actions>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import { mdiArrowLeft } from "@mdi/js";
import { mdiDelete } from "@mdi/js";

// Validation vuelidate. Added plugin
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  url,
  integer,
  between
} from "vuelidate/lib/validators";

export default {
  name: "Contact",
  props: ["hotels"],

  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(3) },
    address: { required },
    description: { required, minLength: minLength(12) },
    price: { required, integer },
    stars: { required, integer, between: between(1, 5) },
    pitch: { required, minLength: minLength(6) },
    img_url: { required, url }
  },

  created() {
    console.log(this.hotels)
  },

  data() {
    return {
      loading: false,
      success: false,
      deleted: false,
      error: "",
      // Icons
      icons: {
        mdiArrowLeft,
        mdiDelete
      },
      featured: this.hotels.isFeatured,
      address: this.hotels.address,
      name: this.hotels.name,
      pitch: this.hotels.pitch,
      description: this.hotels.description,
      img_url: this.hotels.img_url,
      stars: this.hotels.stars,
      price: this.hotels.price,
      wifi: this.hotels.wifi,
      parking: this.hotels.parking,
      gym: this.hotels.gym,
      smoking: this.hotels.smoking,
      restaurant: this.hotels.restaurant,
      hotel: this.hotels.hotel,
      bb: this.hotels.bb,
      guesthouse: this.hotels.guesthouse
    };
  },

  // Validations and error messages
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must be min 3 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    pitchErrors() {
      const errors = [];
      if (!this.$v.pitch.$dirty) return errors;
      !this.$v.pitch.minLength &&
        errors.push("Pitch must be min 6 characters long");
      !this.$v.pitch.required && errors.push("Pitch is required.");
      return errors;
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.img_url.$dirty) return errors;
      !this.$v.img_url.url && errors.push("Image must be a valid url");
      !this.$v.img_url.required && errors.push("Image is required.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.minLength &&
        errors.push("description must be min 12 characters long");
      !this.$v.description.required && errors.push("description is required.");
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.address.$dirty) return errors;
      !this.$v.address.required && errors.push("Address is required.");
      return errors;
    },
    priceErrors() {
      const errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.integer && errors.push("Please use a number");
      !this.$v.price.required && errors.push("Price is required.");
      return errors;
    },
    starsErrors() {
      const errors = [];
      if (!this.$v.stars.$dirty) return errors;
      !this.$v.stars.integer && errors.push("Please use a number");
      !this.$v.stars.between &&
        errors.push("Please use a number between 1 and 5");

      !this.$v.stars.required && errors.push("Price is required.");
      return errors;
    }
  },

  methods: {
    // Sending data to API. Also validate if the form is pending, or has error.
    async sendForm(id) {
      this.$v.$touch();

      if (this.$v.$pending || this.$v.$error) return;
      try {
        this.loading = true;

        const update = await this.$strapi.$hotels.update(id, {
          address: this.address,
          name: this.name,
          pitch: this.pitch,
          description: this.description,
          img_url: this.img_url,
          stars: this.stars,
          price: this.price,
          wifi: this.wifi,
          parking: this.parking,
          gym: this.gym,
          smoking: this.smoking,
          restaurant: this.restaurant,
          hotel: this.hotel,
          bb: this.bb,
          guesthouse: this.guesthouse
        });
      } catch (error) {
        console.log(error);
        this.error = error.message;
      } finally {
        this.loading = false;
        if (!this.error) {
          this.success = true;
        }
      }
    },
    goBack() {
      // Back function

      this.$nuxt.$router.push("/admin");
    },
    async deleteHotel(id) {
      if (confirm(`Do you want to delete ${this.name}`)) {
        try {
          this.loading = true;
          await this.$strapi.$hotels.delete(id);
        } catch (error) {
          console.log(error);
          this.error = error.message;
        } finally {
          this.loading = false;
          if (!this.error) {
            this.deleted = true;

            setTimeout(() => {
              this.$nuxt.$router.push("/admin");
            }, 2000);
          }
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
}
.theme--light.v-application {
  background: transparent !important;
}

.delete-icon {
  position: absolute;
  right: 20px;
  top: 10px;
}

.back-icon {
  margin-left: 10px;
  margin-top: 10px;
}

.header-center {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.form-actions {
  display: flex;
  align-items: center;
  
  .v-input {
    margin-left: 4rem;
    
  }
}
</style>
