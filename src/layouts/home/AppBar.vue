<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      dark
      color="grey-lighten"
      elevation="3"
      height="80"
    >
      <base-img
        :src="require('@/assets/Spacesharp-red.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="52"
        width="100%"
      />

      <base-img
        :src="require('@/assets/spacesharp_dark.svg')"
        contain
        max-width="15em"
        width="16em"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="([name,icon], i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="true"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },
    data: () => ({
      drawer: null,
      items: [
        ['Home', 'mdi-home-outline'],
        ['SpacesharpDB', 'mdi-file-table-box-multiple-outline'],
        ['Login', 'mdi-key-outline'],
      ],
      alreadyLoggedIn: false,
    }),
    created () {
      this.$root.$refs.AppBar = this
    },
    methods: {
      refreshBar () {
        if (this.$store.getters.isLoggedIn && this.alreadyLoggedIn === false) {
          this.items.push(['Profile', 'mdi-account-outline'])
          this.alreadyLoggedIn = true
        }
      },
    },
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
