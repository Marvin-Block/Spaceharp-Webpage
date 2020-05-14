<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-footer />

    <home-purchase />

    <home-discord />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',

    components: {
      HomeAppBar: () => import('@/layouts/home/AppBar'),
      HomeFooter: () => import('@/layouts/home/Footer'),
      HomeView: () => import('@/layouts/home/View'),
      HomePurchase: () => import('@/layouts/home/Purchase.vue'),
      HomeDiscord: () => import('@/layouts/home/Discord.vue'),
    },
  }
</script>
