<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <v-icon>mdi-discord</v-icon>
            <a
              :key="'Discord'"
              class="white--text pa-1 pa-md-0"
              href="https://discord.com/invite/9AQv2pF"
              target="_blank"
              v-text="'Discord'"
            />
            <v-responsive
              :key="'Discord'"
              class="mx-4 shrink hidden-sm-and-down"
              max-height="24"
            >
              <v-divider vertical />
            </v-responsive>
            <v-icon>mdi-instagram</v-icon>
            <a
              class="white--text pa-1 pa-md-0"
              href="https://www.instagram.com/spacesharpofficial/?hl=de"
              target="_blank"
              v-text="'Instagram'"
            />

            <v-responsive
              :key="'Discord'"
              class="mx-4 shrink hidden-sm-and-down"
              max-height="24"
            >
              <v-divider vertical />
            </v-responsive>
            <v-icon>mdi-heart</v-icon>
            <a
              class="white--text pa-1 pa-md-0"
              href="https://ko-fi.com/Muffin4222"
              target="_blank"
              v-text="'Support me'"
            />

            <v-responsive
              class="mx-4 shrink hidden-sm-and-down"
              max-height="24"
            >
              <v-divider vertical />
            </v-responsive>
            <v-icon>mdi-currency-usd</v-icon>
            <a
              class="white--text pa-1 pa-md-0"
              href="https://lol-script.com/spacesharp-best-lol-script/"
              target="_blank"
              v-text="'Buy Spacesharp'"
            />

            <v-responsive
              class="mx-4 shrink hidden-sm-and-down"
              max-height="24"
            />
          </div>
        </v-col>
        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-end justify-center justify-md-none">
            <div class="white--text pa-1 pa-md-0">
              <small>Version 0.2.9 (BETA)</small>
            </div>
            <v-responsive
              class="mx-4 shrink hidden-sm-and-down"
              max-height="24"
            >
              <v-divider vertical />
            </v-responsive>
            <div class="white--text pa-1 pa-md-0">
              Copyright © 2020 Muffin#4222
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'Discord',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
