<template>
  <MainTemplate>
    <div :class = "'flex flex-col ' + mobile ? 'pl-8 pr-8' : 'pl-24'">
      <h1 class="text-5xl font-bold mb-2">{{ HomeData.title  }}</h1>
      <h2 class="text-2xl text-slate-500">{{ HomeData.subtitle  }}</h2>
    <div v-if="mobile" class="mt-16">
        <img src="../../../files/me.jpg" class="portrait-mobile" />
    </div>
      <div class="pt-4 text-xl" v-html="HomeData.text"></div>
    </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount, inject } from 'vue';
import { ref } from '@vue/reactivity';
import { GetHomeData, GetSiteInfo } from './../helpers/getRequests';
import { THomeRouteInfo, TSiteInfo } from '../types/routes';
import MainTemplate from '../components/MainTemplate.vue';

const mobile = inject('mobile');

const HomeData = ref<THomeRouteInfo>(<THomeRouteInfo>{});
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});

onBeforeMount(async () => {
  HomeData.value = await GetHomeData();
  SiteInfo.value = await GetSiteInfo();
})
</script>

<style lang="css" scoped>
  .portrait-mobile {
    width: 16rem;
    max-width: 80%;
    margin-bottom: 2rem;
  }
</style>
