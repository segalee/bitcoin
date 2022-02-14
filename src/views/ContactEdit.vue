<template>
  <section class="contact-edit app-main">
    <h2>{{ pageTitle }}</h2>
    <form
      v-if="contactToEdit"
      @submit.prevent="save"
      class="flex column align-center"
    >
      <input v-model="contactToEdit.name" type="text" placeholder="Name" />
      <input v-model="contactToEdit.email" type="text" placeholder="Email" />
      <input v-model="contactToEdit.phone" type="text" placeholder="Phone" />
      <div class="flex justify-between">
        <button>Save</button>
        <RouterLink to="/contact">Cancel</RouterLink>
      </div>
    </form>
  </section>
</template>

<script>
import contactService from "../services/contact.service.js";
export default {
  data() {
    return {
      contactToEdit: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    if (id) this.contactToEdit = await contactService.get(id);
    else this.contactToEdit = contactService.getEmptyContact();
  },
  methods: {
    async save() {
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contactToEdit,
      });
      // await contactService.save(this.contactToEdit);
      this.$router.push("/contact");
    },
  },
  computed: {
    pageTitle() {
      const { id } = this.$route.params;
      return id ? "Edit contact" : "Add contact";
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-edit {
  div {
    width: 210px;
  }
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
  button {
    background-color: #4f6d3f;
    &:hover {
      background-color: #376b1b;
    }
  }
  input {
    color: #9fa1af;
    font-size: 1.2rem;
    font-family: system-ui;
    font-weight: 100;
    border-bottom: 1px solid #9b9b9b;
  }
}
</style>