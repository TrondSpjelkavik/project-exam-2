<template>
  <div class="form-container">
    <div class="form-container__box">
      <h1 class="form-headline">Log in</h1>
      <div class="loading" v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-show="error !== ''" class="error-message">
        <p>{{ error }}</p>
      </div>

      <form @submit="login" class="form-container__box--form">
        <div class="form-input">
          <label class="form-input__label" for="email">Email</label>
          <input
            class="form-input__input"
            v-model="identifier"
            type="email"
            name="email"
            placeholder="email"
          />
        </div>
        <div class="form-input">
          <label class="form-input__label">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="password"
            class="form-input__input"
          />
        </div>
        <div>
          <button
            :disabled="identifier === '' || password === ''"
            type="submit"
            class="submit-button"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      identifier: "",
      password: "",
      error: "",
      loading: false
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        this.loading = true;
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password
        });

        if (user !== null) {
          this.error = "";
          this.$nuxt.$router.push("/admin");
        }
      } catch (error) {
        this.error = "Wrong username or password. Please try again";
      } finally {
        this.loading = false;
      }
    }
  },
  middleware: "authenticated"
};
</script>
<style>
.form-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.1);
}

.form-container__box {
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  padding: 1rem 0;
  justify-content: space-around;
  align-items: center;
  background: var(--brand-green);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.form-container__box--form {
  display: flex;
  flex-direction: column;
  height: 320px;

  justify-content: space-around;
}

.form-headline {
  font-family: Lato;
  font-size: 34px;
}

.form-input {
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-between;
}
.form-input__label {
  font-size: 18px;
}

.form-input__input {
  padding: 0.5rem 0;
  width: 300px;
}

.submit-button {
  display: flex;
  height: 35px;
  width: 100px;
  background: var(--brand-blue);
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.submit-button:disabled {
  background: rgb(128, 128, 128);
  color: rgb(68, 67, 67);
  cursor: not-allowed;
}

::placeholder {
  padding: 0 2px;
  font-size: 16px;
}

.loading {
  display: flex;
  background: var(--brand-blue);
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
