<template>
  <v-container>
      <v-row>
        <v-col xs-12>
            <v-card>
                <v-card-title>
                    <h6 class="primary--text">{{meetup.title}}</h6>
                </v-card-title>
                <v-img :src="meetup.imageUrl" height="400"></v-img>
                <v-card-text>
                  <div class="info--text">{{meetup.date}} - {{meetup.location}}</div>
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