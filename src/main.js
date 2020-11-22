import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import DateFormat from './filter/date';

Vue.config.productionTip = false
// Vue.config.globalProperties.$filters = {
//   dateFormat (value) {
//     const date = new Date(value) 
//     return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric', hours: '2-digit', minute: '2-digit'})
//   }
// }
Vue.filter('date', DateFormat)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
