    <template>
  <section class="home-page">
    <div class="user-greet flex">
      <p>Hello, {{ user.name }}!</p>
    </div>

    <div class="user-info flex">
      <div>
        <p>
          Coins: <span>{{ user.coins }}</span>
        </p>
        <p>
          BTC: <span>{{ bitcoinRate }}</span>
        </p>
      </div>
    </div>
  </section>
</template>


<script>
import userService from "@/services/user.service.js";
import bitcoinService from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      bitcoinRate: null,
    };
  },
  async created() {
    const user = userService.getUser();
    this.user = user;
    const rate = await bitcoinService.getRate("USD");
    this.bitcoinRate = rate;
  },
  //   methods: {
  //     async getCurrBitcoinRate() {
  //       const bitcoin = await bitcoinService.getRate("USD");
  //       console.log("bitcoin:", bitcoin);
  //       this.bitcoinRate = bitcoin;
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
.home-page {
  height: 80vh;
  background-color: #5455723d;
  .user-greet {
    height: 5rem;
    width: 100vw;
    background-color: #67717a3d;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
  }
  .user-info {
    text-align: center;
    background-color: #67717a3d;
    color: #909090;
    font-size: 1.1rem;
    // width: fit-content;
    width: 100vw;
    p {
      color: #fff;
      font-weight: 500;
      width: fit-content;
      span {
        color: gold;
        font-weight: 400;
      }
    }
  }
}
</style>