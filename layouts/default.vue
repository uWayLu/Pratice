<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile
          router
          exact
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Hardcode 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile >
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Hardcode 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-html="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <main><nuxt /></main>
          </v-layout>
        </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    fixed: true,
    items: [
      { icon: "home", title: "Welcome", to: "/" },
      { icon: "info", title: "About", to: "/about" },
      { icon: "person", title: "Admin", to: "/admin" }
    ],
    title: "Practice with Nuxt"
  }),
  props: {
    source: String
  }
};
</script>