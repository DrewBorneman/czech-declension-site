<template>
  <div class="content flex flex-row space-x-8 mt-2 items-center">
    <div class="flex-grow-2 flex-shrink-0"></div>
    <img :src="SiteInfo.iconPath" class="flex-grow-0 flex-shrink-0 max-w-24 mr-4 ml-12" />
    <h3 class="flex-grow-0 flex-shrink-0 text-2xl font-bold">{{ SiteInfo.name }}</h3>
    <div class="flex-grow-3 flex-shrink-0"></div>
    <div class="flex flex-row space-x-8 mt-2 items-center pr-24">
      <RouterLink to="/">About Me</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="flex-grow flex-shrink-0"></div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetSiteInfo } from './../helpers/homeRequests';
//import { GetHomeData } from 'helpers/homeRequests';
import { TSiteInfo } from '../types/routes';
//import { SocialMediaLink } from '@/../../types/components';

// export default defineComponent({
//   name: 'Content',
//   props: {
//     msg: String
//   }
// });

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
.flex-shrink-2 {
  flex-shrink: 2;
}
.flex-grow-3 {
  flex-grow: 3;
}
.flex-shrink-3 {
  flex-shrink: 3;
}
.flex-basis-fourth {
  flex-basis: 0%;
}

.flex-basis-half {
  flex-basis: 25%;
}
</style>
