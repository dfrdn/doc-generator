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

db.collection('documentTypes')
  .get()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .then((q: any) => {
    console.log(q)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    q.forEach((doc: any) => {
      console.log(doc.data().name)
    })
  })

export default Vue.extend({
  name: 'NavBar',
  data: () => ({
    loading: false,
    items: [],
    model: null,
    search: null
  }),
  watch: {
    search(val) {
      if (this.items.length > 0) return
      this.loading = true

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      db.collection('documentTypes')
        .get()
        .then((q: any) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.items = q.docs.map((doc: any) => doc.data().name)
        })
        .finally(() => (this.loading = false))
    }
  }
})
</script>

<style scoped></style>
