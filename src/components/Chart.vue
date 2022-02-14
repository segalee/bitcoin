<template>
  <section>
    <h1 v-if="chartdata">{{ chartdata.name }}</h1>
    <LineChart :chart-data="chartData" :options="options" />
  </section>
</template>

<script>
import { utils } from "@/services/utils.service.js";
import { LineChart } from "vue-chart-3";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

// import { Line } from "vue-chartjs";
export default {
  props: { chartdata: Array },
  data() {
    return {
      labels: ["5 month", "4 month", "3 month", "2 month", "last month"],
      datasets: [
        {
          label: "Bitcoin",
          data: utils.getAvgValues(this.chartdata),
          // backgroundColor: "#fff",
          borderColor: "#272652",
          color: "#fff",

          tension: 0.1,
        },
      ],
      options: {
        title: {
          text: "Bitcoin",
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: this.datasets,
      };
    },
  },
  components: {
    LineChart,
  },
};
</script>

<style>
</style>