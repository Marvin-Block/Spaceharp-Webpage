<template>
  <base-section
    id="pro-features"
  >
    <!-- <v-card
      class="mx-auto"
      max-width="70vw"
      outlined
    >
      <v-container>
        <v-row justify="center">
          <v-col>Champion</v-col>
          <v-col>Role</v-col>
          <v-col>Tier</v-col>
          <v-col>Amount of Scripts</v-col>
        </v-row>
      </v-container>
    </v-card> -->

    <!-- <h3>
        TEST PAGE
      </h3>
      <p>
        This page is still being tested and has no funciotnality whatsoever.
      </p> -->
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
          inset
        >
          <v-expansion-panel
            v-for="champion in champions"
            :key="champion"
          >
            <v-expansion-panel-header>
              <v-col>
                <div ID="championName">
                  <v-icon>mdi-account</v-icon>
                  {{ champion.championName }}
                </div>
              </v-col>
              <v-col>
                <div ID="role">
                  <I>{{ champion.role }}</I>
                </div>
              </v-col>
              <v-col>
                <div ID="tier">
                  {{ champion.tier }}
                </div>
              </v-col>
              <v-col>
                <div ID="scriptcount">
                  <v-icon>mdi-format-list-numbered</v-icon>
                  {{ champion.scriptcount }}
                </div>
              </v-col>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-container style="width:100%">
                <v-row justify="space-around">
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    hide-default-footer
                    class="elevation-1"
                  >
                    <template v-slot:top>
                      <v-toolbar
                        flat
                      >
                        <v-dialog
                          v-model="dialog"
                          max-width="500px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-btn

                              outlined
                              class="mb-2"
                              v-on="on"
                            >
                              New Script
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title>
                              <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.name"
                                      label="Script Name"
                                    />
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.creator"
                                      label="Creator"
                                    />
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.type"
                                      label="Type"
                                    />
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer />
                              <v-btn
                                outlined
                                text
                                @click="close"
                              >
                                Cancel
                              </v-btn>
                              <v-btn
                                outlined
                                text
                                @click="save"
                              >
                                Save
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                      <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                      >
                        mdi-pencil
                      </v-icon>
                      <v-icon
                        small
                        @click="deleteItem(item)"
                      >
                        mdi-delete
                      </v-icon>
                    </template>
                    <template v-slot:no-data>
                      <v-btn
                        color="primary"
                        @click="initialize"
                      >
                        Reset
                      </v-btn>
                    </template>
                  </v-data-table>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </base-section>
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
        headers: [
          {
            text: 'Script Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Creator', value: 'creator' },
          { text: 'Type', value: 'type' },
          { text: 'Upvotes', value: 'upvotes' },
          { text: 'Downvotes', value: 'downvotes' },
          { text: 'Downloads', value: 'downloads' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [],
        champions: [
          {
            championName: 'Champion 1',
            role: 'Midlane',
            tier: 'A',
            scriptcount: 2,
          }, {
            championName: 'Champion 2',
            role: 'ADC',
            tier: 'S',
            scriptcount: 5,
          },
          {
            championName: 'Champion 3',
            role: 'ADC',
            tier: 'S+',
            scriptcount: 6,
          },
          {
            championName: 'Champion 4',
            role: 'Support',
            tier: 'B',
            scriptcount: 3,
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
      formTitle () {
        return this.editedIndex === -1 ? 'New Script' : 'Edit Script'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Super mega sick Annie',
            creator: 'Nenny#1275',
            type: 'Champion',
            upvotes: 24,
            downvotes: 4,
            downloads: 1000,
          },
          {
            name: 'Script 123',
            creator: 'Trickory#1234',
            type: 'Champion',
            upvotes: 37,
            downvotes: 4,
            downloads: 1024,
          },
          {
            name: 'Jesus is an Illuminati',
            creator: 'Interlogy#6969',
            type: 'Champion',
            upvotes: 23,
            downvotes: 6,
            downloads: 1000,
          },
          {
            name: '911 was an inside job',
            creator: 'Kalist#187',
            type: 'Module',
            upvotes: 67,
            downvotes: 5,
            downloads: 1000,
          },
          {
            name: 'Kys fgt',
            creator: 'Test#1234',
            type: 'Module',
            upvotes: 49,
            downvotes: 9,
            downloads: 1000,
          },
          {
            name: 'Nigglet on the run',
            creator: 'why are there so many entries in this list#1234',
            type: 'Champion',
            upvotes: 94,
            downvotes: 0,
            downloads: 1000,
          },
          {
            name: 'Sharp > Glider',
            creator: 'please safe me',
            type: 'Champion',
            upvotes: 98,
            downvotes: 0,
            downloads: 23658,
          },
          {
            name: '1256',
            creator: 'end my suffering',
            type: 'Utility',
            upvotes: 87,
            downvotes: 5,
            downloads: 51525,
          },
          {
            name: 'Super fast incel stomp',
            creator: 'dear god',
            type: 'Utility',
            upvotes: 51,
            downvotes: 7,
            downloads: 1032600,
          },
          {
            name: '1v14 machine kite god of doom',
            creator: 'please forgive me, for i have sinned',
            type: 'Champion',
            upvotes: 65,
            downvotes: 15,
            downloads: 10,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
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
