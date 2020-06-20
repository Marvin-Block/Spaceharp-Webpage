<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-support />

    <home-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',

    components: {
      HomeAppBar: () => import('@/layouts/home/AppBar'),
      HomeFooter: () => import('@/layouts/home/Footer'),
      HomeSupport: () => import('@/layouts/home/Support'),
      HomeView: () => import('@/layouts/home/View'),
      // HomeLogin: () => import('@/layouts/home/Login.vue'),
    },
  }
</script>
