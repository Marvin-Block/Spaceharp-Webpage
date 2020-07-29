<template>
  <base-section
    id="features"
  >
    <!-- <base-section-heading
      color="accent"
      style="color:white"
      icon="mdi-format-list-bulleted"
      title="About our Product"
    /> -->
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
              dark
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
          text: 'Spacesharp is optimized for ranged characters, such as Kog\'maw, Twitch or Vayne, nonethless we still support all champions and will do so in the future.',
        },
        {
          icon: 'mdi-code-not-equal-variant',
          title: 'User Scripts',
          text: 'Enjoy user-made scripts that will execute automatic combos for you in in less than a second. The amount of scripts grows per day, they range from utility, to champions (Auto Zhonyas, Lucian Full-Combo, etc.)',
        },
        {
          icon: 'mdi-clock-fast',
          title: 'Fast Support',
          text: 'Join our Discord and create a ticket if you have any issues or questions. Our motivated and friendly team is waiting for you. You can also join to be a part of our community. Everyone is welcome.',
        },
        {
          icon: 'mdi-baby',
          title: 'Easy to use',
          text: 'Spacesharp is Easy-to-Use and lets you kite like you never did before. Best used to kite away from enemies and to get them sweet penta kills.',
        },
        {
          icon: 'mdi-crosshairs-question',
          title: 'Undetected',
          text: 'The Detection rate of spacesharp has a chance 0% since we are not injecting or manipulating any files, processes or memory that is used by League of Legends.',
        },
        {
          icon: 'mdi-lock',
          title: 'Fully External',
          text: 'Our tool will not interact with the files, processes or memory from League of Legends therefore you can enjoy a risk free experience.',
        },
      ],
    }),
  }
</script>
