<template>
  <section class="app-header flex space-between">
    <h3>Bitcoin</h3>
    <nav>
      <RouterLink
        @click="activate(1)"
        :class="{ active: activeEl === 1 }"
        class="clean-link"
        to="/"
        >Home</RouterLink
      >
      |
      <RouterLink
        @click="activate(2)"
        :class="{ active: activeEl === 2 }"
        class="clean-link"
        to="/contact"
        >Contacts</RouterLink
      >
      |
      <RouterLink
        @click="activate(3)"
        :class="{ active: activeEl === 3 }"
        class="clean-link"
        to="/statistics"
        >Statistics</RouterLink
      >
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeEl: 1,
    };
  },
  methods: {
    activate(el) {
      // console.log("ev:", ev);
      this.activeEl = el;
    },
  },
};
</script>

<style lang="scss" scoped>
.clean-link {
  text-decoration: none;
  font-size: 20px;
  font-weight: 100;
}
.active {
  border-bottom: 5px solid #ca3d73;
  color: #f0d4df;
}
</style>