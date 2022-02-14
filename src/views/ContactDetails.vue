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
import contactService from "../services/contact.service.js";

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

<style lang="scss" scoped>
.contact-details {
  font-weight: 100;
  a {
    background-color: #717171;
    color: #fff;
    font-family: system-ui;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 2px;
    font-size: 18px;
    text-align: center;
    margin-top: 5px;
    transition: 0.3s;
    font-weight: 100;
    padding: 3px;
    text-decoration: none;
    &:hover {
      background-color: #686464;
    }
  }

  h3 {
    margin-top: 50px;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    color: #ddd8d8;
  }
}
</style>