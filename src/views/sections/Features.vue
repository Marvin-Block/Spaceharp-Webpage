<template>
  <base-section
    id="features"
    class="light"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="5"
            md="4"
          >
            <base-info-card
              align="center"
              light
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-account-group',
          title: '140+ Champions',
          text: 'Spacesharp is Optimized for ranged Characters, such as Kog\'maw, Twitch or Vayne, nonethless we still support all Champions and will do so in the Future.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Lethal Tempo',
          text: 'Utilize High Attackspeed above 2.50 FULLY with the use of Spacesharp. Our Tool is best used in combinations with Supporters, such as Lulu.',
        },
        {
          icon: 'mdi-clock-fast',
          title: 'Fast Support',
          text: 'Join our Discord and Create a Ticket if you have any Issues or questions. Our motivated and friendly Team is waiting for you. You can also Join to be a part of our community. Everyone is welcome.',
        },
        {
          icon: 'mdi-baby',
          title: 'Easy to use',
          text: 'Spacesharp is Easy-to-Use and lets you kite like you never did before. Best Used to kite away from enemies and to get them sweet penta kills.',
        },
        {
          icon: 'mdi-crosshairs-question',
          title: 'Undetected',
          text: 'Spacesharp is Easy-to-Use and lets you kite like you never did before. Best Used to kite away from enemies and to get them sweet penta kills.',
        },
        {
          icon: 'mdi-lock',
          title: 'Fully External',
          text: 'Spacesharp is Easy-to-Use and lets you kite like you never did before. Best Used to kite away from enemies and to get them sweet penta kills.',
        },
      ],
    }),
  }
</script>
