<template>
  <v-container>
      <v-row>
        <v-col xs-12>
            <v-card>
                <v-card-title>
                    <h6>My Meetup</h6>
                </v-card-title>
            </v-card>
            <v-card dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title class="headline"
                    ></v-card-title>
                    <v-card-subtitle></v-card-subtitle>
                    <v-card-actions>
                    <v-btn link text>
                        <v-icon left>mdi-account-multiple</v-icon> View Meetup
                    </v-btn>
                    </v-card-actions>
                </div>

                <v-avatar>
                    <v-img></v-img>
                </v-avatar>
              </div>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>