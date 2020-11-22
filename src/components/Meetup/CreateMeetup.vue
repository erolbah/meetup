<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3">
        <h4>Create a new Meetup</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12">
        <form @submit.prevent="onCreateMeetup">
          <v-row>
            <v-col xs12 sm="6" offset-sm="3">
              <v-text-field
                name="title"
                label="title"
                id="title"
                v-model="title"
                required>

              </v-text-field>
            </v-col>
            <v-col xs12 sm="6" offset-sm="3">
              <v-text-field
                name="location"
                label="location"
                id="location"
                v-model="location"
                required>

              </v-text-field>
            </v-col>
            <v-col xs12 sm="6" offset-sm="3">
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required>

              </v-text-field>
            </v-col>
            <v-col xs12 sm="6" offset-sm="3">
              <img height="150" :src="imageUrl">
            </v-col>
            <v-col cols="12" xs12 sm="6" offset-sm="3">
              <v-textarea
                name="description"
                label="description"
                id="description"
                v-model="description"
                required>
                <template v-slot:label>
                  <div>
                    Description <small>(description)</small>
                  </div>
                </template>
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs="12" sm="6" offset-sm="3">
              <h4>Choose a Date & Time</h4>
              <v-date-picker v-model="date"></v-date-picker>
              {{date}}
              <v-time-picker v-model="time" ampm-in-title></v-time-picker>
              {{time}}
            </v-col>
          </v-row>
          <v-row>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-btn class="primary"
                    :disabled="!formIsValid"
                    type="submit">CREATE MEETUP</v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    formIsValid () {
      return this.title !== '' && 
            this.location !== '' && 
            this.imageUrl !== '' && 
            this.description !== ''
    },
    submitableDate () {
      const date = new Date(this.date)
      if (this.time !== '') {
        const hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      }
      return date
    },
    // test () {
    //   const date = this.submitableDate
    //   return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})
    // }
  },
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: new Date().toISOString().substr(0, 10),
      time: ''
    }
  },
  methods: {
    onCreateMeetup () {
      if(!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submitableDate
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>

<style>

</style>