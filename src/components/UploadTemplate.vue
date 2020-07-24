<template>
  <div>
    <v-file-input @change="onFilePicked" label="Upload Template"></v-file-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { loadFile } from '@/templateLoader'

export default Vue.extend({
  name: 'UploadTemplate',
  data: () => {
    return {
      currentFile: undefined,
      progress: 0,
      message: ''
    }
  },
  methods: {
    onFilePicked(file: File[]) {
      const reader = new FileReader()
      reader.readAsBinaryString(file)
      reader.onload = () => {
        console.log(reader.result)
      }
    }
  }
})
</script>

<style scoped>
</style>