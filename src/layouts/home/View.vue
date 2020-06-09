<template>
  <v-content style="background-color:#121212">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-content>
</template>

<script>
  export default {
    name: 'BaseView',
  }
</script>
