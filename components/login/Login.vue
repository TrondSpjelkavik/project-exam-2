<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.brandGreen }">
    <v-card width="400" class="mx-auto my-auto">
      <v-card-title class="d-flex flex-column ">
        <h1 class="display-1  mx-auto  ">Sign in</h1>
        <div class="success-form" v-if="form.loading">
          Loading...
        </div>
        <div class="failure-form" v-if="form.error">
          {{ form.error }}
        </div>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="sendForm">
          <v-text-field
            label="Email"
            prepend-icon="mdi-email"
            v-model="form.identifier"
            required
            :error-messages="identifierErrors"
            @input="$v.form.identifier.$touch()"
          />

          <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :error-messages="passwordErrors"
            v-model="form.password"
            @input="$v.form.password.$touch()"
            @click:append="showPassword = !showPassword"
          />

          <v-card-actions>
            <v-btn type="submit" class=" mt-2 primary">
              Sign in
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
// Validations from vuelidate / added to plugins
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  mixins: [validationMixin],
  validations: {
    form: {
      identifier: { required, email },
      password: { required, minLength: minLength(4) }
    }
  },

  data() {
    return {
      showPassword: false,
      form: {
        identifier: "",
        password: "",
        error: "",
        loading: false
      }
    };
  },

  computed: {
    // Validations and error messages
    identifierErrors() {
      const errors = [];
      if (!this.$v.form.identifier.$dirty) return errors;
      !this.$v.form.identifier.email && errors.push("Must be valid e-mail");
      !this.$v.form.identifier.required && errors.push("E-mail is required");
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
    // Sending data to API. Also validate if the form is pending, or has error.
    async sendForm() {
      this.$v.form.$touch();

      if (this.$v.form.$pending || this.$v.form.$error) return;
      try {
        this.form.loading = true;

        const user = await this.$strapi.login({
          identifier: this.form.identifier,
          password: this.form.password
        });

        if (user !== null) {
          this.error = "";
          this.$nuxt.$router.push("/admin");
        }
      } catch (error) {
        this.form.error = "Wrong username or password.";
      } finally {
        this.form.loading = false;
        if (!this.form.error) {
          this.$v.form.$reset();
          this.form.identifier = "";
          this.form.password = "";
        }
      }
    }
  },

  // Cheking if the user is authenticated with strapi
  middleware: "authenticated"
};
</script>

<style lang="scss" scoped>
// Changed bootstrap color to brand-green
.v-application--wrap {
  background: var(--brand-green) !important;
}

.failure-form {
  display: flex;
  background: var(--brand-red);
  width: fit-content;
  color: white;
  padding: 0 1rem;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
</style>
