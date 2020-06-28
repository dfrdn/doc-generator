<template>
  <div>
    <h1 class="mb-10 font-weight-light text-center">
      {{ documentType }}
    </h1>
    <v-form ref="form" v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options" />
      <GenerateButton />
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VJsf from '@koumoul/vjsf'
import '@koumoul/vjsf/dist/main.css'
import schema from '@/schema/employmentContract.json'
import GenerateButton from '@/components/GenerateButton.vue'
import { mapGetters } from 'vuex'

const model = {}
const options = {}

export default Vue.extend({
  name: 'Form',
  components: {
    VJsf,
    GenerateButton
  },
  data: () => {
    return {
      model,
      schema,
      options,
      valid: null
    }
  },
  computed: {
    ...mapGetters(['documentType'])
  }
})
</script>

<style scoped></style>
