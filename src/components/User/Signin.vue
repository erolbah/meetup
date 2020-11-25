<template>
  <v-container>
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
                    type="submit">Sign In</v-btn>
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
    onSignIn () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }
  }
}
</script>

<style>

</style>