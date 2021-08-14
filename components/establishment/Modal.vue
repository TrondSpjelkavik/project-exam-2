<template>
  <div class="modal-box">
    <h2>Enquirie</h2>
    <div class="loading" v-if="form.loading">
      <p>Submitting..</p>
    </div>
    <div class="loading" v-if="form.success">
      <p>Thank you for your enquirie</p>
    </div>
    <div v-show="form.error !== ''" class="error-message">
      <p>{{ form.error }}</p>
    </div>
    <form @submit="enquirie">
      <div class="modal-input">
        <label class="form-input__label">Name</label>
        <input
          class="modal-input__text"
          v-model="form.username"
          type="text"
          placeholder="name"
        />
      </div>
      <div class="modal-input">
        <label class="form-input__label">Email</label>
        <input
          class="modal-input__text"
          v-model="form.email"
          type="email"
          placeholder="email"
        />
      </div>
      <div class="modal-input__date">
        <div class="modal-input">
          <label class="form-input__label">Arrival</label>
          <input
            class="modal-input__date"
            type="date"
            placeholder="date"
            v-model="form.arrival"
          />
        </div>
        <div class="modal-input">
          <label class="form-input__label">Deature</label>
          <input
            class="modal-input__date"
            type="date"
            placeholder="date"
            v-model="form.depature"
          />
        </div>
      </div>
      <div class="modal-input__textarea">
        <label class="form-input__label">Comments</label>
        <textarea v-model="form.enquirie" type="text" placeholder="comments" />
      </div>
      <div>
        <button class="order-now" type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: ["hotel"],
  data() {
    return {
      form: {
        username: "",
        name: "",
        enquirie: "",
        name: "",
        email: "",
        error: "",
        success: false,
        loading: false,
        arrival: new Date().toISOString().slice(0, 10),
        depature: new Date().toISOString().slice(0, 10)
      },
      validate: {
        username: "",
        comments: "",
        email: ""
      }
    };
  },
  created() {
    // Calling setName method and sets name for data: form.name
    this.setName();
  },
  methods: {
    // Sets name for housing name to API
    setName() {
      this.form.name = this.hotel.name;
    },
    async enquirie(e) {
      e.preventDefault();
      try {
        this.form.loading = true;
        const formData = new FormData();

        formData.append("data", JSON.stringify(this.form));

        await this.$strapi.$enquiries.create(formData);
      } catch (error) {
        console.log(error);
        this.form.error = "Please provide a valid email";
      } finally {
        this.form.loading = false;
        this.form.success = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
h2 {
  padding-bottom: 20px;
}
.modal-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal-input {
  display: flex;
  flex-direction: column;
  height: 55px;
  justify-content: space-between;

  .modal-input__text {
    border: none;
    width: 300px;
    height: 30px;
    font-size: 16px;
    padding: 0 5px;
    &:focus {
      outline: none;

      border-bottom: 2px solid var(--brand-green);
    }
  }
  .modal-input__date {
    border: none;
    font-size: 16px;
    padding: 5px;
    &:focus {
      outline: none;

      border-bottom: 2px solid var(--brand-green);
    }
  }
}

.modal-input__textarea {
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;

  textarea {
    border: none;
    font-size: 16px;
    width: 300px;
    height: 200px;
    padding: 5px;
    &:focus {
      outline: none;

      border-bottom: 2px solid var(--brand-green);
    }
  }
}

.modal-input__date {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.order-now {
  width: 100px;
  border-radius: 20px;
  border: 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: white;
  background: var(--brand-green);
  font-size: 16px;
  height: 40px;
  cursor: pointer;
}

form {
  width: 500px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.loading {
  display: flex;
  background: #28696a;
  height: 40px;
  width: fit-content;
  margin: 0 auto;
  color: white;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
}

.error-message {
  display: flex;
  background: #ac2c2c;
  height: 40px;
  width: fit-content;
  margin: 0 auto;
  color: white;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
}
</style>
