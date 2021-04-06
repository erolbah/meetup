<template>
  <v-container>
      <v-row>
        <v-col xs-12>
            <v-card>
                <v-card-title>
                    <h6 class="primary--text">{{meetup.title}}</h6>
                    <template v-if="userIsCreator">
                      <v-spacer></v-spacer>
                      <app-edit-meetup-details-dialog></app-edit-meetup-details-dialog>
                    </template>
                </v-card-title>
                <v-img :src="meetup.imageUrl" height="400"></v-img>
                <v-card-text>
                  <div class="info--text">{{meetup.date | date}} - {{meetup.location}}</div>
                  <div>{{meetup.description}}</div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" >Register</v-btn>
                </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    id: String
},
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if(!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    }
  },
  data: function() {
    return {

    }
  }
}
</script>

<style>

</style>