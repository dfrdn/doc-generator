<template>
  <div>
    <v-app-bar app collapse-on-scroll="true">
      <v-toolbar-title class="title mr-6 hidden-sm-and-down"
        >M&F</v-toolbar-title
      >
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Search document type..."
        solo-inverted
      ></v-autocomplete>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar'
})
</script>

<style scoped></style>
