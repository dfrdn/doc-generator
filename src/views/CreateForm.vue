<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <upload-template />
          <form-preview />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UploadTemplate from '@/components/UploadTemplate.vue'
import FormPreview from '@/components/FormPreview.vue'

export default Vue.extend({
  name: 'CreateForm',
  components: { UploadTemplate, FormPreview }
})
</script>

<style scoped></style>
