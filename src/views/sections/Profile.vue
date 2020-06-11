<template>
  <base-section
    id="profile"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <p style="color:white">
            Hihihihi you're logged in now
          </p>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProfile',

    data () {
      return {
        username: '',
      }
    },
    async created () {
      if (!this.$store.getters.isLoggedIn) {
        this.$router.push('/login')
      }
      this.username = this.$store.getters.getUser.username
    },
  }
</script>
