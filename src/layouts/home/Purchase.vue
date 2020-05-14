<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    left
    bottom
    max-width="90%"
    min-width="275"
    offset-x
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-card
        id="purchase"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        style="position: fixed; top: 164px; right: -35px;"
        width="100"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon large>
          mdi-cart
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <base-title
        align="center"
        title="Purchase"
        space="0"
      />

      <v-card-text>
        <v-item-group
          v-model="$vuetify.theme.themes.light.primary"
          class="d-flex justify-center"
        >
          <v-item>
            <div class="text-center">
              <base-btn
                :tile="false"
                href="https://shoppy.gg/product/fEQCwAo"
                target="_blank"
                class="ma-2"
                size="48"
                style="cursor: pointer;"
                rounded
                @click="menu = false"
              >
                24 Hours <br>
                4.50€
              </base-btn>
            </div>
          </v-item>
          <v-item>
            <div class="text-center">
              <base-btn
                :tile="false"
                href="https://shoppy.gg/product/9fQPJjT"
                target="_blank"
                class="ma-2"
                size="48"
                style="cursor: pointer;"
                rounded
                @click="menu = false"
              >
                7 Days <br>
                14.99€
              </base-btn>
            </div>
          </v-item>
          <v-item>
            <div class="text-center">
              <base-btn
                :tile="false"
                href="https://shoppy.gg/product/AJkk1Rl"
                target="_blank"
                class="ma-2"
                size="48"
                style="cursor: pointer;"
                rounded
                @click="menu = false"
              >
                30 Days <br>
                39.99€
              </base-btn>
            </div>
          </v-item>
        </v-item-group>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
  export default {
    name: 'HomePurchase',

    data () {
      return {
        colors: [
          this.$vuetify.theme.themes.light.primary,
          '#9368e9',
          '#F4511E',
        ],
        menu: false,
      }
    },
  }
</script>
