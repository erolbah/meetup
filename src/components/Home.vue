<template>
  <v-container>
    <v-row xs12>
      <v-col align="center" xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn class="primary" large center to="/meetups">Explore Meetups</v-btn>
      </v-col>
      <v-col align="center" xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn class="primary" large to="/meetup/new">Orginaze Meetup</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-carousel
      v-if="!loading"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        style="cursor: pointer">
        <v-carousel-item
          v-for="(slide, i) in slides"
          :src="slide.imageUrl"
          :key="i">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
              @click="onLoadMeetup(slide.id)">
              <div class="display-3">{{ slide.artist }}</div>
            </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row xs12>
      <v-col align="center" class="text-xs-center">
        <p>Join our Meetups!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    slides () {
      return this.$store.getters.featuredMeetups
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  data () {
    return {
      colors: [
        'indigo',
        'warning'
      ],
    } 
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style>

</style>