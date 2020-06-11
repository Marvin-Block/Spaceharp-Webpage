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
          mdi-account
        </v-icon>
      </v-card>
    </template>

    <v-card
      v-if="!loading"
      class="elevation-12"
    >
      <v-toolbar
        color="primary"
        dark
        flat
      >
        <v-toolbar-title>
          Log in to Spacesharp-DB
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="username"
            label="Username"
            name="login"
            prepend-icon="mdi-account"
            type="text"
          />

          <v-text-field
            v-model="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="login"
        >
          Login
        </v-btn>
        <v-btn
          color="primary"
          @click="register"
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      v-else
      class="elevation-12"
    >
      <v-toolbar
        color="primary"
        dark
        flat
      >
        <v-toolbar-title>
          We're trying to reach the server.
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text>
        <v-progress-circular

          indeterminate
          color="primary"
        />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HomeLogin',
    data () {
      return {
        loggedIn: false,
        loading: false,
        error: false,
        success: false,
        snackbar: false,
        timeout: 5000,
        username: '',
        password: '',
        colors: [
          this.$vuetify.theme.themes.dark.primary,
          '#9368e9',
          '#F4511E',
        ],
        menu: false,
      }
    },
    methods: {
      login () {
        this.loading = true
        axios.post('http://localhost:3600/auth', {
          username: this.username,
          password: this.password,
        }).then(response => {
          this.loading = false
          if (response.status === 201) {
            this.$store.dispatch([response.data.accessToken, response.data.refreshToken])
            this.loggedIn = true
            alert('Login was successfull')
          }
        }).catch(e => {
          this.loading = false
        })
      },
      register () {
        axios.post('http://localhost:3600/users/', {
          username: this.username,
          password: this.password,
        }).then(response => {
          this.loading = false
          if (response.status === 201) {
            this.loggedIn = true
            alert('User Creation was successfull')
          }
        }).catch(e => {
          this.loading = false
          alert(e)
        })
      },
    },
  }
</script>
