<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.brandBlue }">
    <v-card width="420" class="mx-auto my-auto">
      <v-card-title class="d-flex flex-column ">
        <h1 class="display-1  mx-auto  ">Contact Us</h1>
        <div class="success-form " v-if="form.loading">
          Submitting...
        </div>
        <div class="success-form" v-if="form.success">
          Thank you for contacting us
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
            :error-messages="nameErrors"
            v-model="form.name"
            @input="$v.form.name.$touch()"
          />
          <v-textarea
            class="test"
            prepend-icon="mdi-message-text"
            label="Message"
            :error-messages="messageErrors"
            v-model="form.message"
            @input="$v.form.message.$touch()"
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
// Validations vuelidate
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required, minLength: minLength(4) },
      email: { required, email },
      message: { required, minLength: minLength(8) }
    }
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        loading: false,
        success: false
      }
    };
  },

  computed: {
    // Validations vuelidate error messages
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.minLength &&
        errors.push("Name must be min 3 characters long");
      !this.$v.form.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Must be valid e-mail");
      !this.$v.form.email.required && errors.push("E-mail is required");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.form.message.$dirty) return errors;
      !this.$v.form.message.minLength &&
        errors.push("Name must be min 8 characters long");
      !this.$v.form.message.required && errors.push("Name is required.");
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

        const formData = new FormData();

        formData.append("data", JSON.stringify(this.form));

        await this.$strapi.$messages.create(formData);
      } catch (error) {
        this.form.error = "Please provide a valid email";
      } finally {
        this.form.loading = false;
        if (!this.error) {
          this.form.success = true;
          this.$v.form.$reset();
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
        }
      }
    }
  }
};
</script>

<style lang="scss">
.success-form {
  display: flex;
  background: var(--brand-green);
  width: fit-content;
  color: white;
  padding: 0 1rem;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
</style>
