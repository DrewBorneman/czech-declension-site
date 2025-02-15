<template>
  <MainTemplate>
    <div class = "flex flex-col pl-24">
      <h1 class="text-5xl font-bold mb-2">{{ HomeData.title  }}</h1>
      <h2 class="text-2xl text-slate-500">{{ HomeData.subtitle  }}</h2>
      <div class="pt-4 w-3/4 text-xl" v-html="HomeData.text"></div>
    </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetHomeData } from './../helpers/getRequests';
import { THomeRouteInfo } from '../types/routes';
import MainTemplate from '../components/MainTemplate.vue';

const HomeData = ref<THomeRouteInfo>(<THomeRouteInfo>{});

onBeforeMount(async () => {
  HomeData.value = await GetHomeData();
})
</script>
