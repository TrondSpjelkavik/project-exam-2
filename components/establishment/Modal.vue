<template>
  <v-app>
    <v-card
      width="500"
      class="mx-auto my-auto"
      style="position: relative; max-width: 400px"
    >
      <div class="close-btn rounded-0 " @click="closeModal">X</div>
      <v-card-title>
        <div class="success-container">
          <h1 class="display-1  mx-auto  ">Enquirie</h1>

          <div class="success-form mx-auto " v-if="loading">
            Submitting...
          </div>
          <div class="success-form mx-auto " v-if="success">
            We'll get back to you shortly
          </div>
        </div>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="sendForm">
          <v-text-field
            label="Email"
            prepend-icon="mdi-email"
            v-model="form.email"
            required
            :error-messages="emailErrors"
            @input="$v.form.email.$touch()"
          />
          <v-text-field
            label="Name"
            prepend-icon="mdi-account"
            :error-messages="userNameErrors"
            v-model="form.username"
            @input="$v.form.username.$touch()"
          />

          <div>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.arrival"
                  label="Arrival"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>

              <v-date-picker
                v-model="form.arrival"
                no-title
                scrollable
                @input="menu = false"
              >
                <v-spacer></v-spacer>
              </v-date-picker>
            </v-menu>
            <v-menu
              ref="menu"
              v-model="menu2"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.depature"
                  label="Depature"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>

              <v-date-picker
                v-model="form.depature"
                no-title
                scrollable
                @input="menu2 = false"
              >
                <v-spacer></v-spacer>
              </v-date-picker>
            </v-menu>
          </div>

          <v-textarea
            class="test"
            prepend-icon="mdi-message-text"
            label="Message"
            v-model="form.enquirie"
            @input="$v.form.enquirie.$touch()"
          ></v-textarea>

          <v-card-actions>
            <v-btn type="submit" class=" mt-2 primary">
              Send
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

import DatePicker from "./DatePicker.vue";

export default {
  name: "Contact",
  props: ["closeModal", "hotel", "arrival"],
  components: {
    DatePicker
  },
  mixins: [validationMixin],
  validations: {
    form: {
      username: { required, minLength: minLength(4) },
      email: { required, email },
      enquirie: { minLength: minLength(0) }
    }
  },

  data() {
    return {
      menu: false,
      menu2: false,
      loading: false,
      success: false,
      error: "",
      form: {
        username: "",
        name: "",
        hasRead: false,
        email: "",
        enquirie: "",
        arrival: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        depature: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      }
    };
  },

  computed: {
    userNameErrors() {
      const errors = [];
      if (!this.$v.form.username.$dirty) return errors;
      !this.$v.form.username.minLength &&
        errors.push("Name must be min 3 characters long");
      !this.$v.form.username.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Must be valid e-mail");
      !this.$v.form.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  created() {
    this.setName();
  },

  methods: {
    setName() {
      this.form.name = this.hotel.name;
    },

    async sendForm() {
      this.$v.form.$touch();

      if (this.$v.form.$pending || this.$v.form.$error) return;
      try {
        this.loading = true;

        const formData = new FormData();

        formData.append("data", JSON.stringify(this.form));

        await this.$strapi.$enquiries.create(formData);
      } catch (error) {
        console.log(error);
        this.error = error.message;
      } finally {
        this.loading = false;
        if (!this.error) {
          this.success = true;
          // reset dates, form and validation
          this.$v.form.$reset();
          this.form.username = "";
          this.form.name = "";
          this.form.email = "";
          this.form.enquirie = "";
          this.form.arrival = new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .substr(0, 10);
          this.form.depature = new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .substr(0, 10);
        }
      }
    }
  },
  middleware: "authenticated"
};
</script>

<style lang="scss" scoped>
.theme--light.v-application {
  background: transparent !important;
}

.success-container {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.close-btn {
  background: var(--brand-red);
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 999;
  color: white;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
}
</style>
