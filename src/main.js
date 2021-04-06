import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import DateFormat from './filter/date';
// import * as firebase from 'firebase';
import firebase from 'firebase'
import Alert from './components/Shared/Alert.vue'
import AppEditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import './style/main.scss'

Vue.use(firebase) 

Vue.config.productionTip = false
Vue.filter('date', DateFormat)

Vue.component('Alert', Alert)
Vue.component('app-edit-meetup-details-dialog', AppEditMeetupDetailsDialog)

const firebaseConfig = {
  apiKey: "AIzaSyCvJ0D6aTOldEtODzjsI2L2HB6W8Esbuiw",
  authDomain: "sportware-a9316.firebaseapp.com",
  databaseURL: "https://sportware-a9316.firebaseio.com",
  projectId: "sportware-a9316",
  storageBucket: "sportware-a9316.appspot.com",
  messagingSenderId: "140450372211",
  appId: "1:140450372211:web:f6b58b7a465cf02412a806",
  measurementId: "G-2EWF0LD6PT"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
