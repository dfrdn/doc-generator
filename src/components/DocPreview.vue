<template>
  <div>
    <VueDocPreview
      value="@/components/employmentAgreement.docx"
      type="office"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueDocPreview from 'vue-doc-preview'

export default Vue.extend({
  name: 'DocPreview',
  components: {
    VueDocPreview
  }
})
</script>

<style scoped></style>
