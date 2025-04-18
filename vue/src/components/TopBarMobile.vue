<template>
  <div class="content flex flex-row space-x-8 mt-2 items-center">
    <img :src="SiteInfo.iconPath" class="w-11 h-11 mr-4 ml-12 mt-1" />
    <!-- <img :src="SiteInfo.iconPath" class="w-11 h-11 mr-4 ml-12 mt-1" /> -->
    <!-- <h3 class="text-2xl font-bold">{{ SiteInfo.name }}</h3> -->
    <h3 class="text-2xl font-bold">MOBILE</h3>
    <div class="flex-grow-3"></div>
    <div class="flex flex-row space-x-8 mt-2 items-center text-lg pr-12">    
    <v-menu
      transition="slide-x-reverse-transition"
      v-model="menu"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon
        >
        <font-awesome-icon class="" :icon="IconType.bars" :size="'2x'"></font-awesome-icon>
        </v-btn>
      </template>

      <v-list class="no-scroll-list">
        <v-list-item class = "pl-8 pr-8 font-bold">
          <RouterLink to="/"><v-list-item-title>About Me</v-list-item-title> </RouterLink>
        </v-list-item>
        <v-list-item class = "pl-8 pr-8 font-bold">
          <RouterLink to="/resume"><v-list-item-title>Resume</v-list-item-title></RouterLink>
        </v-list-item>
        <v-list-item class = "pl-8 pr-8 font-bold">
          <RouterLink to="/projects"><v-list-item-title>Projects</v-list-item-title></RouterLink>
        </v-list-item>
        <v-list-item class = "pl-8 pr-8 font-bold">
          <RouterLink to="/contact"><v-list-item-title>Contact</v-list-item-title></RouterLink>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconType } from "../types/enums";
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetSiteInfo } from './../helpers/getRequests';
import { TSiteInfo } from '../types/routes';
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});
  
const menu = ref(false)

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
.no-scroll-list {
  max-height: none;
  overflow: visible;
}
.no-scroll-list {
  max-height: none;
  overflow: visible;
}
</style>
