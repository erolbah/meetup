<template>
  <v-container>
    <v-row xs12>
      <v-col xs5 v-for="(meetup, i) in meetups" :key="i">
        <v-card
            :color="meetup.color"
            dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="meetup.title"
                ></v-card-title>
                <v-card-subtitle v-text="meetup.artist"></v-card-subtitle>
                <v-card-text v-text="meetup.date"></v-card-text>
                <v-card-actions>
                  <v-btn :to="{name: 'Meetup', params: {id: meetup.id}}" link text>
                    <v-icon left>mdi-account-multiple</v-icon> View Meetup
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile>
                <v-img :src="meetup.imageUrl"></v-img>
              </v-avatar>
            </div>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
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