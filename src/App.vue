<template>
  <v-app>
    <v-navigation-drawer fixed v-model="sideNav">
      <v-list disabled>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>View Meetups</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-card>
      <v-toolbar>
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-toolbar-title>Meetup</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text>
            <v-icon left>mdi-account-multiple</v-icon> View Meetups
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <main>

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
      sideNav: false
    }
  },
};
</script>
