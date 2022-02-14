<template>
  <section>
    <RouterLink to="/contact/edit">Add a new contact</RouterLink>
    <ContactFilter @set-filter="setFilter" />
    <ContactList :contacts="contactsToShow" @remove="removeContact" />
  </section>
</template>

<script>
import { eventBus } from "@/services/eventBus.service.js";
import contactService from "@/services/contact.service.js";
import ContactList from "@/components/ContactList.vue";
import ContactFilter from "@/components/ContactFilter.vue";
export default {
  components: {
    ContactFilter,
    ContactList,
  },
  data() {
    return {
      //   contacts: null,
      filterBy: null,
    };
  },
  //   async created() {
  //     await this.$store.dispatch({ type: "loadContacts" });
  //     // this.contacts = await contactService.query();
  //   },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(id) {
      try {
        await this.$store.dispatch({ type: "removeContact", id });

        eventBus.emit("show-msg", {
          type: "success",
          txt: "Removed successfully",
        });
      } catch (err) {
        console.log(err);
        eventBus.emit("show-msg", {
          type: "error",
          txt: "Error. Please try again later",
        });
      }
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    contactsToShow() {
      if (!this.filterBy) return this.contacts;
      const regex = new RegExp(this.filterBy.name, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  background-color: #c95f88;
  color: #000;
  font-family: system-ui;
  font-weight: 500;
  top: 85px;
  position: absolute;
  font-size: 20px;
  text-decoration: none;
  padding: 3px;
  transition: 0.3s;
}
</style>