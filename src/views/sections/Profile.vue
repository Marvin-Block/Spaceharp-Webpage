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
          <v-row
            v-model="username"
            justify="center"
          >
            {{ username }}
          </v-row>
          <v-row
            justify="center"
            style="color:white"
          >
            Welcome to your Profile.
          </v-row>
        </v-container>
      </v-card>
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
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      dark
                      label="Script Name*"
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      dark
                      :items="listRole"
                      label="Role*"
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      dark
                      :items="listType"
                      label="Type*"
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-autocomplete
                      :items="listChampion"
                      label="Champion*"
                    />
                  </v-col>
                </v-row>
              </v-container>
              *indicates required field
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="editDialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="editDialog = false"
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
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Script Name*"
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      :items="listRole"
                      label="Role*"
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      :items="listType"
                      label="Type*"
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-autocomplete
                      :items="listChampion"
                      label="Champion*"
                    />
                  </v-col>
                </v-row>
              </v-container>
              *indicates required field
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="editDialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="editDialog = false"
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
                      @click="editScript(script);editDialog = true"
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
                      @click="deleteScript(script);deleteDialog = true"
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
        editDialog: false,
        deleteDialog: false,
        uploadDialog: false,
        error: false,
        loading: false,
        targetScript: {},
        // add list of all champions
        listChampion: ['Ahri', 'Akali', 'Anivia', 'AurelionSol', 'Azir', 'Cassiopeia', 'Corki', 'Diana', 'Ekko', 'Fizz', 'Galio', 'Heimerdinger', 'Kassadin', 'Katarina', 'LeBlanc', 'Lissandra', 'Lux', 'Malzahar', 'Neeko', 'Orianna', 'Qiyana', 'Rumble', 'Ryze', 'Swain', 'Sylas', 'Syndra', 'Annie', 'Taliyah', 'Talon', 'TwistedFate', 'Veigar', 'VelKoz', 'Viktor', 'Vladimir', 'Xerath', 'Yasuo', 'Zed', 'Ziggs', 'Zoe', 'Alistar', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Janna', 'Karma', 'Lulu', 'Morgana', 'Nami', 'Nautilus', 'Pyke', 'Rakan', 'Sona', 'Soraka', 'TahmKench', 'Taric', 'Thresh', 'Yuumi', 'Zilean', 'Zyra', 'Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx', 'KaiSa', 'Kalista', 'KogMaw', 'Lucian', 'Senna', 'Sivir', 'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah', 'Aatrox', 'ChoGath', 'Darius', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Illaoi', 'Irelia', 'Jax', 'Jayce', 'Kayle', 'Kennen', 'Kled', 'Malphite', 'Maokai', 'Mordekaiser', 'Nasus', 'Ornn', 'Poppy', 'Quinn', 'Renekton', 'Riven', 'Rumble', 'Sett', 'Shen', 'Singed', 'Sion', 'Swain', 'Teemo', 'Tryndamere', 'Urgot', 'Wukong', 'Volibear', 'Yorick', 'Amumu', 'DrMundo', 'Elise', 'Evelynn', 'Fiddlesticks', 'Gragas', 'Graves', 'Hecarim', 'Ivern', 'Jarvan', 'Khartus', 'Kayn', 'KhaZix', 'Kindred', 'LeeSin', 'MasterYi', 'Nidalee', 'Nocturne', 'Nunu&Willump', 'Olaf', 'Rammus', 'RekSai', 'Rengar', 'Sejuani', 'Shaco', 'Shyvana', 'Skarner', 'Trundle', 'Udyr', 'Vi', 'Warwick', 'XinZhao', 'Zac'],
        listRole: ['Top', 'Jungle', 'Mid', 'Adc', 'Support'],
        listType: ['Champion', 'Module', 'Utility'],
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
          username: this.$store.getters.getUser,
        },
      }).then(response => {
        this.scripts = response.data
        this.loading = false
      }).catch(e => {
        this.error = true
      })
    },
    methods: {
      editScript (script) {
        this.targetScript = script
      },
      deleteScript (script) {
        this.targetScript = script
      },
      uploadScript (username) {
        console.log()
      },
    },
  }
</script>
<style>
html {
  font-size:14px
}
</style>
