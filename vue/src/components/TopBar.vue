<template>
  <div class="content flex flex-row space-x-8 mt-2 items-center">
    <div class="flex-grow-2"></div>
    <img :src="SiteInfo.iconPath" class="w-11 h-11 mr-4 ml-12 mt-1" />
    <h3 class="text-2xl font-bold">{{ SiteInfo.name }}</h3>
    <div class="flex-grow-3"></div>
    <div class="flex flex-row space-x-8 mt-2 items-center text-lg pr-24">
      <RouterLink to="/">About Me</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="flex-grow"></div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetSiteInfo } from './../helpers/getRequests';
import { TSiteInfo } from '../types/routes';
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});

onBeforeMount(async () => {
  SiteInfo.value = await GetSiteInfo();
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grow-2 {
  flex-grow: 2;
}
.flex-grow-3 {
  flex-grow: 3;
}
</style>
