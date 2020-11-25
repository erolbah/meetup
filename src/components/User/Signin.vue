<template>
  <v-container>
    <v-row v-if="error">
      <v-col xs="12" sm="6" offset-sm="3">
        <Alert @dismissed="onDismissed" :text="error.message"> </Alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12">
        <form @submit.prevent="onSignIn">
          <v-row>
            <v-col xs12 sm="6" offset-sm="3">
              <v-text-field
                name="email"
                label="Mail"
                id="email"
                v-model="email"
                type="email"
                required>

              </v-text-field>
            </v-col>
            <v-col xs12 sm="6" offset-sm="3">
              <v-text-field
                name="password"
                label="Password"
                id="password"
                v-model="password"
                type="password"
                required>

              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-btn class="primary"
                    type="submit"
                    :disabled="loading"
                    :loading="loading">Sign In
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>      
              </v-btn>
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
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  data () {
    return {
      email: '',
      password:''
    }
  },
  watch: {
    user (value) {
      if(value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignIn () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      console.log('Dismissed Alert')
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style>

</style>