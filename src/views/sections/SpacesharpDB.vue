/* eslint-disable vue/valid-v-for */
<template>
  <section
    id="SpacesharpDB"
  >
    <br>
    <!-- <v-card
      class="mx-auto"
      max-width="60em"
    >
      <v-container style="background-color:yellow">
        <v-row justify="center">
          <p
            style="color:black"
            class="text-center text--primary"
          >
            Due to recent changes you won't be able to Download any Scripts.<br>
            I apologize for the inconvenience.
          </p>
        </v-row>
      </v-container>
    </v-card>
    <br>-->
    <v-container
      v-if="!loading"
      style="width:auto"
    >
      <v-row justify="center">
        <v-expansion-panels
          hover
          accordion
        >
          <v-expansion-panel
            style="pointer-events:none;cursor:default"
            readonly
          >
            <v-expansion-panel-header>
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
                <v-col style="text-align:center" />
                <v-col style="text-align:center">
                  Champion
                </v-col>
                <v-col style="text-align:center">
                  Role
                </v-col>
                <!-- <v-col style="text-align:center">
                  Tier
                </v-col> -->
                <v-col style="text-align:center">
                  Number of Scripts
                </v-col>
              </v-row>
            </v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel
            v-for="champion in champions"
            :key="champion"
            hide-actions
          >
            <v-expansion-panel-header
              v-if="champion.scripts.length"
              disable-icon-rotate
            >
              <v-row
                align="center"
                class="spacer"
                no-gutters
              >
                <v-col style="text-align:center">
                  <v-avatar
                    size="36px"
                  >
                    <img
                      height="3em"
                      :src="require(`@/assets/ChampIcons/${champion.championName}.png`)"
                      alt="Avatar"
                    >
                  </v-avatar>
                </v-col>
                <v-col style="text-align:center">
                  {{ champion.championName }}
                </v-col>
                <v-col style="text-align:center">
                  <v-img
                    contain
                    height="2.5em"
                    :src="require(`@/assets/${champion.roleIcon}`)"
                  />
                </v-col>
                <!-- <v-col style="text-align:center">
                  {{ champion.tier }}
                </v-col> -->
                <v-col style="text-align:center">
                  <v-icon
                    width="2 em"
                  >
                    mdi-format-list-numbered
                  </v-icon>
                  {{ champion.scripts.length }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-container
                style="width:auto"
              >
                <v-row
                  justify="space-around"
                >
                  <v-row
                    justify="center"
                  >
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
                            <!-- <v-col style="text-align:center">
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
                            </v-col> -->
                            <v-icon
                              style="padding-left: 1em;padding-right: 1em"
                              color="white"
                            >
                              mdi-lock-question
                            </v-icon>
                            <v-divider
                              class="mx-4"
                              vertical
                            />
                            <v-col style="text-align:center">
                              Downloads
                            </v-col>
                          </v-row>
                        </v-expansion-panel-header>
                      </v-expansion-panel>
                      <v-expansion-panel
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
                            <!-- <v-col style="text-align:center">
                              <div>
                                N/A
                              </div>
                            </v-col>
                            <v-divider
                              class="mx-4"
                              vertical
                            /> -->
                            <!-- <v-col style="text-align:center">
                              <div>
                                N/A
                              </div>
                            </v-col> -->
                            <v-icon
                              v-if="script.encrypted"
                              style="padding-left: 1em;padding-right: 1em"
                              color="accent"
                            >
                              mdi-lock
                            </v-icon>
                            <v-icon
                              v-else
                              style="padding-left: 1em;padding-right: 1em"
                              color="primary"
                            >
                              mdi-lock-open-variant
                            </v-icon>
                            <v-divider
                              class="mx-4"
                              vertical
                            />
                            <v-col style="text-align:center">
                              <div>
                                {{ script.downloads }}
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
                              v-if="!notValid"
                              align="center"
                              class="spacer"
                              no-gutters
                            >
                              <v-col>
                                <div style="white-space:pre-wrap">
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
                                  @click="startDownload(script)"
                                >
                                  mdi-download
                                </v-icon>
                              </div>
                            </v-row>
                            <v-row
                              v-else
                              align="center"
                              class="spacer text-center"
                              no-gutters
                            >
                              <v-col>
                                <div
                                  style="background-color:rgba(0,0,0,0.4); width:20em; padding:10px"
                                  class="mx-auto"
                                >
                                  Please Sign in and Register an active license to see the Download.
                                </div>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
    <div
      v-else-if="error"
      class="text-center mx-auto"
      style="max-width:80em"
    >
      <v-snackbar
        v-model="error"
        color="error"
        :timeout="timeout"
      >
        <v-alert
          prominent
          type="error"
          justify="center"
        >
          <v-row align="center">
            <v-col class="grow">
              There was an Error getting the Champion list. Please try again in a few Seconds.<br> If this issue persist, please contact
              Muffin#4222
            </v-col>
          </v-row>
        </v-alert>
        <v-btn
          color="black"
          text
          @click="reloadPage"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
    <div
      v-else
      class="text-center"
    >
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      />
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'SectionSpacesharpDB',

    data () {
      return {
        timeout: 10000,
        snackbar: false,
        multiline: true,
        loading: true,
        error: false,
        champions: [],
        scripts: [],
        downloadURL: null,
        HWID: '',
        LICENCE_KEY: '',
        notValid: true,
      }
    },

    created () {
      this.loading = true
      axios.get('https://spacesharp-db.com:3600/champions/aggPart')
        .then(response => {
          this.champions = response.data
          this.loading = false
          this.error = false
        })
        .catch(e => {
          this.error = true
        })
      this.isActivated()
    },
    methods: {
      isActivated () {
        this.$store.getters.hasLicence === '' || this.$store.getters.hasLicence === 'emptyLicence' ? this.LICENCE_KEY = '' : this.LICENCE_KEY = this.$store.getters.hasLicence
        this.$store.getters.getHWID === '' ? this.HWID = '' : this.HWID = this.$store.getters.getHWID
        this.HWID.length > 0 && this.LICENCE_KEY.length > 0 ? this.notValid = false : this.notValid = true
      },
      forceFileDownload (response) {
        const url = window.URL.createObjectURL(new Blob([response.data.file]))
        const link = document.createElement('a')
        let fileName
        if (response.data.encrypted) {
          fileName = response.data.name + '.sse'
        } else {
          fileName = response.data.name + '.sss'
        }
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
      },
      reloadPage () {
        window.location.reload()
      },
      startDownload (script) {
        axios({
          method: 'get',
          // url: 'http://localhost:3600/scripts/' + script._id,
          url: 'https://spacesharp-db.com:3600/scripts/' + script._id,
          params: {
            id: script._id,
            hwid: this.HWID,
          },
        }).then(response => {
          this.forceFileDownload(response)
        }).catch(e => {
          this.error = true
        })
      },
    },
    provide: {
      theme: { isDark: true },
    },
  }
</script>
