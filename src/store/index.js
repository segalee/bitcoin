import { createStore } from 'vuex'
import contactModule from '../store/modules/contact.module.js'
const store = createStore({
    strict: true,
    modules: {
        contactModule
    }

})

export default store;