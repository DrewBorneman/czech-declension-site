<template>
  <TwoColumnTemplate>
    <template v-slot:left>
      <div class="flex flex-col items-end">
        <img :src="HomeData.imagePath" class="max-w-xs mb-8" />
        <h2 class="text-2xl font-bold">{{ SiteInfo.name }}</h2>
        <h3 class="text-basis text-slate-500">{{ HomeData.tagline }}</h3>
        <IconLinks :links="SiteInfo.links" :big="false"/>
      </div>
    </template>
    <template v-slot:right>
      <slot></slot>
    </template>
  </TwoColumnTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetHomeData, GetSiteInfo } from './../helpers/homeRequests';
import { THomeRouteInfo, TSiteInfo } from '../types/routes';
import IconLinks from '../components/IconLinks.vue';
import TwoColumnTemplate from './TwoColumnTemplate.vue';

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
