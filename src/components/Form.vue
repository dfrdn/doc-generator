<template>
  <div>
    <v-container>
      <p>valid={{ valid }}</p>
      <v-form ref="form" v-model="valid">
        <v-jsf v-model="model" :schema="schema" :options="options" />
      </v-form>
      <v-layout row class="mt-2">
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$refs.form.validate()">Validate</v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VJsf from '@koumoul/vjsf'

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
  name: 'Form',
  data() {
    return {
      model,
      schema,
      options,
      valid: null
    }
  },
  components: {
    VJsf
  }
})
</script>

<style scoped></style>
