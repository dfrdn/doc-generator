<template>
  <div>
    <v-row class="mt-2">
      <v-col>
        <v-card elevation-12>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Form Preview</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-jsf
                v-model="documentFields"
                :schema="schema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VJsf from '@koumoul/vjsf'
import '@koumoul/vjsf/dist/main.css'
import { mapGetters, mapActions } from 'vuex'

const options = {}

export default Vue.extend({
  name: 'FormPreview',
  components: {
    VJsf
  },
  data: () => {
    return {
      options,
      valid: false
    }
  },
  computed: {
    ...mapGetters(['documentURL', 'documentType', 'documentFields', 'schema'])
  }
})
</script>

<style scoped></style>
