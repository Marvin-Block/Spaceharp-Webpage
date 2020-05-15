<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-5.jpg')"
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
          <base-heading title="OUR LEAGUE OF LEGENDS ORBWALKER WITH ENEMY DETECTION" />

          <base-body>
            SpaceSharp is our newest League of Legends script, which was made public on 28.04.2020. There are providers who are private, but charge double or triple price a month for it! We have decided to make this software public available.
            In addition to the SpaceGlider features, SpaceSharp offers the ability to attack champions only. This means no more Minions will be attacked like with SpaceGlider!
            Furthermore, the configuration of SpaceSharp is much easier!
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
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
