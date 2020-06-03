<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-8.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .3), rgba(5, 11, 31, .3)"
    >
      <br>
      <v-card
        class="mx-auto"
        max-width="70vw"
      >
        <v-container>
          <v-row justify="center">
            <h3>
              TEST PAGE
            </h3>
          </v-row>
          <v-row justify="center">
            <p>
              This page is still being tested and has no funciotnality whatsoever.
            </p>
          </v-row>
        </v-container>
      </v-card>
      <v-container style="width:auto">
        <v-row justify="center">
          <v-expansion-panels
            accordion
          >
            <v-expansion-panel
              v-for="(champion, i) in champions"
              :key="champion"
              hide-actions
            >
              <v-expansion-panel-header disable-icon-rotate>
                <v-row
                  align="center"
                  class="spacer"
                  no-gutters
                >
                  <v-col>
                    <v-avatar
                      size="36px"
                    >
                      <img
                        height="1.5vh"
                        :src="require(`@/assets/ChampIcons/${champion.championName}.png`)"
                        alt="Avatar"
                      >
                    </v-avatar>
                  </v-col>
                  <v-col>
                    {{ champion.championName }}
                  </v-col>
                  <v-col>
                    <v-img
                      contain
                      height="1.5vw"
                      :src="require(`@/assets/${champion.roleIcon}`)"
                    />
                  </v-col>
                  <v-col>
                    {{ champion.tier }}
                  </v-col>
                  <v-col>
                    <v-icon>mdi-format-list-numbered</v-icon>
                    {{ champion.content.length }}
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container style="width:100%">
                  <v-row justify="space-around">
                    <v-row justify="center">
                      <v-expansion-panels
                        accordion
                      >
                        <v-expansion-panel
                          v-for="test in championSort[i]"
                          :key="test"
                        >
                          <v-expansion-panel-header disable-icon-rotate>
                            <v-row
                              align="center"
                              class="spacer"
                              no-gutters
                            >
                              <v-col>
                                <div>
                                  <v-icon
                                    smallclass="mr-2"
                                  >
                                    mdi-account
                                  </v-icon>
                                  {{ test.name }}
                                </div>
                              </v-col>
                              <v-col>
                                <div>
                                  <I>{{ test.creator }}</I>
                                </div>
                              </v-col>
                              <v-col>
                                <div>
                                  {{ test.upvotes }}
                                </div>
                              </v-col>
                              <v-col>
                                <div>
                                  {{ test.downvotes }}
                                </div>
                              </v-col>
                              <v-col>
                                <div>
                                  {{ test.downvotes }}
                                </div>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-container style="width:100%">
                              <v-row justify="center">
                                <v-row
                                  align="center"
                                  class="spacer"
                                  no-gutters
                                >
                                  <v-col>
                                    <div>
                                      {{ test.description }}
                                    </div>
                                  </v-col>
                                  <v-col>
                                    <v-icon
                                      class="mr-2"
                                      @click="test()"
                                    >
                                      mdi-download
                                    </v-icon>
                                  </v-col>
                                  <v-col>
                                    <v-icon
                                      class="mr-2"
                                      @click="test()"
                                    >
                                      mdi-pencil
                                    </v-icon>
                                  </v-col>
                                  <v-col>
                                    <v-icon
                                      class="mr-2"
                                      @click="test()"
                                    >
                                      mdi-delete
                                    </v-icon>
                                  </v-col>
                                </v-row>
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
    </v-img>
  </section>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: 'SectionProChart',

    data () {
      return {
        image: '@/src/assets/gallery.jpg',
        itemsPerPage: 4,
        dialog: false,
        championheaders: ['Champion', 'Role', 'Tier', 'Scriptcount'],
        champions: [
          {
            championName: 'Annie',
            role: 'Midlane',
            roleIcon: 'mid.png',
            tier: 'A',
            content: [],
          }, {
            championName: 'Ryze',
            role: 'Midlane',
            roleIcon: 'mid.png',
            tier: 'S',
            content: [],
          },
          {
            championName: 'Twitch',
            role: 'ADC',
            roleIcon: 'bot.png',
            tier: 'S+',
            content: [],
          },
          {
            championName: 'Soraka',
            role: 'Support',
            roleIcon: 'supp.png',
            tier: 'B',
            content: [],
          },
        ],
        scriptheaders: ['Name', 'Creator', 'Type', 'Upvotes', 'Downvotes', 'Download'],
        scripts: [
          {
            name: 'Annie for Nenny',
            champion: 'Annie',
            type: 'Champion',
            creator: 'test123',
            upvotes: 0,
            downvotes: 0,
            description: 'Imagine some super fancy description, describin what this shitty script will do, but actually no one will ever read this, because kids are dumb and lazy :)',
          },
          {
            name: 'Testing Annie combo',
            champion: 'Annie',
            type: 'Champion',
            creator: 'etrujw46zr',
            upvotes: 0,
            downvotes: 0,
            description: 'Imagine some super fancy description, describin what this shitty script will do, but actually no one will ever read this, because kids are dumb and lazy :)',
          },
          {
            name: 'Annie is god',
            champion: 'Annie',
            type: 'Champion',
            creator: '3456437',
            upvotes: 0,
            downvotes: 0,
            description: 'Imagine some super fancy description, describin what this shitty script will do, but actually no one will ever read this, because kids are dumb and lazy :)',
          },
          {
            name: 'Combo Annie Insane 2k20',
            champion: 'Annie',
            type: 'Champion',
            creator: '43645',
            upvotes: 0,
            downvotes: 0,
            description: 'Imagine some super fancy description, describin what this shitty script will do, but actually no one will ever read this, because kids are dumb and lazy :)',
          },
          {
            name: 'Ryze YEET',
            champion: 'Ryze',
            type: 'Champion',
            creator: 'yxcbdg123123',
            upvotes: 0,
            downvotes: 0,
            description: 'Imagine some super fancy description, describin what this shitty script will do, but actually no one will ever read this, because kids are dumb and lazy :)',
          },
          {
            name: 'IMAGINE PREDICTION',
            champion: 'Ryze',
            type: 'Champion',
            creator: 'yxfj54',
            upvotes: 0,
            downvotes: 0,
            description: 'Imagine some super fancy description, describin what this shitty script will do, but actually no one will ever read this, because kids are dumb and lazy :)',
          },
          {
            name: 'KALISTA WHEN EVADE',
            champion: 'Ryze',
            type: 'Champion',
            creator: '346hdfg',
            upvotes: 0,
            downvotes: 0,
            description: 'Imagine some super fancy description, describin what this shitty script will do, but actually no one will ever read this, because kids are dumb and lazy :)',
          },
        ],
        editedIndex: -1,
        editedItem: {
          name: '',
          creator: '',
          type: '',
        },
        defaultItem: {
          name: '',
          creator: '',
          type: '',
        },
      }
    },
    computed: {
      championSort (champions, scripts) {
        const arr1 = []
        this.champions.forEach(champ => {
          const arr2 = []
          this.scripts.forEach(script => {
            if (champ.championName === script.champion) {
              arr2.push(script)
            }
          })
          arr1.push(arr2)
        })
        return arr1
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Script' : 'Edit Script'
      },
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },

    method: {
      matchingChamp (arr1, arr2) {
        const test = arr1
        return test
      },
    },

    provide: {
      theme: { isDark: false },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },
    // created () {
    //   axios.get('http://localhost:3600/scripts/all')
    //     .then(response => {
    //       // JSON responses are automatically parsed.
    //       this.items = response.data
    //     })
    //     .catch(e => {
    //       console.log(e)
    //     })
    // },
  }
</script>
