<template>
  <section v-if="marketPriceList">
    <div class="container">
      <h1>statistics</h1>
      <!-- <line-chart v-if="loaded" :chartdata="chartdata" :options="options" /> -->
      <Chart :chartdata="marketPriceList" />
    </div>
  </section>
</template>

<script>
// import LineChart from "@/components/Chart.vue";
import Chart from "@/components/Chart.vue";
import bitcoinService from "@/services/bitcoin.service.js";

export default {
  components: {
    Chart,
  },
  data() {
    return {
      marketPriceList: null,
    };
  },
  async created() {
    const prices = await bitcoinService.getMarketPrice();
    console.log("prices.values:", prices.values);

    this.marketPriceList = prices.values;
    console.log("this.marketPriceList:", this.marketPriceList);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-weight: 100;
  margin-top: 50px;
}
</style>