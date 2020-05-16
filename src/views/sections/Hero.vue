<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-1.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .6), rgba(5, 11, 31, .6)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
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
            <li><strong>Minion Hit Marker</strong> (which will be Auto Last Hit in the Future)</li>
          </ul>
          </base-body>

          <!-- <base-body>
            SpaceSharp is our newest League of Legends script, which was made public on 28.04.2020. There are providers who are private, but charge double or triple price a month for it! We have decided to make this software public available.
            In addition to the SpaceGlider features, SpaceSharp offers the ability to attack champions only. This means no more Minions will be attacked like with SpaceGlider!
            Furthermore, the configuration of SpaceSharp is much easier!
          </base-body> -->
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
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
