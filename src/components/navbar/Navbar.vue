<template>
  <v-app-bar color="indigo" dark fixed app>
    <v-toolbar-title>

      <router-link to="/" style="text-decoration: none; color: inherit;">
        <v-btn class="ma-2" tile color="indigo">Currency</v-btn>
      </router-link>
      <router-link  to="/" style="text-decoration: none; color: inherit;">
        <v-btn class="ma-2" tile color="indigo">My List</v-btn>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>

export default {
  components: {
  }

}
</script>
