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
      <div class="bg-neutral-100 pt-8 pb-12">
        <slot></slot>
      </div>
    </template>
  </TwoColumnTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetHomeData, GetSiteInfo } from './../helpers/getRequests';
import { THomeRouteInfo, TSiteInfo } from '../types/routes';
import IconLinks from '../components/IconLinks.vue';
import TwoColumnTemplate from './TwoColumnTemplate.vue';

const HomeData = ref<THomeRouteInfo>(<THomeRouteInfo>{});
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});

onBeforeMount(async () => {
  console.log("getting home data - from MainTemplate");
  HomeData.value = await GetHomeData();
  SiteInfo.value = await GetSiteInfo();
})
</script>
