import axios from 'axios'
import { storageService } from '../services/async-storage.service.js'
const RATE_KEY = "rate"
const MARKET_KEY = "market"


export default {
    getRate,
    getMarketPrice,
    // getConfirmedTransactions
};


async function getRate(coin) {
    try {
        const res = await axios.get(`https://blockchain.info/tobtc?currency=${coin}&value=1`)
        const rate = res.data
        await storageService.save(RATE_KEY, rate)
        return rate
    } catch (err) {
        console.log('err:', err);
        const ratesFromStorage = await storageService.query(RATE_KEY)
        return ratesFromStorage;
    }
}
// const ratesFromStorage = await loadFromStorage(RATE_KEY)
// if( !ratesFromStorage)  ratesFromStorage={}
// const ratesKey = ratesFromStorage[ratesKey]
// if (ratesFromStorage) {
//     return ratesKey
// }


//Bitcoin rate (use a Bitcoin value API such as this)

async function getMarketPrice() {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
        const marketPrice = res.data
        console.log('marketPrice:', marketPrice);
        await storageService.save(MARKET_KEY, marketPrice)
        return marketPrice
    } catch (err) {
        console.log('err:', err);
        const marketsFromStorage = await storageService.query(MARKET_KEY)
        // return ratesFromStorage;
    }
    //Return chart data as described below

}
// function getConfirmedTransactions() {
//     //Return chart data as described below
//     return new Promise
// }


