<template>
  <section class="flex justify-center">
    <input
      type="text"
      placeholder="Search contact by name..."
      v-model="filterBy.name"
      @input="setFilter"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        name: "",
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 45px;
  input {
    text-align: center;
    background-color: #181818;
    height: 2.5rem;
    color: #575657;
    font-family: system-ui;
    margin-bottom: 5px;
  }
}
</style>