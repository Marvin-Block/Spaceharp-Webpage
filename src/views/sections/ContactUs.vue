<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="secondary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="STILL NOT CONVINCED ? JOIN US NOW!"
            />

            <base-body space="0">
              <span class="white--text">
                If you have any problems or questions you can always join our Discord server and ask our team for help.<br>
                They'll be glad to assist you.
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              href="https://discord.com/invite/9AQv2pF"
              large
              outlined
              target="_blank"
            >
              Join our Discord
              <v-icon right>
                mdi-discord
              </v-icon>
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionContactUs',
  }
</script>
