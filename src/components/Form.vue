<template>
  <div>
    <h1 class="mb-10 font-weight-light text-center">
      {{ documentType }}
    </h1>
    <v-form ref="form" v-model="valid">
      <v-jsf v-model="documentFields" :schema="schema" :options="options" />
      <GenerateButton :valid="valid" />
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VJsf from '@koumoul/vjsf'
import '@koumoul/vjsf/dist/main.css'
import schema from '@/schema/employmentContract.json'
import GenerateButton from '@/components/GenerateButton.vue'
import { mapGetters, mapActions } from 'vuex'

const options = {}

export default Vue.extend({
  name: 'Form',
  components: {
    VJsf,
    GenerateButton
  },
  data: () => {
    return {
      schema,
      options,
      valid: false
    }
  },
  computed: {
    ...mapGetters(['documentType', 'documentFields']),
    documentFields: {
      get() {
        return this.$store.getters.documentFields
      },
      set(val) {
        this.$store.dispatch('setDocumentFields', val)
      }
    }
  }
})
</script>

<style scoped></style>
