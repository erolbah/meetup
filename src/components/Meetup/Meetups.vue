<template>
  <v-container>
    <v-row xs12>
      <v-col xs5 v-for="(item, i) in items"
          :key="i"
          >
        <v-card
            :color="item.color"
            dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                <v-card-action>
                  <v-btn
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"><v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card-action>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
data: function() {
return {
    items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
  }
}
}
</script>

<style>

</style>