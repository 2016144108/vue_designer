import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js'
import store from './store/store.js'

store.dispatch('loginUser/whoami');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
