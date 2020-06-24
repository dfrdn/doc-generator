<template>
  <div>
    <v-layout row class="mt-2">
      <v-spacer></v-spacer>
      <v-btn class="ma-2" @click="renderDoc">
        <v-icon left>mdi-send</v-icon>Generate
      </v-btn>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import PizZipUtils from 'pizzip/utils/index.js'
import { saveAs } from 'file-saver'

function loadFile(url: string, callback: (e: Error, c: string) => void) {
  PizZipUtils.getBinaryContent(url, callback)
}

export default Vue.extend({
  name: 'GenerateButton',
  methods: {
    renderDoc() {
      loadFile('https://docxtemplater.com/tag-example.docx', function(
        error: Error,
        content
      ) {
        if (error) {
          throw error
        }
        const zip = new PizZip(content)
        const doc = new Docxtemplater().loadZip(zip)
        doc.setData({})
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        } catch (error) {
          // Handle error
        }
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }) //Output the document using Data-URI
        saveAs(out, 'output.docx')
      })
    }
  }
})
</script>

<style scoped></style>
