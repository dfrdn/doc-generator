<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col lg="6" sm="10" class="pa-6 ma-2">
          <h1>Home</h1>
          <doc-preview />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DocPreview from '@/components/DocPreview.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    DocPreview
  }
})
</script>

<style scoped></style>
