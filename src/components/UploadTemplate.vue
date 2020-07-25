<template>
  <div>
    <v-file-input @change="onFilePicked" label="Upload Template"></v-file-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { angularParser } from '@/templateLoader'
import InspectModule from 'docxtemplater/js/inspect-module.js'
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'

export default Vue.extend({
  name: 'UploadTemplate',
  data: () => {
    return {
      currentFile: undefined,
      progress: 0,
      message: ''
    }
  },
  methods: {
    onFilePicked(file: Blob) {
      const reader = new FileReader()
      reader.readAsBinaryString(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const content = reader.result
          const zip = new PizZip(content)
          const inspector = InspectModule()
          const doc = new Docxtemplater(zip, {
            parser: angularParser,
            modules: [inspector]
          })

          console.log(inspector.getAllTags())
        }
      }
    }
  }
})
</script>

<style scoped>
</style>