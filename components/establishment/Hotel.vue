<template>
  <div>
    <div class="container">
      <div class="content-container">
        <div class="price">$ {{ hotel.price }}</div>
        <div class="main-container">
          <div class="image-container">
            <nuxt-img
              :src="hotel.img_url"
              class="img"
              height="300"
              width="350"
            />
          </div>

          <div class="info-container">
            <div class="header-box">
              <div class="headline">
                <h1>{{ hotel.name }}</h1>
                <Stars :hotel="hotel" />
              </div>
              <p class="address">{{ hotel.address }}</p>
            </div>
            <h4>{{ hotel.pitch }}</h4>
            <div class="description">
              <p>{{ hotel.description }}</p>
            </div>

            <div class="modal" :class="{ active: modal }">
              <div tabindex="0" class="modal-inner" ref="modal_1">
                <Modal :hotel="hotel" :closeModal="closeModal" />
              </div>
            </div>
            <button class="order-now" @click="openModal('modal_1')">
              Book now
            </button>
          </div>
        </div>
        <Services :hotel="hotel" />
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
import Stars from "./Stars.vue";
import Services from "./Services.vue";

export default {
  name: "Hotel",
  components: {
    Modal,
    Stars,
    Services
  },
  props: ["hotel"],
  data() {
    return {
      modal: false
    };
  },
  methods: {
    // Open and close modal
    closeModal: function() {
      this.modal = false;
    },
    openModal(e) {
      this.modal = true;
      this.$refs[e].focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}

.address {
  font-size: 12px;
  padding-left: 3px;
}

.img {
  object-fit: cover;
  border-radius: 20px;
  position: relative;
}

.image-container {
  padding-right: 25px;
  @media (max-width: 800px) {
    padding: 0;
  }
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  background: var(--brand-grey);
  height: 450px;
  width: 900px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    height: fit-content;
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 320px;
  }
}

.header-box {
  @media (max-width: 800px) {
    padding: 5px 0 0 5px;
  }
  @media (max-width: 400px) {
    margin: 0 auto;
  }
}

.price {
  position: absolute;
  top: 10px;
  right: -40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--brand-green);
  font-family: var(--font-headline);

  width: 150px;
  height: 50px;
  transform: rotate(45deg);
  @media (max-width: 800px) {
    z-index: 910;
  }
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}

.info-container {
  display: flex;
  flex-direction: column;
  height: 300px;
  max-width: 450px;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    width: 350px;
  }
  @media (max-width: 400px) {
    height: 350px;
    width: 320px;
  }

  h4 {
    @media (max-width: 800px) {
      padding-left: 5px;
      margin-top: 10px;
    }
    @media (max-width: 400px) {
      max-width: 320px;
    }
  }
}

.headline {
  display: flex;
  h1 {
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
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
  &:hover {
    background: var(--brand-orange);
  }
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.3rem 0;
  }
  @media (max-width: 400px) {
    width: 60%;
    margin: 0 auto;
  }
}

.modal {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0;
  transform: scale(0);
  transition: ease opacity 0.3s, ease transform 0s 0.3s;

  &.active {
    opacity: 1;
    transform: scale(1);
    transition: ease opacity 0.3s, ease transform 0s;
  }
}

.modal-inner {
  width: 400px;
  position: realtive;
  margin: 0 auto;
  outline: none;
  border-bottom: 5px solid var(--brand-blue);
}

.description {
  p {
    @media (max-width: 800px) {
      padding-left: 5px;
      margin: 1rem 0;
    }
    @media (max-width: 400px) {
      max-width: 320px;
    }
  }
}
</style>
