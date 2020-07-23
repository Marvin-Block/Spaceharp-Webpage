<template>
  <base-section
    id="profile"
  >
    <v-speed-dial
      v-if="!notValid"
      absolute
      dark
      fab
      right
      bottom
      direction="top"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn
          color="blue darken-2"
          dark
          fab
        >
          <v-icon>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        dark
        fab
        bottom
        right
        small
        color="accent"
        @click="resetForm();uploadDialog = true"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="primary"
        @click="logout()"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="secondary"
        @click="refreshLicenseDialog = true"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-speed-dial>

    <v-dialog
      v-model="refreshLicenseDialog"
      persistent
      max-width="800px"
    >
      <v-card dark>
        <v-card-title>
          <span class="headline">Refresh License</span>
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
                  sm="12"
                  md="12"
                >
                  <v-text-field
                    v-model="licence"
                    dark
                    :rules="licenceRule"
                    :counter="25"
                    label="Licence"
                    required
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
            @click="refreshLicenseDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="success"
            text
            :disabled="!valid"
            @click="addLicence();refreshLicenseDialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="LicenseInUse"
      persistent
      max-width="800px"
    >
      <v-card dark>
        <v-card-title>
          <span class="headline">License <span style="color:#9f2823">Error</span></span>
        </v-card-title>
        <v-card-text>
          <v-row
            justify="center"
          >
            <v-icon
              large
              color="primary"
              class="text-center"
            >
              mdi-alert
            </v-icon>
          </v-row>
          <v-row
            justify="center"
          >
            <h3>This license is already in use. </h3>
          </v-row>
          <v-row
            justify="center"
          >
            <h3>Please try another one</h3>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="accent"
            text
            @click="LicenseInUse = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="InvalidLicense"
      persistent
      max-width="800px"
    >
      <v-card dark>
        <v-card-title>
          <span class="headline">License <span style="color:#9f2823">Error</span></span>
        </v-card-title>
        <v-card-text>
          <v-row
            justify="center"
          >
            <v-icon
              large
              color="primary"
              class="text-center"
            >
              mdi-alert
            </v-icon>
          </v-row>
          <h3>
            <v-row
              justify="center"
            >
              You license is not valid. Please check the following:
            </v-row>
            <v-row
              justify="center"
            >
              <ol>
                <li>Log in to Spacesharp first and check your license</li>
                <li>Test licenses are not aviliable for the DB</li>
                <li>Make sure you entered the correct license without any empty spaces</li>
              </ol>
            </v-row>
          </h3>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="accent"
            text
            @click="InvalidLicense = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="addLicenseDialog"
      persistent
      max-width="800px"
    >
      <v-card dark>
        <v-card-title>
          <span class="headline">Add License</span>
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
                  sm="12"
                  md="12"
                >
                  <v-text-field
                    v-model="licence"
                    dark
                    :rules="licenceRule"
                    :counter="25"
                    label="Licence"
                    required
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
            @click="addLicenseDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="success"
            text
            :disabled="!valid"
            @click="addLicence();addLicenseDialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div v-if="!loading">
      <v-responsive
        v-if="scripts.length < 1 && uploadDialog == false"
        class="mx-auto"
        max-width="1350"
      >
        <v-col>
          <v-card
            v-if="!notValid"
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
          <v-card
            v-else
            style="pointer-events:none;cursor:default"
            height="auto"
            width="800"
            dark
            color="primary"
            class="mx-auto"
          >
            <v-card-text
              class="text-center"
            >
              <v-row
                justify="center"
              >
                <div
                  v-if="notValid"
                  class="text--primary"
                >
                  <h3>
                    <p style="color:white">
                      It seem like you did not Link an Active License to your Account
                    </p>
                    <p style="color:white; margin-bottom:0px">
                      You can do this by pressing the button Below
                    </p>
                  </h3>
                  <br>
                  <v-btn
                    dark
                    color="accent"
                    style="pointer-events:auto;cursor:pointer"
                    @click="addLicenseDialog = true"
                  >
                    Add Licence
                  </v-btn>
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
                          :counter="500"
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
                        md="6"
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
                        md="6"
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
                      <!-- <v-col
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
                      </v-col> -->
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
                      <v-col
                        cols="12"
                        md="12"
                      >
                        <v-switch
                          v-model="editData.encrypted"
                          :label="`Encryption`"
                          color="success"
                          hide-details
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
                style="pointer-events:none;cursor:default;background:rgba(255,255,255,0.025)"
                readonly
              >
                <v-expansion-panel-header>
                  <template v-slot:actions>
                    <v-col>
                      <div>
                        <v-icon
                          style="pointer-events:none;cursor:pointer;"
                          width="2 em"
                          class="mr-2"
                          color="#FF000000"
                        >
                          mdi-pencil
                        </v-icon>
                      </div>
                      <v-divider
                        class="mx-4"
                      />
                    </v-col>
                  </template>
                  <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                  >
                    <v-avatar
                      size="36px"
                      style="padding-left: 1em"
                    >
                      <div />
                    </v-avatar>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      Script Name
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      Encrypted
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      Type
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      Downloads
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                  </v-row>
                </v-expansion-panel-header>
              </v-expansion-panel>
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
                          style="pointer-events:none;cursor:pointer;"
                          width="2 em"
                          class="mr-2"
                          color="grey"
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
                    <v-avatar
                      size="36px"
                      style="padding-left: 1em"
                    >
                      <img
                        height="3em"
                        :src="require(`@/assets/ChampIcons/${script.champion[0].championName}.png`)"
                        alt="Avatar"
                      >
                    </v-avatar>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      {{ script.name }}
                    </v-col>
                    <v-divider
                      class="mx-4"
                      vertical
                    />
                    <v-col style="text-align:center;color:white">
                      <v-icon
                        v-if="script.encrypted"
                        color="accent"
                      >
                        mdi-lock
                      </v-icon>
                      <v-icon
                        v-else
                        color="primary"
                      >
                        mdi-lock-open-variant
                      </v-icon>
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
                    <v-col style="text-align:center;color:white">
                      {{ script.downloads }}
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
        :timeout="timeout"
      >
        <v-alert
          prominent
          type="error"
          justify="center"
        >
          <v-row align="center">
            <v-col class="grow">
              There was an Error. Please try again in a few Seconds.<br> If this issue persist, please contact
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
      v-if="loading"
      class="text-center"
    >
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      />
    </div>
    <div
      v-if="uploadError"
      class="text-center mx-auto"
      style="max-width:80em"
    >
      <v-snackbar
        v-model="uploadError"
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
              There was an Error Uploading your Script. Please make sure the Syntax is Javascript and you're not missing any brackets.<br> If this issue persist, please contact
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
        licenceRule: [
          v => (v.length <= 25),
        ],
        yikes: '',
        timeout: 10000,
        isChampion: false,
        editDialog: false,
        deleteDialog: false,
        uploadDialog: false,
        error: false,
        uploadError: false,
        loading: false,
        editData: {
          creator: this.$store.getters.getUser,
          name: '',
          encrypted: false,
          hwid: '',
          role: '',
          type: '',
          champion: {
            championName: '',
            role: '',
            roleIcon: '',
          },
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
        LICENCE_KEY: '',
        HWID: '',
        notValid: true,
        licence: '',
        scripts: [],
        LoggedIn: '',
        addLicenseDialog: false,
        refreshLicenseDialog: false,
        LicenseInUse: false,
        InvalidLicense: false,
        errorMsg: '',
      }
    },
    beforeCreate () {
      if (!this.$store.getters.isLoggedIn) {
        this.LoggedIn = this.$store.getters.isLoggedIn
        // this.$router.push('/login')
      }
      this.username = this.$store.getters.getUser
      // this.$root.$refs.AppBar.refreshBar()
    },
    created () {
      this.loading = true
      this.isActivated()
      this.axiospost()
    },
    mounted () {
      this.isActivated()
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
        this.$root.$refs.AppBar.removeProfile()
        // this.reloadPage()
      },
      isActivated () {
        this.$store.getters.hasLicence === '' || this.$store.getters.hasLicence === 'emptyLicence' ? this.LICENCE_KEY = '' : this.LICENCE_KEY = this.$store.getters.hasLicence
        this.$store.getters.getHWID === '' ? this.HWID = '' : this.HWID = this.$store.getters.getHWID
        if (typeof (this.HWID) !== 'undefined' && typeof (this.LICENCE_KEY !== 'undefined')) {
          this.HWID.length > 0 && this.LICENCE_KEY.length > 0 ? this.notValid = false : this.notValid = true
        }
        this.loading = false
      },
      axiospost () {
        axios({
          method: 'post',
          url: 'https://spacesharp-db.com:3600/scripts/aggUser',
          // url: 'http://localhost:3600/scripts/user',
          headers: {},
          data: {
            username: this.$store.getters.getUser,
          },
        }).then(response => {
          this.scripts = response.data
          this.loading = false
        }).catch(e => {
          this.loading = false
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
        form.encrypted = false
        form.creator = this.$store.getters.getUser
        form.name = ''
        form.role = ''
        form.type = ''
        form.champion = ''
        form.file = ''
      },
      editPreForm (script) {
        const form = this.editData
        form.encrypted = false
        form.id = script._id
        form.creator = this.$store.getters.getUser
        form.name = script.name
        form.role = script.role
        form.type = script.type
        form.champion = script.champion
      },
      updateScript () {
        this.axiospost()
      },
      deleteScript () {
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
            url: 'https://spacesharp-db.com:3600/scripts/aggUser',
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
            encrypted: this.editData.encrypted,
            hwid: this.$store.getters.getHWID,
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
              url: 'https://spacesharp-db.com:3600/scripts/aggUser',
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
            this.errorMsg = e
            this.uploadError = true
          })
        })
      },
      addLicence () {
        axios.post('https://spacesharp-db.com:3600/users/addLicence', {
          data: {
            LICENCE_KEY: this.licence,
            username: this.$store.getters.getUser,
          },
        }).then(response => {
          if (response.status !== 200) {
            this.errorMsg = response.errors
            this.error = true
            // console.log("Error1")
          } else {
            axios.get('https://spacesharp-db.com:3600/users/user', {
              headers: {
                Authorization: 'Bearer ' + this.$store.getters.isLoggedIn,
              },
              params: {
                username: this.$store.getters.getUser,
              },
            }).then(async res => {
              const accessToken = this.$store.getters.isLoggedIn
              const user = this.$store.getters.getUser
              const refreshToken = this.$store.getters.getRefreshToken
              const LICENCE_KEY = await res.data.LICENCE_KEY
              const HWID = await res.data.HWID
              this.$store.dispatch('login', { accessToken, user, refreshToken, LICENCE_KEY, HWID })
              this.isActivated()
              this.loading = false
            }).catch(e => {
              // console.log("Error2")
            })
          }
        }).catch(e => {
          // eslint-disable-next-line no-constant-condition
          e.message = 'Request failed with status code 400' ? this.InvalidLicense = true : this.InvalidLicense = false
          // eslint-disable-next-line no-constant-condition
          e.response.data.errors[0] = 'Licence alredy in use' ? this.LicenseInUse = true : this.LicenseInUse = false
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
