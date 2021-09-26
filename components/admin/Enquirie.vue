<template lang="">
  <div class="admin-box">
    <SubHeadline :headline="enquirie.name" />
    <div class="create-hotel-container">
      <div class="message-container">
        <v-icon @click="goBack" color="black" size="36" class="back-icon">
          {{ icons.mdiArrowLeft }}
        </v-icon>
        <p class="message-date">{{ formatDate(enquirie.created_at) }}</p>
        <p class="message-headline">Name:</p>

        <p class="message-content">{{ enquirie.name }}</p>

        <p class="message-headline">Email:</p>
        <p class="message-content">{{ enquirie.email }}</p>
        <p class="message-headline">Arrival:</p>
        <p class="message-content">{{ enquirie.arrival }}</p>
        <p class="message-headline">Depature:</p>
        <p class="message-content">{{ enquirie.depature }}</p>
        <p class="message-headline">Message:</p>
        <p class="message-content">{{ enquirie.enquirie }}</p>

        <div class="button-box">
          <v-checkbox
            @click="toggleText(enquirie.id)"
            v-model="hasRead"
            :label="`${text}`"
          ></v-checkbox>
          <a class="reply" :href="`mailto:${enquirie.email}`">Reply</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import SubHeadline from "../layout/SubHeadline.vue";
import { mdiArrowLeft } from "@mdi/js";
export default {
  props: ["enquirie"],
  components: {
    SubHeadline
  },
  data() {
    return {
      hasRead: false,
      text: "Mark as read",
      icons: {
        mdiArrowLeft
      }
    };
  },
  methods: {
    // Cheking of checkbox is toggled, and updating API -> hasRead
    async toggleText(id) {
      this.text = this.hasRead ? "Mark as unread" : "Mark as read";
      try {
        const update = await this.$strapi.$enquiries.update(id, {
          hasRead: this.hasRead
        });
      } catch (error) {
        console.log(error);
      }
    },
    // Moment pkg. Date formatter
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    goBack() {
      // Back function

      this.$nuxt.$router.push("/admin");
    }
  },
  created() {
    // This.hasRead updated on created
    this.hasRead = this.enquirie.hasRead;
  }
};
</script>
<style lang="scss" scoped>
.message-container {
  background: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  padding-top: 1rem;
  border-radius: 20px;
  margin: 1rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.button-box {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}

.message-content {
  padding: 5px 20px;
  word-break: break-all;
}

.message-headline {
  font-weight: 700;
  padding: 5px 10px;
}

.reply {
  text-decoration: none;
  color: white;
  background: var(--brand-green);
  padding: 0.5rem;
}

.delete {
  text-decoration: none;
  color: white;
  background: var(--brand-red);
  padding: 0.5rem;
}

.message-date {
  padding-top: 0.5rem;
  font-weight: 700;
  padding-bottom: 20px;
  color: var(--brand-green);
  text-align: center;
}
</style>
