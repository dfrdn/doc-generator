<template>
  <div>
    <v-layout row class="mt-2">
      <v-spacer></v-spacer>
      <v-btn class="ma-2" @click="renderDoc" :disabled="!valid">
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
import expressions from 'angular-expressions'
import merge from 'lodash/merge'
import { storage } from '@/firebaseInit'
import { mapGetters } from 'vuex'
import { angularParser, loadFile, getTags } from '@/templateLoader'

export default Vue.extend({
  name: 'GenerateButton',
  props: {
    valid: Boolean
  },
  computed: {
    ...mapGetters(['documentURL', 'documentFields'])
  },
  methods: {
    renderDoc() {
      const URL: string = this.documentURL
      const storageRef = storage.ref(URL)
      let doc

      const onError = (e: Error) => {
        throw e
      }

      const onSuccess = (c: string) => {
        const zip = new PizZip(c)
        doc = new Docxtemplater(zip, { parser: angularParser })
        doc.setData(this.documentFields)
        try {
          doc.render()
        } catch (error) {
          //   key: Error | string,
          //   value: Error | string
          // ) => {
          //   if (value instanceof Error) {
          //     return Object.getOwnPropertyNames(value).reduce((error, key) => {
          //       error[key] = value[key]
          //       return error
          //     }, {})
          //   }
          //   return value
          // }
          // console.log(JSON.stringify({ error: error }, replaceErrors))
        }
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }) //Output the document using Data-URI
        const documentTitle =
          this.documentFields['employeeName'] +
          ' - ' +
          this.documentFields['employerName'] +
          ' | Employment Agreement.docx'
        saveAs(out, documentTitle)
      }

      storageRef
        .getDownloadURL()
        .then((url: string) => loadFile(url, onSuccess, onError))
    }
  }
})
</script>

<style scoped></style>
