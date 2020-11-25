<template>
  <v-container>
    <v-row v-if="error">
      <v-col xs="12" sm="6" offset-sm="3">
        <Alert @dismissed="onDismissed" :text="error.message"> </Alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12">
        <form @submit.prevent="onSignUp">
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
             <v-col xs12 sm="6" offset-sm="3">
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                :rules="[comparePasswords]">
                
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-btn class="primary"
                    type="submit"
                    :disabled="loading"
                    :loading="loading">Sign Up
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
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : true
    },
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
      password:'',
      confirmPassword: ''
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
    onSignUp () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
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