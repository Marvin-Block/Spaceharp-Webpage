<template>
  <v-theme-provider dark>
    <section id="login">
      <base-img
        height="100vh"
        :src="require('@/assets/2476.png')"
        class="white--text"
        gradient="to right, rgba(5, 11, 31, .6), rgba(5, 11, 31, .6)"
        style="object-fit: cover"
      >
        <v-content>
          <v-container
            class="fill-height"
            fluid
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-row
                align="center"
                justify="center"
              >
                <v-col
                  cols="auto"
                  sm="8"
                  md="3"
                >
                  <v-card
                    class="elevation-12"
                  >
                    <v-toolbar
                      color="primary"
                      dark
                      flat
                    >
                      <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <div
                      v-if="loading"
                      class="text-center"
                    >
                      <v-progress-circular
                        :size="70"
                        :width="7"
                        color="accent"
                        indeterminate
                      />
                    </div>
                    <v-card-text
                      v-if="!loading"
                    >
                      <v-form>
                        <v-text-field
                          v-model="username"
                          label="Login"
                          prepend-icon="mdi-account"
                          type="text"
                        />

                        <v-text-field
                          v-model="password"
                          label="Password"
                          prepend-icon="mdi-lock"
                          type="password"
                        />
                      </v-form>
                    </v-card-text>
                    <v-card-actions v-if="!loading">
                      <v-spacer />
                      <v-btn
                        color="accent"
                        @click="login"
                      >
                        Login
                      </v-btn>
                      <v-btn
                        color="secondary"
                        value="Sign Up"
                        @click="signUp"
                      >
                        Register
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
        </v-content>
        <div
          v-if="error"
          class="text-center mx-auto"
          style="max-width:80em"
        >
          <v-alert
            prominent
            type="error"
            justify="center"
          >
            <v-row align="center">
              <v-col class="grow">
                There was an Error, please try again later.
              </v-col>
            </v-row>
          </v-alert>
        </div>
        <div
          v-if="userAlreadyTaken"
          class="text-center mx-auto"
          style="max-width:80em"
        >
          <v-alert
            prominent
            type="error"
            justify="center"
          >
            <v-row align="center">
              <v-col class="grow">
                This Username is already taken.
              </v-col>
            </v-row>
          </v-alert>
        </div>
        <div
          v-if="registerSuccess"
          class="text-center mx-auto"
          style="max-width:80em"
        >
          <v-alert
            prominent
            type="success"
            justify="center"
          >
            <v-row align="center">
              <v-col class="grow">
                You account has been successfully registered.
              </v-col>
            </v-row>
          </v-alert>
        </div>
      </base-img>
    </section>
  </v-theme-provider>
</template>

<script>
  // Components
  import {
    HexToRGBA,
    RGBAtoCSS,
  } from 'vuetify/lib/util/colorUtils'
  import AuthService from '@/services/AuthService.js'

  export default {
    name: 'Login',

    metaInfo () {
      return {
        changed: meta => (this.title = meta.titleChunk.toUpperCase()),
      }
    },

    provide: {
      heading: { align: 'center' },
    },

    data () {
      return {
        title: '',
        username: '',
        password: '',
        msg: '',
        loading: false,
        error: false,
        userAlreadyTaken: false,
        registerSuccess: false,
      }
    },

    computed: {
      gradient () {
        const color = `${this.$vuetify.theme.themes.dark.secondary}CC`
        const overlay = RGBAtoCSS(HexToRGBA(color))

        return `to top, ${overlay}, ${overlay}`
      },
      src () {
        return this.$route.meta.src
      },
      items () {
        return [
          { text: 'HOME', to: '/' },
          { text: this.title },
        ]
      },
    },
    methods: {
      async signUp () {
        try {
          this.loading = true
          const credentials = {
            username: this.username,
            password: this.password,
            LICENCE_KEY: '',
          }
          const response = await AuthService.signUp(credentials)
          this.registerSuccess = true
          this.loading = false
          this.msg = response.msg
        } catch (error) {
          this.loading = false
          if (error.response.data.errors[0] === 'Username alredy in use') {
            this.userAlreadyTaken = true
          } else {
            this.error = true
          }
          this.msg = error.response.data.msg
          setTimeout(() => {
            this.error = false
            this.userAlreadyTaken = false
          }, 5000)
        }
      },
      async login () {
        try {
          this.loading = true
          const credentials = {
            username: this.username,
            password: this.password,
          }
          const response = await AuthService.login(credentials)
          this.msg = response.msg
          const accessToken = response.accessToken
          const user = response.username
          const refreshToken = response.refreshToken
          const LICENCE_KEY = response.LICENCE_KEY
          const HWID = response.HWID
          console.log(response)
          this.$store.dispatch('login', { accessToken, user, refreshToken, LICENCE_KEY, HWID })
          this.loading = false
          this.$router.push('/Profile')
        } catch (error) {
          this.loading = false
          this.error = true
          this.msg = error.response.data.msg
        }
      },
    },
  }
</script>

<style lang="sass">
  #login
    .v-breadcrumbs__item
      color: #FFFFFF
</style>
