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
const options = {}
const schema = {
  type: 'object',
  properties: {
    stringProp: {
      type: 'string',
      title: "I'm a string",
      description: 'This description is used as a help message.'
    },
    stringTextareaProp: {
      type: 'string',
      title: "I'm a string in a textarea",
      'x-display': 'textarea'
    },
    numberProp: {
      type: 'number',
      title: "I'm a number"
    },
    integerProp: {
      type: 'integer',
      title: "I'm an integer"
    },
    integerSliderProp: {
      type: 'integer',
      title: "I'm an integer in a slider",
      'x-display': 'slider',
      minimum: 0,
      maximum: 5
    },
    booleanProp: {
      type: 'boolean',
      title: "I'm a boolean"
    },
    stringArrayProp: {
      type: 'array',
      title: "I'm an array of strings",
      items: {
        type: 'string'
      }
    },
    integerArrayProp: {
      type: 'array',
      title: "I'm an array of integers",
      items: {
        type: 'integer'
      }
    }
  }
}

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
