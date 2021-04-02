import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Meetups from '@/components/Meetup/Meetups.vue'
import CreateMeetup from '@/components/Meetup/CreateMeetup.vue'
import Profile from '@/components/User/Profile.vue'
import Signin from '@/components/User/Signin.vue'
import Signup from '@/components/User/Signup.vue'
import Meetup from '@/components/Meetup/Meetup.vue'
import AuthGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/meetups/:id',
    name: 'Meetup',
    props: true,
    component: Meetup
  },
  {
    path: '/meetup/new',
    name: 'CreateMeetup',
    component: CreateMeetup,
    beforeEnter: AuthGuard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
