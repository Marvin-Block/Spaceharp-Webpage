<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    top
    left
    max-width="90%"
    min-width="275"
    offset-x
    offset-y
    origin="bottom right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-card
        id="discord"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        style="position: fixed; top: 85vh; right: -35px;"
        width="100"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon large>
          mdi-discord
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <base-title
        align="center"
        title="Join us"
        space="0"
      />

      <v-card-text>
        <div class="text-center">
          <base-btn
            :tile="false"
            href="https://discord.com/invite/9AQv2pF"
            target="_blank"
            class="ma-2"
            size="48"
            style="cursor: pointer;"
            rounded
            @click="menu = false"
          >
            Spacesharp Discord
          </base-btn>
        </div>
        <!-- <div class="text-center">
          <base-btn
            :tile="false"
            href="https://discord.gg/R73yUKx"
            target="_blank"
            class="ma-2"
            size="48"
            style="cursor: pointer;"
            rounded
            @click="menu = false"
          >
            Spaceglider Discord
          </base-btn>
        </div> -->
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
  export default {
    name: 'HomeDiscord',

    data () {
      return {
        colors: [
          this.$vuetify.theme.themes.light.primary,
          '#9368e9',
          '#F4511E',
        ],
        menu: false,
      }
    },
  }
</script>
