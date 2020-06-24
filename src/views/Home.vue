<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col>
          <Form />
        </v-col>
      </v-row>
    </v-container>
    <GenerateButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GenerateButton from '@/components/GenerateButton.vue'
import Form from '@/components/Form.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    GenerateButton,
    Form
  }
})
</script>

<style scoped></style>
