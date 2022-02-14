<template>
  <section>
    <ul class="clean-list flex wrap justify-center">
      <li
        v-for="contact in contacts"
        :key="contact._id"
        class="flex space-around"
      >
        <div><img src="../assets/img/avatar.png" alt="" /></div>
        <ContactPreview :contact="contact" />
        <div class="actions flex column">
          <button @click="remove(contact._id)">X Remove</button>
          <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
          <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./components/ContactPreview.vue";
import avatar from "../assets/img/avatar.png";
export default {
  props: {
    contacts: Array,
  },
  components: {
    ContactPreview,
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 150px;
}
li {
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid #909090;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  font-weight: 100;
}
a {
  background-color: #ca3d73;
  color: #fff;
  font-family: system-ui;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 2px;
  font-size: 18px;
  line-height: 1;
  margin: auto;
  margin-top: 5px;
  text-decoration: none;
  padding: 3px;
  transition: 0.3s;
  font-weight: 100;

  &:hover {
    background-color: rgb(207, 105, 144);
  }
}
</style>
