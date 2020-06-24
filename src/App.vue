<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <Form />
          </v-col>
        </v-row>
      </v-container>
      <GenerateButton />
    </v-main>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import GenerateButton from '@/components/GenerateButton.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    GenerateButton,
    Form
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
