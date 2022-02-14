<template>
  <section
    v-if="contact"
    class="contact-details app-main flex column align-center"
  >
    <h3>Contact details</h3>
    <p>{{ contact.name }}</p>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
    <RouterLink to="/contact">Back</RouterLink>
  </section>
</template>

<script>
import contactService from "@/services/contact.service.js";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.contact = await contactService.get(id);
  },
};
</script>

<style>
</style>