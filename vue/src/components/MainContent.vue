<template>
  <div class="content">
    <div class="flex flex-row space-x-12 mt-36">
      <div class="flex-grow flex-shrink-0"></div>
      <div class="flex-grow flex-shrink flex-basis-fourth flex flex-col items-end">
        <img :src="HomeData.imagePath" class="max-w-xs mb-8" />
        <h2 class="text-2xl font-bold">{{ SiteInfo.name }}</h2>
        <h3 class="text-basis text-slate-500">{{ HomeData.tagline }}</h3>
        <IconLinks :links="SiteInfo.links"/>
        
      </div>
      <div class="flex-grow flex-shrink flex-basis-half flex flex-col items-center pt-8 space-y-2 bg-neutral-100 pb-12">
        <h1 class="text-5xl font-bold">{{ HomeData.title  }}</h1>
        <h2 class="text-2xl text-slate-500">{{ HomeData.subtitle  }}</h2>
        <p class="pt-4 w-1/2">{{ HomeData.text  }}</p>
      </div>
      <div class="flex-grow flex-shrink-0"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetHomeData, GetSiteInfo } from './../helpers/homeRequests';
//import { GetHomeData } from 'helpers/homeRequests';
import { THomeRouteInfo, TSiteInfo } from '../types/routes';
import IconLinks from './IconLinks.vue';

// export default defineComponent({
//   name: 'Content',
//   props: {
//     msg: String
//   }
// });

const HomeData = ref<THomeRouteInfo>(<THomeRouteInfo>{});
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});

onBeforeMount(async () => {
  HomeData.value = await GetHomeData();
  SiteInfo.value = await GetSiteInfo();
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
