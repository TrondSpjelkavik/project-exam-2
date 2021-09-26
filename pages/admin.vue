<template>
  <div class="admin-container">
    <AdminNav :content.sync="comp" />
    <Messages
      :messages="messages"
      :messagePage="messagePage"
      v-if="comp === 'Messages'"
    />
    <CreateHotel v-if="comp === 'CreateHotel'" />
    <Enquiries
      :enquiries="enquiries"
      :enquiriePage="enquiriePage"
      v-if="comp === 'Enquiries'"
    />
    <UpdateHotels
      :hotels="hotels"
      :updatePage="updatePage"
      v-if="comp === 'UpdateHotels'"
    />
  </div>
</template>
<script>
import CreateHotel from "../components/admin/CreateHotel.vue";
import Messages from "../components/admin/Messages.vue";
import Enquiries from "../components/admin/Enquiries.vue";
import UpdateHotels from "../components/admin/UpdateHotels.vue";
import AdminNav from "../components/admin/AdminNav.vue";

export default {
  components: {
    CreateHotel,
    Messages,
    Enquiries,
    UpdateHotels,
    AdminNav
  },
  data() {
    return {
      comp: "CreateHotel"
    };
  },
  head() {
    return {
      title: "Admin panel"
    };
  },

  async asyncData({ $strapi }) {
    const messages = await $strapi.$messages.find();
    const enquiries = await $strapi.$enquiries.find();
    const hotels = await $strapi.$hotels.find();
    return { messages, enquiries, hotels };
  },
  methods: {
    messagePage(message) {
      this.$nuxt.$router.push(`/message/${message.id}`);
    },
    enquiriePage(enquirie) {
      this.$nuxt.$router.push(`/enquirie/${enquirie.id}`);
    },
    updatePage(hotel) {
      this.$nuxt.$router.push(`/update/${hotel.id}`);
    }
  },
  middleware: "authenticated"
};
</script>
<style lang="scss" scoped>
.admin-container {
  display: flex;
  min-height: 100vh;
  @media (max-width: 680px) {
    display: block;
  }
}
</style>
