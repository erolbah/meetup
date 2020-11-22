import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import DateFormat from './filter/date';
import * as firebase from 'firebase';

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
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCvJ0D6aTOldEtODzjsI2L2HB6W8Esbuiw",
      authDomain: "sportware-a9316.firebaseapp.com",
      databaseURL: "https://sportware-a9316.firebaseio.com",
      projectId: "sportware-a9316",
      storageBucket: "sportware-a9316.appspot.com",
      messagingSenderId: "140450372211",
      appId: "1:140450372211:web:f6b58b7a465cf02412a806",
      measurementId: "G-2EWF0LD6PT"
    })
  }
}).$mount('#app')
