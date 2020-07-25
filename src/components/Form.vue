<template>
  <div>
    <v-row class="mt-2">
      <v-col>
        <h1 class="mb-10 font-weight-light text-center">
          {{ documentType }}
        </h1>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-jsf
              v-model="documentFields"
              :schema="schema"
              :options="options"
            />
          </v-row>
        </v-form>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" @click="renderDoc" :disabled="!valid">
          <v-icon>mdi-send</v-icon>Generate
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VJsf from '@koumoul/vjsf'
import '@koumoul/vjsf/dist/main.css'
import schema from '@/schema/employmentContract.json'
import { mapGetters, mapActions } from 'vuex'
import { angularParser, loadFile } from '@/templateLoader'
import InspectModule from 'docxtemplater/js/inspect-module.js'
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import { saveAs } from 'file-saver'
import { storage } from '@/firebaseInit'

const options = {}

export default Vue.extend({
  name: 'Form',
  components: {
    VJsf
  },
  data: () => {
    return {
      schema,
      options,
      valid: false
    }
  },
  computed: {
    ...mapGetters(['documentURL', 'documentType', 'documentFields']),
    documentFields: {
      get() {
        return this.$store.getters.documentFields
      },
      set(val) {
        this.$store.dispatch('setDocumentFields', val)
      }
    }
  },
  methods: {
    renderDoc() {
      const URL: string = this.documentURL
      const storageRef = storage.ref(URL)
      let doc

      storageRef.getDownloadURL().then((url: string) =>
        loadFile(
          url,
          (c: string) => {
            const zip = new PizZip(c)
            const inspector = InspectModule()
            doc = new Docxtemplater(zip, {
              parser: angularParser,
              modules: [inspector]
            })
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
              this.$store.getters.documentFields['employeeName'] +
              ' - ' +
              this.$store.getters.documentFields['employerName'] +
              ' | Employment Agreement.docx'
            saveAs(out, documentTitle)
          },
          (e: Error) => {
            throw e
          }
        )
      )
    }
  }
})
</script>

<style scoped></style>
