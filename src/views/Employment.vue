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

const model = {
  stringProp: 'initial value',
  numberProp: 10.1,
  integerProp: 10,
  booleanProp: true,
  stringArrayProp: ['item 1', 'item 2']
}
import employment from '@/schema/employmentContract.json'
const options = {}
const schema = employment

export default Vue.extend({
  name: 'Employment',
  data: () => {
    return {
      model,
      options,
      schema,
      valid: null
    }
  },
  components: {
    VJsf
  }
})
</script>

<style scoped></style>
