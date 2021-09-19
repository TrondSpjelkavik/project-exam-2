<template>
  <div>
    <nav>
      <NuxtLink to="/">
        <nuxt-img
          src="/holidaze-logo.svg"
          class="logo"
          format="svg"
          height="45"
          widht="80"
        />
      </NuxtLink>
      <ul :class="{ toggle: toggleNav }">
        <div class="nav-controller">
          <li @click="closeNav">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li @click="closeNav">
            <NuxtLink to="/accommodations">Housing</NuxtLink>
          </li>
          <li @click="closeNav">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </div>

        <div class="user-controller" v-show="$strapi.user === null">
          <li @click="closeNav">
            <NuxtLink to="/signup">Signup</NuxtLink>
          </li>
          <li @click="closeNav">
            <NuxtLink class="user-controller__login" to="/login"
              >Login</NuxtLink
            >
          </li>
        </div>
        <div class="user-controller" v-show="$strapi.user !== null">
          <li @click="closeNav">
            <NuxtLink to="/admin">Admin</NuxtLink>
          </li>
          <button class="user-controller__logout" @click="logout">
            Log out
          </button>
        </div>
      </ul>
      <!-- Hamburger -->
      <div
        class="nav-icon"
        :class="{ open: toggleNav }"
        @click="toggleNav = !toggleNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      toggleNav: false
    };
  },
  methods: {
    // Toggle Nav
    closeNav() {
      this.toggleNav = !this.toggleNav;
    },
    // logging user out
    async logout() {
      await this.$strapi.logout();
      this.$nuxt.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  height: 80px;

  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 4px solid var(--brand-orange);
  background: white;
  z-index: 999;

  .logo {
    position: absolute;
    left: 0;
    top: 16px;
    margin-left: 10px;
    z-index: 11;
  }
  ul {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    transition: 0.5s ease-in-out;
    @media (max-width: 800px) {
      display: none;
    }
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    display: flex;
  }
}

.toggle {
  @media (max-width: 800px) {
    display: flex;
    position: absolute;
    background: white;
    z-index: 10;
    width: 100%;
    border-bottom: 4px solid var(--brand-orange);
    flex-direction: column;
    justify-content: space-evenly;
    height: 450px;
    top: 0px;
  }
}

.nav-controller {
  display: flex;
  justify-content: space-around;
  padding-left: 110px;
  width: 400px;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-around;
    height: 250px;
    align-items: center;
    padding-left: 0px;
  }
}

.user-controller {
  display: flex;
  justify-content: space-around;
  width: 180px;
  align-items: center;
}

.user-controller__login {
  background: var(--brand-green);
  padding: 10px 15px;
  color: white;
  font-weight: 700;
  font-size: 14px;
}

.user-controller__logout {
  border: 0;
  background: transparent;
  font-size: 16px;
  color: var(--brand-red);
  font-weight: 700;
  cursor: pointer;
}

.user-controller__log:hover {
  background: var(--brand-orange);
}

a.nuxt-link-exact-active {
  text-decoration: underline;
  text-decoration-color: var(--brand-green);
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

a:hover {
  text-decoration: underline;
  text-decoration-color: var(--brand-green);
  text-decoration-thickness: 3px;
  text-underline-position: under;
}

.nav-icon {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 30px;
  position: relative;
  margin-right: 20px;

  transform: rotate(0deg);

  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 11;
  @media (max-width: 800px) {
    display: flex;
  }
}

.nav-icon span {
  display: flex;

  height: 6px;
  width: 100%;
  background: black;
  border-radius: 9px;
  position: relative;
  transform: rotate(0deg);

  transition: 0.25s ease-in-out;
}

.nav-icon.open span:nth-child(1) {
  transform: rotate(-45deg);
  top: 12px;
}

.nav-icon.open span:nth-child(2) {
  opacity: 0;
}

.nav-icon.open span:nth-child(3) {
  transform: rotate(45deg);
  bottom: 12px;
}
</style>
