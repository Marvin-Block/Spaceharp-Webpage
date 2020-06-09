<template>
  <v-theme-provider dark>
    <section id="login">
      <base-img
        height="50em"
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
                  <v-card class="elevation-12">
                    <v-toolbar
                      color="primary"
                      dark
                      flat
                    >
                      <v-toolbar-title>Login form</v-toolbar-title>
                      <v-spacer />
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn
                            :href="source"
                            icon
                            large
                            target="_blank"
                            v-on="on"
                          >
                            <v-icon>mdi-code-tags</v-icon>
                          </v-btn>
                        </template>
                        <span>Source</span>
                      </v-tooltip>
                    </v-toolbar>
                    <v-card-text>
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
                    <v-card-actions>
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
          console.log(this)
          const credentials = {
            username: this.username,
            password: this.password,
          }
          const response = await AuthService.signUp(credentials)
          this.msg = response.msg
        } catch (error) {
          this.msg = error.response.data.msg
        }
      },
      async login () {
        try {
          const credentials = {
            username: this.username,
            password: this.password,
          }
          const response = await AuthService.login(credentials)
          this.msg = response.msg
          const accessToken = response.accessToken
          const user = response.user
          const refreshToken = response.refreshToken
          this.$store.dispatch('login', { accessToken, user, refreshToken })
          this.$router.push('/')
        } catch (error) {
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
