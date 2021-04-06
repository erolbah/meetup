import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups:[
      // {
      //   id: 1,
      //   date: new Date(),
      //   color: '#1F7087',
      //   imageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
      //   title: 'Supermodel',
      //   artist: 'Foster the People',
      //   location: 'Drachten',
      //   description: 'Dit is een dummy tekst om er voor te zorgen dat er een textveld gevuld word zodat er iets zichtbaar is op het scherm.'
      // },
      // {
      //   id: 2,
      //   date: new Date(),
      //   color: '#952175',
      //   imageUrl: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      //   title: 'Halcyon Days',
      //   artist: 'Ellie Goulding',
      //   location: 'Drachten',
      //   description: 'Dit is een dummy tekst om er voor te zorgen dat er een textveld gevuld word zodat er iets zichtbaar is op het scherm.'
      // }
    ],
    user: null,
    loading: false,
    error: null
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id == meetupId
        })
      }
    },
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  },
  actions: {
    loadMeetups({commit}){
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId,
              location: obj[key].location
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    createMeetup({commit, getters}, payload) {
      // image is passed as file, need to upload it and then store the imageUrl
      const dbRef = firebase.database().ref("meetups").push();
      const key = dbRef.key;
      const filename = payload.image.name;
      const ext = filename.slice(filename.lastIndexOf("."));
      const storageRef = firebase.storage().ref("meetups").child(key + "." + ext);
 
      storageRef.put(payload.image)
        .then(() => {
          // file uploaded
          return storageRef.getDownloadURL();
        })
        .then((downloadUrl) => {
          const meetup = {
            title: payload.title,
            location: payload.location,
            description: payload.description,
            date: payload.date.toISOString(),
            id: key,
            creatorId: getters.user.id,
            imageUrl: downloadUrl,
          };
          commit("createMeetup", meetup);
          return dbRef.set(meetup);
        })
        .then(() => {
          console.log("meeting created");
        })
        .catch((error) => {
          console.error("error: " + error);
        });
    },

    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      ) .catch (
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredMeetups: []})
    },
    logout ({commit}){
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  mutations: {
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  
  modules: {
  }
})
