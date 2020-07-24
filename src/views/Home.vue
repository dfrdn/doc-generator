<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col lg="6" sm="10" class="pa-6 ma-2">
          <h1 class="text-h3">Home</h1>
          <upload-template></upload-template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UploadTemplate from '@/components/UploadTemplate.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    UploadTemplate
  }
})
</script>

<style scoped></style>
