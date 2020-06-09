<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-footer />

    <home-login />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',

    components: {
      HomeAppBar: () => import('@/layouts/home/AppBar'),
      HomeFooter: () => import('@/layouts/home/Footer'),
      HomeView: () => import('@/layouts/home/View'),
      // HomeLogin: () => import('@/layouts/home/Login.vue'),
    },
  }
</script>
