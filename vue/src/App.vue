<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="flex flex-col h-screen">
    <TopBar />
    <RouterView class="flex-grow"/>
    <!-- <MainContent class="flex-grow" /> -->
    <Footer />
  </div>
</template>

<script lang="ts">
import MainContent from './components/MainContent.vue'
import TopBar from './components/TopBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    MainContent,
    TopBar,
    Footer
  }
}
</script>

<style>
</style>
