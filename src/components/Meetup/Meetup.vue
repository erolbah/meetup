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
                  <div class="info--text">{{meetup.date}} - Adres</div>
                  <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum itaque quia cum, ea ipsum ducimus quisquam neque quas! Quidem sequi dolores maiores? Ipsam facere cupiditate corporis ipsum cumque. Consequuntur, ab.</div>
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