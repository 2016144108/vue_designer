import Vue from 'vue'
import vuex from "vuex"
import store_config from "./store_config"

Vue.config.productionTip = false
Vue.use(vuex)
const store = new vuex.Store(store_config)

export default store;

