<template>
  <div>
    <v-app-bar app>
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
        solo
      ></v-autocomplete>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { db } from '@/firebaseInit'

export default Vue.extend({
  name: 'NavBar',
  data: () => ({
    loading: false,
    items: new Array<string>(),
    model: null,
    search: null
  }),
  watch: {
    search(val) {
      if (this.items.length > 0) return
      this.loading = true

      db.collection('documentTypes')
        .get()
        .then((q: firebase.firestore.QuerySnapshot) => {
          this.items = q.docs.map(
            (doc: firebase.firestore.DocumentSnapshot) => doc.data()?.name
          )
          console.log(this.items)
        })
        .finally(() => (this.loading = false))
    }
  }
})
</script>

<style scoped></style>
