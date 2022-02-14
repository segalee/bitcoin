<template>
  <section class="app-header flex space-between">
    <h3>Bitcoin</h3>
    <nav>
      <RouterLink class="clean-link" to="/">Home</RouterLink> |
      <RouterLink class="clean-link" to="/contact">Contacts</RouterLink> |
      <RouterLink class="clean-link" to="/statistics">Statistics</RouterLink>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.clean-link {
  text-decoration: none;
  font-size: 20px;
  font-weight: 100;
}
</style>