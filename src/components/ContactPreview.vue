<template>
  <section class="contact-preview flex column space-evenly">
    <p class="bold">{{ contact.name }}</p>
    <p><span class="bold">Email:</span> {{ contact.email }}</p>
    <p><span class="bold">Phone:</span> {{ contact.phone }}</p>
  </section>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
};
</script>

<style lang="scss" scoped>
section.contact-preview {
  text-align: left;
  width: 200px;
}
.bold {
  font-weight: 500;
  color: rgb(199, 221, 240);
}
</style>