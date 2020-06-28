<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="title mr-6 hidden-sm-and-down"
        >M&F</v-toolbar-title
      >
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="documents"
        :search-input.sync="search"
        item-text="name"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        return-object
        label="Search document type..."
        solo
      ></v-autocomplete>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar',
  data: () => ({
    loading: false,
    search: null
  }),
  computed: {
    documents: {
      get() {
        return this.$store.getters.documents
      },
      set(value) {
        console.log('setting documents to: ' + value)
      }
    },
    select: {
      get() {
        return this.$store.state.document
      },
      set(value) {
        console.log(value)
        this.$store.dispatch('setDocument', value).then(() => {
          this.$router.push('/docgen')
        })
      }
    }
  },
  watch: {
    search(val) {
      if (this.$store.state.documents.length > 0) return
      this.loading = this.$store.state.status == 'loading'
      this.$store.dispatch('searchAction')
    }
  }
})
</script>

<style scoped></style>
