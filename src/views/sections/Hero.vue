<template>
  <section id="hero">
    <v-img
      :src="require('@/assets/Hero.png')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .6), rgba(5, 11, 31, .6)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          :height="height"
          max-width="700"
          width="100%"
        >
          <base-heading title="WELCOME TO SPACESHARP" />

          <base-body>
            Spacesharp is a premium kiting Script that will help you <strong>Rank Up</strong> and gain <strong>LP</strong>. We first went public on 28.04.2020 and have been <strong>Undetected</strong> ever since. In terms of cost and value we're top of the line.<br>
            We offer you one of the best external scripting platforms currently availiable for a fair price. Spacesharp comes with a few features, such as:

            <ul>
              <li><strong>Attack Champions Only</strong></li>
              <li><strong>Stream Proof Attackrange Indicator</strong></li>
              <li><strong>Auto Combo</strong> in the form of User Scripts</li>
              <li><strong>Auto Heal / Barrier</strong></li>
              <li><strong>Minion Hit Marker</strong> (which will be Auto Last Hit in the Future)</li>
            </ul>
            <br>
            <p><I>If you're still not convinced, you can Join our Discord Server, open a ticket to request a Trial.</I></p>
          </base-body>
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <!-- <base-btn>
              Discover More
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Get Started Now
            </base-btn> -->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
    <!-- <v-img
        :min-height="minHeight"
        :src="require('@/assets/home-hero.jpg')"
        class="white--text"
        gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
      > -->
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      height () {
        const height = this.$vuetify.breakpoint.xs ? '' : '100%'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },

    // mounted () {
    //   const apidata = []
    //   axios.get('http://localhost:3600/champions/all')
    //     .then(response => {
    //       // JSON responses are automatically parsed.
    //       apidata[0] = response.data
    //       // this.$store.dispatch('changeChamps', response.data)
    //       // this.champions = response.data
    //     })
    //     .catch(e => {
    //       console.log(e)
    //     })
    //   axios.get('http://localhost:3600/scripts/all')
    //     .then(response => {
    //       // JSON responses are automatically parsed.
    //       apidata[1] = response.data
    //       // this.$store.dispatch('changeScripts', response.data)
    //     })
    //     .catch(e => {
    //       console.log(e)
    //     })
    //   this.$store.dispatch('filteredChamps', apidata)
    // },
  }
</script>
