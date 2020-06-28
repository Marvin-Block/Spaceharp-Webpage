/* eslint-disable vue/valid-v-for */
<template>
  <section
    id="SpacesharpDB"
  >
    <br>
    <v-dialog
      v-model="NoDownload"
      persistent
      max-width="800px"
    >
      <v-card dark>
        <v-card-title>
          <span class="headline"><strong> NO DOWNLOAD </strong></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-container style="background-color:yellow">
                  <v-row justify="center">
                    <p
                      style="color:black;font-size:20px"
                      class="text-center text--primary"
                    >
                      <strong>
                        HERE NO DOWNLOAD <br>
                        ME MAKING CHANGES <br>
                        NO DOWNLOAD <br>
                        IT WILL WORK WHEN IT WORKS <br>
                        NO DOWNLOAD
                      </strong>
                    </p>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <br>
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
                            <v-col style="text-align:center">
                              <div>
                                N/A
                              </div>
                            </v-col>
                            <v-divider
                              class="mx-4"
                              vertical
                            />
                            <v-col style="text-align:center">
                              <div>
                                N/A
                              </div>
                            </v-col>
                            <v-divider
                              class="mx-4"
                              vertical
                            />
                            <v-col style="text-align:center">
                              <div>
                                N/A
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
                              v-if="hasLicense() && hasHWID()"
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
        NoDownload: true,
        snackbar: false,
        multiline: true,
        loading: true,
        error: false,
        champions: [],
        scripts: [],
        downloadURL: null,
      }
    },

    created () {
      this.loading = true
      // axios.get('http://localhost:3600/champions/aggPart')
      axios.get('https://spacesharp-db.com:3600/champions/aggPart')
        .then(response => {
          this.champions = response.data
          this.loading = false
          this.error = false
        })
        .catch(e => {
          this.error = true
        })
    },
    methods: {
      hasLicense () {
        const licence = this.$store.getters.hasLicence
        return !(licence === '' || licence === 'emptyLicence')
      },
      hasHWID () {
        const HWID = this.$store.getters.getHWID
        return !(HWID === '')
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
