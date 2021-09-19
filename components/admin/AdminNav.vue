<template lang="">
  <div>
    <div class="admin-nav">
      <h1 class="admin-headline">Admin Panel</h1>
      <div>
        <ul class="admin-buttons">
          <div
            @click="createHotel"
            class="admin_nav-icon"
            v-model="createActive"
            :class="{ active: createActive }"
          >
            <v-icon class="admin-icon" size="28">
              {{ icons.mdiHomeCity }}
            </v-icon>
            <li>Create</li>
          </div>
          <div
            @click="messages"
            class="admin_nav-icon"
            v-model="messagesActive"
            :class="{ active: messagesActive }"
          >
            <v-icon class="admin-icon" size="28">
              {{ icons.mdiAndroidMessages }}
            </v-icon>
            <li>Messages</li>
          </div>
          <div
            @click="enquiries"
            class="admin_nav-icon"
            v-model="enquiriesActive"
            :class="{ active: enquiriesActive }"
          >
            <v-icon class="admin-icon" size="28">
              {{ icons.mdiForum }}
            </v-icon>
            <li>Enquiries</li>
          </div>
          <div
            class="admin_nav-icon"
            @click="update"
            v-model="updateActive"
            :class="{ active: updateActive }"
          >
            <v-icon class="admin-icon" size="28">
              {{ icons.mdiUpdate }}
            </v-icon>
            <li>Update</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiHomeCity, mdiAndroidMessages, mdiForum, mdiUpdate } from "@mdi/js";
export default {
  name: "AdminNav",
  data() {
    return {
      createActive: true,
      messagesActive: false,
      enquiriesActive: false,
      updateActive: false,
      icons: {
        mdiHomeCity,
        mdiAndroidMessages,
        mdiForum,
        mdiUpdate
      }
    };
  },
  methods: {
    // An easy check which component is active, and content updates on each click -> switching component.
    // TODO: Add CSS on class that styles layout

    createHotel() {
      this.$emit("update:content", "CreateHotel");
      this.createActive = true;
      this.messagesActive = false;
      this.enquiriesActive = false;
      this.updateActive = false;
    },
    messages() {
      this.$emit("update:content", "Messages");
      this.createActive = false;
      this.messagesActive = true;
      this.enquiriesActive = false;
      this.updateActive = false;
    },
    enquiries() {
      this.$emit("update:content", "Enquiries");
      this.createActive = false;
      this.messagesActive = false;
      this.enquiriesActive = true;
      this.updateActive = false;
    },
    update() {
      this.$emit("update:content", "UpdateHotels");
      this.createActive = false;
      this.messagesActive = false;
      this.enquiriesActive = false;
      this.updateActive = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.admin-icon {
  color: black;
}

.admin_nav-icon {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}

.admin-nav {
  width: 150px;
  height: 100vh;

  background: white;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  @media (max-width: 680px) {
    flex-direction: row;
    height: 100px;
    width: 100vw;
    padding-top: 0rem;
  }
}

.admin-headline {
  font-size: 20px;
  font-family: var(--font-headline);
  white-space: nowrap;
  @media (max-width: 680px) {
    display: none;
  }
}

.admin-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 1rem;
  height: 500px;
  @media (max-width: 680px) {
    flex-direction: row;
    height: 0;
    width: 100vw;
  }
}

li {
  display: flex;
  width: 100%;
  color: black;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    font-size: 14px;
  }
}

.active {
  text-decoration: underline;
  text-decoration-color: var(--brand-green);
  text-decoration-thickness: 5px;
}
</style>
