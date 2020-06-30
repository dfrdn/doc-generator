<template>
  <div>
    <h1 class="mb-10 text-h2 text-center">
      New Matter
    </h1>
    <v-form ref="form" v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options"> </v-jsf>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VJsf from '@koumoul/vjsf'
import '@koumoul/vjsf/dist/main.css'

const model = {}
const options = {}
const schema = {
  type: 'object',
  properties: {
    subjectMatter: {
      type: 'string',
      title: 'Subject Matter'
    },
    client: {
      type: 'string',
      title: 'Name of Client'
    },
    team: {
      type: 'array',
      title: 'Handling Lawyers',
      items: {
        type: 'string'
      }
    },
    remarks: {
      type: 'string',
      title: 'Remarks',
      'x-display': 'textarea'
    },
    deadlines: {
      type: 'array',
      title: 'Deadlines',
      items: {
        type: 'object',
        properties: {
          task: {
            type: 'string',
            title: 'Task',
            'x-display': 'textarea'
          },
          date: {
            type: 'string',
            title: 'Deadline',
            format: 'date'
          }
        }
      }
    },
    actions: {
      type: 'array',
      title: 'Actions',
      items: {
        type: 'object',
        properties: {
          task: {
            type: 'string',
            title: 'Task',
            'x-display': 'textarea'
          },
          date: {
            type: 'string',
            title: 'Date',
            format: 'date'
          }
        }
      }
    }
  }
}

export default Vue.extend({
  name: 'CreateMatter',
  data: () => {
    return {
      options,
      schema,
      model,
      valid: false
    }
  },
  components: {
    VJsf
  }
})
</script>

<style scoped></style>
