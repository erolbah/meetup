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
    }
  },
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: ''
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
        date: new Date
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>

<style>

</style>