<template>
  <base-section
    id="profile"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-card
        class="mx-auto"
        max-width="60em"
      >
        <v-container style="background-color:#1f1f1f">
          <v-row justify="center">
            {{ username }}
          </v-row>
          <v-row justify="center">
            <p
              style="color:white"
            >
              Welcome to your Profile.
            </p>
          </v-row>
        </v-container>
      </v-card>
      <v-row justify="center">
        <v-expansion-panels
          hide-actions
          accordion
        >
          <v-expansion-panel
            style="pointer-events:none;cursor:defautl"
            readonly
          >
            <v-expansion-panel-header
              style="background:rgba(255,255,255,0.04)"
            >
              <template v-slot:actions>
                <v-icon color="#FF000000">
                  mdi-check
                </v-icon>
              </template>
              <v-row
                align="center"
                class="spacer"
                no-gutters
              >
                <v-col style="text-align:center">
                  Name
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  Creator
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  <v-icon color="accent">
                    mdi-arrow-up-bold
                  </v-icon>
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  <v-icon color="primary">
                    mdi-arrow-down-bold
                  </v-icon>
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  <v-icon color="white">
                    mdi-numeric
                  </v-icon>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
          </v-expansion-panel>
          <!-- <v-expansion-panel
            v-for="script in champion.scripts"
            :key="script"
          >
            <v-expansion-panel-header
              disable-icon-rotate
              style="background:rgba(255,255,255,0.005)"
            >
              <v-row
                align="center"
                class="spacer"
                no-gutters
              >
                <v-col style="text-align:center">
                  <div>
                    {{ script.name }}
                  </div>
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  <div>
                    <I>{{ script.creator }}</I>
                  </div>
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  <div>
                    {{ script.upvotes }}
                  </div>
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  <div>
                    {{ script.downvotes }}
                  </div>
                </v-col>
                <v-divider
                  class="mx-4"
                  vertical
                />
                <v-col style="text-align:center">
                  <div>
                    {{ script.downvotes }}
                  </div>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="background-color:rgba(255,255,255,0.0025)">
              <v-container
                style="width:100%"
                fluid
              >
                <v-row
                  align="center"
                  class="spacer"
                  no-gutters
                >
                  <v-col>
                    <div>
                      {{ script.description }}
                    </div>
                  </v-col>
                  <v-divider
                    class="mx-4"
                    vertical
                  />
                  <div>
                    <v-icon
                      width="2 em"
                      class="mr-2"
                      color="secondary"
                      @click="startDownload"
                    >
                      mdi-download
                    </v-icon>
                  </div>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel> -->
        </v-expansion-panels>
      </v-row>
    </v-responsive>
  </base-section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'SectionProfile',

    data () {
      return {
        username: '',
        scripts: [],
      }
    },
    beforeCreate () {
      if (!this.$store.getters.isLoggedIn) {
        this.$router.push('/login')
      }
      this.username = this.$store.getters.getUser
    },
    created () {
      this.loading = true
      axios({
        method: 'post',
        url: 'https://spacesharp-db.com:3600/scripts/user',
        headers: {},
        data: {
          username: this.username,
        },
      }).then(response => {
        console.log(response)
      })
      // axios.post('https://spacesharp-db.com:3600/scripts/user', this.username)
      //   .then(response => {
      //     this.scripts = response.data
      //     console.log(this.scripts)
      //     this.loading = false
      //     this.error = false
      //   })
      //   .catch(e => {
      //     this.error = true
      //   })
    },
  }
</script>
