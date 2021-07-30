<template>
  <div class="form-container">
    <div class="form-container__contact">
      <h1 class="form-headline">Contact Us</h1>
      <div class="success-form" v-if="form.loading">
        <p>Submitting...</p>
      </div>
      <div class="success-form" v-if="form.success">
        <p>Thank you for contacting us</p>
      </div>
      <div v-show="form.error !== ''" class="error-message">
        <p>{{ form.error }}</p>
      </div>

      <form
        class="form-container__contact--form "
        ref="form"
        @submit="createPost"
      >
        <div class="form-input">
          <label class="form-input__label">Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="name"
            class="form-input__input"
          />
        </div>
        <span class="validate">{{ validate.name }}</span>

        <div class="form-input">
          <div class="input-container__item">
            <label class="form-input__label" for="email">Email</label>
            <input
              class="form-input__email"
              v-model="form.email"
              name="email"
              type="text"
              placeholder="email"
            />
          </div>
        </div>
        <span class="validate ">{{ validate.email }}</span>
        <div class="input-container">
          <div class="input-container__textarea">
            <label for="message">Description</label>
            <textarea
              v-model="form.message"
              name="message"
              type="text"
              placeholder="message"
              class="message-input"
            />
          </div>
        </div>
        <span class="validate ">{{ validate.message }}</span>

        <div>
          <button type="submit" class="submit-contact">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
        error: "",
        success: false,
        loading: false
      },
      validate: {
        name: "",
        message: "",
        email: ""
      }
    };
  },
  methods: {
    async createPost(e) {
      e.preventDefault();

      if (this.form.name.length <= 2) {
        this.validate.name = "Please use 2 or more characters";
      } else {
        this.validate.name = "";
      }

      if (this.form.message.length <= 8) {
        this.validate.message = "Please use 8 or more characters";
      } else {
        this.validate.message = "";
      }

      if (!this.form.email) {
        this.validate.email = "Please provide an email";
      } else {
        this.validate.email = "";
      }

      if (this.form.message.length >= 8 && this.form.name.length >= 2) {
        try {
          this.form.loading = true;

          const formData = new FormData();

          formData.append("data", JSON.stringify(this.form));

          await this.$strapi.$messages.create(formData);

          if (this.form.error) {
            this.form.error = "";
          }
        } catch (error) {
          this.form.error = "Please provide a valid email";
        } finally {
          this.form.loading = false;
          if (!this.form.error) {
            this.form.success = true;
          }
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
  padding: 2rem 0;
}

// .success-form {
//   display: flex;
//   background: var(--brand-green);
//   height: 40px;
//   width: fit-content;
//   margin: 0 auto;
//   color: white;
//   padding: 0 1rem;
//   justify-content: center;
//   align-items: center;
//   font-size: 14px;
// }

.submit-contact {
  display: flex;
  height: 35px;
  width: 100px;
  background: var(--brand-green);
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.validate {
  color: var(--brand-orange);
  padding-bottom: 5px;
}

.input-container {
  display: flex;
  justify-content: space-between;
  width: 350px;
}

.input-container__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
}

input[type="checkbox"] {
  transform: scale(1.5);
  margin: 0 auto;
  height: 35px;
}

.form-container__contact {
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  padding: 1rem 0;
  justify-content: space-around;
  align-items: center;
  background: var(--brand-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.form-container__contact--form {
  display: flex;
  flex-direction: column;
  height: 370px;

  justify-content: space-around;
}

input[type="text"] {
  height: 35px;
  width: 350px;
}

input[type="number"] {
  height: 35px;
  width: 100px;
}

.input-container__item--label {
  font-size: 12px;
}

textarea {
  width: 350px;
  height: 150px;
}
</style>
