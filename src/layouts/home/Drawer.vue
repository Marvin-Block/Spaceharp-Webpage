<template>
  <v-navigation-drawer
    dark
    fixed
    right
    overlay-color="rgba(0,0,0,0.8)"
    overlay-opacity=".3"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="transparent"
      shaped
    >
      <v-list-item
        v-for="([name, icon],i) in items"
        :key="i"
        :to="{ name }"
        :exact="name === 'Home'"
        color="white"
      >
        <v-list-item-icon>
          <v-icon>
            {{ icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
