<template>
  <div>
    <ContactForm />
  </div>
</template>
<script>
import ContactForm from "../components/contact/ContactForm.vue";
export default {
  components: {
    ContactForm
  },
  head() {
    return {
      title: "Contact us"
    };
  }
};
</script>
<style></style>
