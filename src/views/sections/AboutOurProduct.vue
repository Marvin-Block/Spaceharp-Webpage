<template>
  <base-section
    id="about-our-product"
  >
    <v-container>
      <v-row>
        <v-col>
          <iframe
            width="700"
            height="493"
            src="https://www.youtube.com/embed/ogWn0pky9uc?autoplay=1&controls=1&disablekb=1&fs=1&rel=0&showinfo=0&modestbranding=1&mute=1&iv_load_policy=3"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="pointer-event:none"
          />
        </v-col>
        <v-col>
          <v-row
            v-for="card in cards"
            :key="card.title"
          >
            <base-info-card
              v-bind="card"
              style="background:rgba(255,255,255,0.2);"
            />
          </v-row>
          <!-- <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >  -->
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [
        {
          title: 'Kite like a legend',
          text: 'Using Spacesharp will turn you into a Kiting Legend. You\'ll be able to kite like Gosu or RatIRL.',
          callout: '01',
        },
        {
          title: 'Focus on your game',
          text: 'With our Tool you\'ll have more time to think about the Important things.',
          callout: '02',
        },
        {
          title: 'Stomp your enemies',
          text: 'You will finally be able to win your games and own your oponents. Get those sweet Quadra and Penta kills, or just simply SPIT ON THEM',
          callout: '03',
        },
      ],
    }),
  }
</script>
