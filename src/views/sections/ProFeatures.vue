<template>
  <base-section
    id="pro-features"
    >
    <h3>TEST PAGE</h3>
    <p>This page is still being tested and has no funciotnality whatsoever.</p>

  <v-card
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
  </v-card>

  <v-container style="width:auto">
    <v-row justify="center">
      <v-expansion-panels inset>
        <v-expansion-panel
          v-for="champion in champions"
          :key="champion"
        >
          <v-expansion-panel-header>
            <v-col>
              <div ID="championName">
                <v-icon>mdi-account</v-icon>
                {{champion.championName}}
              </div>
            </v-col>
            <v-col>
              <div ID="role">
                 <I>{{champion.role}}</I>
              </div>
            </v-col>
            <v-col>
              <div ID="tier">
                 {{champion.tier}}
              </div>
            </v-col>
            <v-col>
              <div ID="scriptcount">
                 <v-icon>mdi-format-list-numbered</v-icon>
                 {{champion.scriptcount}}
              </div>
            </v-col>
            </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container style="width:auto">
              <v-row justify="center">
                <v-expansion-panels inset>
                  <v-expansion-panel
                    v-for="item in items"
                    :key="item"
                  >
                    <v-expansion-panel-header>
                      <v-col>
                        <div ID="Script-Name">
                          {{item.name}}
                        </div>
                      </v-col>
                      <v-col>
                        <v-btn text medium ID="Script-Up" v-on:click.stop>
                          <v-icon>mdi-arrow-up-bold</v-icon>
                        </v-btn>
                        {{item.up}}
                      </v-col>
                      <v-col>
                        <v-btn text medium ID="Script-Down" v-on:click.stop>
                          <v-icon>mdi-arrow-down-bold</v-icon>
                        </v-btn>
                        {{item.down}}
                      </v-col>
                      <v-col>
                        <v-btn text medium ID="Script-Download" v-on:click.stop>
                          <v-icon>mdi-file-download-outline</v-icon>
                          Download
                        </v-btn>
                      </v-col>
                      </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      {{item.description}}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
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
  import axios from 'axios'
  export default {
    name: 'SectionProChart',

    data() {
      return {
        item: 1 ,
        items: [],
        champions: [{
          "championName":"Annie",
          "role":"Midlane",
          "tier":"A",
          "scriptcount":2
        },{
          "championName":"Twitch",
          "role":"ADC",
          "tier":"S",
          "scriptcount":5
        },
        {
          "championName":"Kog'Maw",
          "role":"ADC",
          "tier":"S+",
          "scriptcount":6
        },
        {
          "championName":"Soraka",
          "role":"Support",
          "tier":"B",
          "scriptcount":3
        }]
      }
    },
    methods:{
      testing: function (event) {
        console.log(event.target.parentNode.parentNode.ariaExpanded)
      }
    },
    created() {
      axios.get(`http://localhost:3600/scripts/all`)
        .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>
