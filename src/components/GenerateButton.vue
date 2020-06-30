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
import expressions from 'angular-expressions'
import merge from 'lodash/merge'
import { storage } from '@/firebaseInit'
import { mapGetters } from 'vuex'

expressions.filters.lower = (input: string) => {
  if (!input) {
    return input
  }
  return input.toLowerCase()
}

function angularParser(tag: string) {
  if (tag === '.') {
    return {
      get: function(s: string) {
        return s
      }
    }
  }
  const expr = expressions.compile(
    tag.replace(/(’|‘)/g, "'").replace(/(“|”)/g, '"')
  )
  return {
    get: function(
      scope: Record<string, never>,
      context: Record<string, never>
    ) {
      let obj = {}
      const scopeList = context['scopeList']
      const num = context['num']
      for (let i = 0, len = num + 1; i < len; i++) {
        obj = merge(obj, scopeList[i])
      }
      return expr(scope, obj)
    }
  }
}

function loadFile(
  url: string,
  onSuccess: (c: string) => void,
  onError: (e: Error) => void
) {
  PizZipUtils.getBinaryContent(url, (e: Error, c: string) => {
    if (e) {
      console.log(e)
      onError(e)
    }
    onSuccess(c)
  })
}

export default Vue.extend({
  name: 'GenerateButton',
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
