<template>
  <base-section
    id="profile"
  >
    <v-btn
      absolute
      dark
      fab
      bottom
      right
      color="accent"
      @click="resetForm();uploadDialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <div v-if="!loading">
      <v-responsive
        v-if="scripts.length < 1 && uploadDialog == false"
        class="mx-auto"
        max-width="1350"
      >
        <v-col>
          <v-card
            style="pointer-events:none;cursor:default"
            height="auto"
            width="800"
            dark
            class="mx-auto"
          >
            <v-card-text
              class="text-center"
            >
              <v-row
                justify="center"
              >
                <div
                  class="text--primary"
                >
                  <p style="color:white">
                    It seem like you did not Upload any Scripts yet
                  </p>
                  <p style="color:white; margin-bottom:0px">
                    You can Upload scripts by Pressing the Green + (Plus) Icon in the bottom right corner
                  </p>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-responsive>
      <v-responsive
        v-else
        class="mx-auto"
        max-width="1350"
      >
        <br>
        <v-row justify="center">
          <v-dialog
            v-model="deleteDialog"
            persistent
            max-width="400"
            dark
          >
            <v-card>
              <v-card-title class="headline">
                Delete this Script ?
              </v-card-title>
              <v-card-text>This script will be removed permanently. There is no possiblity to recover or undo this.</v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="green darken-1"
                  text
                  @click="deleteDialog = false"
                >
                  Abort
                </v-btn>
                <v-btn
                  color="primary"
                  text
                  @click="deleteScript();deleteDialog = false"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="editDialog"
            persistent
            max-width="800px"
          >
            <v-card dark>
              <v-card-title>
                <span class="headline">Edit Script</span>
              </v-card-title>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editData.name"
                          dark
                          :rules="nameRules"
                          :counter="25"
                          label="Script Name"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-select
                          v-model="editData.type"
                          dark
                          :items="listType"
                          :rules="typeRules"
                          label="Type"
                          required
                          @change="isChamp()"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-select
                          v-model="editData.role"

                          dark
                          :disabled="!isChampion"
                          :items="listRole"
                          label="Role"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-autocomplete
                          v-model="editData.champion"
                          :disabled="!isChampion"
                          :items="listChampion"
                          label="Champion"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-file-input
                          v-model="editData.file"
                          accept=".sss"
                          label="File input"
                          :rules="fileRules"
                          prepend-icon="mdi-file-document"
                        />
                      </v-col>
                      <v-col>
                        <v-textarea
                          v-model="editData.description"
                          auto-grow
                          clearable
                          :counter="255"
                          :rules="descriptionRules"
                          label="Description"
                          no-resize
                          placeholder="Please enter your Description"
                        />
                      </v-col>
                    </v-row>
                    <v-form />
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="danger"
                  text
                  @click="resetForm();editDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="success"
                  text
                  :disabled="!valid"
                  @click="updateScript();editDialog = false"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="uploadDialog"
            persistent
            max-width="800px"
          >
            <v-card dark>
              <v-card-title>
                <span class="headline">Upload Script</span>
              </v-card-title>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editData.name"
                          dark
                          :rules="nameRules"
                          :counter="25"
                          label="Script Name"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-select
                          v-model="editData.type"
                          dark
                          :items="listType"
                          :rules="typeRules"
                          label="Type"
                          required
                          @change="isChamp()"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-select
                          v-model="editData.role"
                          dark
                          :disabled="!isChampion"
                          :items="listRole"
                          label="Role"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-autocomplete
                          v-model="editData.champion"
                          :disabled="!isChampion"
                          :items="listChampion"
                          label="Champion"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-file-input
                          v-model="editData.file"
                          accept=".sss"
                          label="File input"
                          :rules="fileRules"
                          prepend-icon="mdi-file-document"
                        />
                      </v-col>
                      <v-col>
                        <v-textarea
                          v-model="editData.description"
                          auto-grow
                          clearable
                          :counter="255"
                          :rules="descriptionRules"
                          label="Description"
                          no-resize
                          placeholder="Please enter your Description"
                        />
                      </v-col>
                    </v-row>
                    <v-form />
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="danger"
                  text
                  @click="resetForm();uploadDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="success"
                  text
                  :disabled="!valid"
                  @click="uploadScript();uploadDialog = false"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-expansion-panels
            hide-actions
            accordion
          >
            <template>
              <v-expansion-panel
                v-for="script in scripts"
                :key="script"
                style="pointer-events:none;cursor:default;background:rgba(255,255,255,0.05)"
                readonly
              >
                <v-expansion-panel-header
                  style="background:rgba(255,255,255,0.005)"
                >
                  <template v-slot:actions>
                    <!-- <v-icon color="#FF000000"> -->
                    <v-col>
                      <div>
                        <v-icon
                          style="pointer-events:auto;cursor:pointer;"
                          width="2 em"
                          class="mr-2"
                          color="secondary"
                          @click="editPreForm(script);editDialog = true"
                        >
                          mdi-pencil
                        </v-icon>
                      </div>
                      <v-divider
                        class="mx-4"
                      />
                      <div>
                        <v-icon
                          style="pointer-events:auto;cursor:pointer;"
                          width="2 em"
                          class="mr-2"
                          color="primary"
                          @click="editPreForm(script);deleteDialog = true"
                        >
                          mdi-trash-can
                        </v-icon>
                      </div>
                    </v-col>
                  </template>
                  <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                  >
                    <v-col style="text-align:center;color:white">
                      {{ script.name }}
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      {{ script.champion }}
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      {{ script.role }}
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      {{ script.type }}
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                  </v-row>
                </v-expansion-panel-header>
              </v-expansion-panel>
            </template>
          </v-expansion-panels>
        </v-row>
      </v-responsive>
    </div>

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
  </base-section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'SectionProfile',

    data () {
      return {
        valid: true,
        descriptionRules: [
          v => (v.length <= 500) || 'Description has to be 500 or less characters',
        ],
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 25) || 'Name has to be 25 or less characters',
        ],
        typeRules: [
          v => !!v || 'Type is required',
        ],
        fileRules: [
          v => !!v || 'Script file is required',
        ],
        yikes: '',
        isChampion: false,
        editDialog: false,
        deleteDialog: false,
        uploadDialog: false,
        error: false,
        loading: false,
        editData: {
          creator: this.$store.getters.getUser,
          name: '',
          role: '',
          type: '',
          champion: '',
          description: '',
          up: 0,
          down: 0,
          lastchange: '',
          uploaded: '',
          file: Blob,
        },
        targetScript: {},
        // add list of all champions
        listChampion: ['Ahri', 'Akali', 'Anivia', 'AurelionSol', 'Azir', 'Cassiopeia', 'Corki', 'Diana', 'Ekko', 'Fizz', 'Galio', 'Heimerdinger', 'Kassadin', 'Katarina', 'LeBlanc', 'Lissandra', 'Lux', 'Malzahar', 'Neeko', 'Orianna', 'Qiyana', 'Rumble', 'Ryze', 'Swain', 'Sylas', 'Syndra', 'Annie', 'Taliyah', 'Talon', 'TwistedFate', 'Veigar', 'VelKoz', 'Viktor', 'Vladimir', 'Xerath', 'Yasuo', 'Zed', 'Ziggs', 'Zoe', 'Alistar', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Janna', 'Karma', 'Lulu', 'Morgana', 'Nami', 'Nautilus', 'Pyke', 'Rakan', 'Sona', 'Soraka', 'TahmKench', 'Taric', 'Thresh', 'Yuumi', 'Zilean', 'Zyra', 'Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx', 'KaiSa', 'Kalista', 'KogMaw', 'Lucian', 'Senna', 'Sivir', 'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah', 'Aatrox', 'ChoGath', 'Darius', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Illaoi', 'Irelia', 'Jax', 'Jayce', 'Kayle', 'Kennen', 'Kled', 'Malphite', 'Maokai', 'Mordekaiser', 'Nasus', 'Ornn', 'Poppy', 'Quinn', 'Renekton', 'Riven', 'Rumble', 'Sett', 'Shen', 'Singed', 'Sion', 'Swain', 'Teemo', 'Tryndamere', 'Urgot', 'Wukong', 'Volibear', 'Yorick', 'Amumu', 'DrMundo', 'Elise', 'Evelynn', 'Fiddlesticks', 'Gragas', 'Graves', 'Hecarim', 'Ivern', 'Jarvan', 'Khartus', 'Kayn', 'KhaZix', 'Kindred', 'LeeSin', 'MasterYi', 'Nidalee', 'Nocturne', 'Nunu&Willump', 'Olaf', 'Rammus', 'RekSai', 'Rengar', 'Sejuani', 'Shaco', 'Shyvana', 'Skarner', 'Trundle', 'Udyr', 'Vi', 'Warwick', 'XinZhao', 'Zac'],
        listRole: ['Toplane', 'Jungle', 'Midlane', 'ADC', 'Support'],
        listType: ['Champion'],
        altListType: ['Champion', 'Module', 'Utility'],
        username: '',
        scripts: [],
      }
    },
    beforeCreate () {
      if (!this.$store.getters.isLoggedIn) {
        this.$router.push('/login')
      }
      this.username = this.$store.getters.getUser
      this.$root.$refs.AppBar.refreshBar()
    },
    created () {
      this.loading = true
      this.axiospost()
    },
    methods: {
      axiospost () {
        axios({
          method: 'post',
          url: 'https://spacesharp-db.com:3600/scripts/user',
          // url: 'http://localhost:3600/scripts/user',
          headers: {},
          data: {
            username: this.$store.getters.getUser,
          },
        }).then(response => {
          this.scripts = response.data
          this.loading = false
        }).catch(e => {
          this.error = true
        })
      },
      reloadPage () {
        window.location.reload()
      },
      isChamp () {
        if (this.editData.type === 'Champion') {
          this.isChampion = true
        } else {
          this.editData.champion = ''
          this.editData.role = ''
          this.isChampion = false
        }
      },
      validate () {
        this.$refs.form.validate()
      },
      loadTextFromFile (ev) {
        const reader = new FileReader()
        reader.onload = e => {
          this.editData.file = e.target.result
        }
        reader.readAsText()
      },
      resetForm () {
        const form = this.editData
        form.id = ''
        form.creator = this.$store.getters.getUser
        form.name = ''
        form.role = ''
        form.type = ''
        form.champion = ''
        form.file = ''
      },
      editPreForm (script) {
        const form = this.editData
        form.id = script.id
        form.creator = this.$store.getters.getUser
        form.name = script.name
        form.role = script.role
        form.type = script.type
        form.champion = script.champion
      },
      updateScript () {
        // const data = this.editData
        // grab data, send patch, empty editData
        // refresh script list
        this.axiospost()
      },
      deleteScript () {
        // grab id, send delete with username, empty editData
        // refresh script list
        axios.delete('https://spacesharp-db.com:3600/scripts/', {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.isLoggedIn,
          },
          data: {
            id: this.editData.id,
          },
        }).then(response => {
          axios({
            method: 'post',
            url: 'https://spacesharp-db.com:3600/scripts/user',
            // url: 'http://localhost:3600/scripts/user',
            headers: {},
            data: {
              username: this.$store.getters.getUser,
            },
          }).then(response => {
            this.scripts = response.data
            this.loading = false
          }).catch(e => {
            this.error = true
          })
        }).catch(e => {
          alert(e)
        })
      },
      uploadScript () {
        this.editData.file.text().then(text => {
          const data = {
            name: this.editData.name,
            creator: this.editData.creator,
            role: this.editData.role,
            type: this.editData.type,
            champion: this.editData.champion,
            description: this.editData.description,
            up: 0,
            down: 0,
            lastchange: new Date().toUTCString(),
            uploaded: new Date().toUTCString(),
            file: text,
          }
          axios({
            method: 'post',
            url: 'https://spacesharp-db.com:3600/scripts',
            // url: 'http://localhost:3600/scripts',
            data: {
              data: data,
            },
          }).then(response => {
            axios({
              method: 'post',
              url: 'https://spacesharp-db.com:3600/scripts/user',
              // url: 'http://localhost:3600/scripts/user',
              headers: {},
              data: {
                username: this.$store.getters.getUser,
              },
            }).then(response => {
              this.scripts = response.data
              this.loading = false
            }).catch(e => {
              this.error = true
            })
          }).catch(e => {
            // Error handle
            this.error = true
          })
        })
      },
    },
  }
</script>

<style>

html {
  font-size:14px
}
</style>
