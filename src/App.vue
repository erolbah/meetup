<template>
  <v-app>
    <!-- <v-navigation-drawer fixed v-model="sideNav">
      <v-list nav disabled>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="item in menuItems" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <v-card>
      <v-navigation-drawer fixed v-model="sideNav">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              MENU
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-card>
      <v-toolbar>
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor:pointer">Meetup</router-link> 
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-for="item in menuItems" :key="item.title" class="hidden-xs-only">
          <v-btn :to="item.link" link text>
            <v-icon left>{{item.icon}}</v-icon> {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data () {
    return {
      sideNav: false,
      menuItems: [
        {link: '/meetups', icon: 'mdi-account-multiple', title: 'View Meetups'},
        {link: '/meetup/new', icon: 'mdi-map-marker', title: 'Orginaze Meetup'},
        {link: '/profile', icon: 'mdi-account', title: 'Profile'},
        {link: '/signup', icon: 'mdi-face', title: 'Sign Up'},
        {link: '/signin', icon: 'mdi-lock-open', title: 'Sign In'}
      ]
    }
  },
};
</script>
