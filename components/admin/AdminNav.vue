<template lang="">
  <div>
    <div class="admin-nav">
      <h1 class="admin-headline">Admin Panel</h1>
      <div>
        <ul class="admin-buttons">
          <div @click="createHotel" class="admin_nav-icon">
            <v-icon class="admin-icon" size="36">
              {{ icons.mdiHomeCity }}
            </v-icon>
            <li>Create</li>
          </div>
          <div @click="messages" class="admin_nav-icon">
            <v-icon class="admin-icon" size="36">
              {{ icons.mdiAndroidMessages }}
            </v-icon>
            <li>Messages</li>
          </div>
          <div @click="enquiries" class="admin_nav-icon">
            <v-icon class="admin-icon" size="36">
              {{ icons.mdiForum }}
            </v-icon>
            <li>Enquiries</li>
          </div>
          <div class="admin_nav-icon" @click="update">
            <v-icon class="admin-icon" size="36">
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
      icons: {
        mdiHomeCity,
        mdiAndroidMessages,
        mdiForum,
        mdiUpdate
      }
    };
  },
  methods: {
    createHotel() {
      this.$emit("update:content", "CreateHotel");
    },
    messages() {
      this.$emit("update:content", "Messages");
    },
    enquiries() {
      this.$emit("update:content", "Enquiries");
    },
    update() {
      this.$emit("update:content", "UpdateHotels");
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
}

.admin-headline {
  font-size: 20px;
  font-family: var(--font-headline);
  white-space: nowrap;
}

.admin-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  height: 500px;
}

li {
  display: flex;
  width: 100%;
  color: black;
  justify-content: center;
  align-items: center;
}
</style>
