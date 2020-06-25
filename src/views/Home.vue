<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="6" class="pa-6 ma-2">
          <Form />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '@/components/Form.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Form
  }
})
</script>

<style scoped></style>
