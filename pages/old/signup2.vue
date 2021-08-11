<template>
  <v-app>
    <v-card width="420" class="mx-auto my-auto">
      <v-card-title class="d-flex flex-column ">
        <h1 class="display-1  mx-auto  ">Sign up</h1>
        <div class="success-form" v-if="form.loading">
          Loading...
        </div>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="sendForm">
          <v-text-field
            label="Email"
            prepend-icon="mdi-account"
            v-model="form.email"
            required
            :error-messages="emailErrors"
            @input="$v.form.email.$touch()"
          />
          <v-text-field
            label="Username"
            prepend-icon="mdi-account"
            :error-messages="userNameErrors"
            v-model="form.username"
            @input="$v.form.username.$touch()"
          />
          <v-text-field
            label="Password"
            type="password"
            prepend-icon="mdi-lock"
            :error-messages="passwordErrors"
            v-model="form.password"
            @input="$v.form.password.$touch()"
          />

          <v-card-actions>
            <v-btn type="submit" class=" mt-2" color="brand-green">
              Sign up
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

export default {
  name: "Contact",
  mixins: [validationMixin],
  validations: {
    form: {
      username: { required, minLength: minLength(4) },
      email: { required, email },
      password: { required, minLength: minLength(4) }
    }
  },

  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        loading: false
      }
    };
  },

  computed: {
    userNameErrors() {
      const errors = [];
      if (!this.$v.form.username.$dirty) return errors;
      !this.$v.form.username.minLength &&
        errors.push("Username must be min 3 characters long");
      !this.$v.form.username.required && errors.push("Username is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Must be valid e-mail");
      !this.$v.form.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength &&
        errors.push("password must be min 4 characters long");
      !this.$v.form.password.required && errors.push("password is required.");
      return errors;
    }
  },

  methods: {
    async sendForm() {
      this.$v.form.$touch();

      if (this.$v.form.$pending || this.$v.form.$error) return;
      try {
        this.form.loading = true;

        const newUser = await this.$strapi.register({
          email: this.form.email,
          username: this.form.username,
          password: this.form.password
        });

        console.log(newUser);
        if (newUser !== null) {
          this.error = "";
          this.$nuxt.$router.push("/login");
        }
      } catch (error) {
        this.form.error = "Please provide a valid email";
      } finally {
        this.form.loading = false;
        if (!this.error) {
          this.$v.form.$reset();
          this.form.name = "";
          this.form.email = "";
          this.form.password = "";
        }
      }
    }
  }
};
</script>

<style></style>
