<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="title mr-6"
        ><v-btn x-large to="/" text>M&F</v-btn></v-toolbar-title
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
        v-if="this.$store.getters.isAuthenticated"
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
        this.$store.dispatch('setDocuments', value)
      }
    },
    select: {
      get() {
        return this.$store.state.document
      },
      set(value) {
        this.$store.dispatch('setDocument', value).then(() => {
          this.$router.push('/docgen/' + this.$store.getters.documentType)
        })
      }
    }
  }
})
</script>

<style scoped></style>
