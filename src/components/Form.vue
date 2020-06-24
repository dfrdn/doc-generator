<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options" />
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VJsf from '@koumoul/vjsf'
import '@koumoul/vjsf/dist/main.css'
import schema from '@/schema/employmentContract.json'

const model = {}
const options = {}

export default Vue.extend({
  name: 'Form',
  components: {
    VJsf
  },
  data() {
    return {
      model,
      schema,
      options,
      valid: null
    }
  }
})
</script>

<style scoped></style>
