<template>
  <v-container>
      <v-row>
        <v-col xs-12>
            <v-card>
                <v-card-title>
                    <h6>My Meetup</h6>
                </v-card-title>
                <v-img :src="src" height="400"></v-img>
                <v-card-text>
                  <div class="info--text">Dinsdag 30 december 2020 - Adres</div>
                  <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum itaque quia cum, ea ipsum ducimus quisquam neque quas! Quidem sequi dolores maiores? Ipsam facere cupiditate corporis ipsum cumque. Consequuntur, ab.</div>
                </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
data: function() {
return {
          id: 1,
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
  }
}
}
</script>

<style>

</style>