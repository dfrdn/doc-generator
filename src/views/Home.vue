<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col lg="6" sm="10" class="pa-6 ma-2">
          <h1 class="text-h3">Home</h1>
          {{ this.$store.getters.documents }}
          <create-matter />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateMatter from '@/components/CreateMatter.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    CreateMatter
  },
  mounted() {
    this.$store.dispatch('loadDocuments').then(() => {
      console.log(this.$store.getters.documents)
    })
  }
})
</script>

<style scoped></style>
