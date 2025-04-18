<template>
  <MainTemplate>
      <div :class = "'flex flex-col ' + mobile ? 'pl-8 pr-8' : 'pl-24'">
        <h1 class="text-5xl font-bold mb-2">{{ ContactData.title  }}</h1>
        <h2 class="text-2xl text-slate-500 mb-4">{{ ContactData.subtitle  }}</h2>
        <div class="pt-4 text-xl" v-html="ContactData.text"></div>
        <IconLinks :links="SiteInfo.links" size="3x" :text="true" :col="true" :class="mobile ? 'mt-8' : 'ml-6'"/>
      </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount, inject } from 'vue';
import { ref } from '@vue/reactivity';
import { getContactData, GetSiteInfo } from './../helpers/getRequests';
import { TContactRouteInfo, TSiteInfo } from '../types/routes';
import IconLinks from '../components/IconLinks.vue';
import MainTemplate from '../components/MainTemplate.vue';


const ContactData = ref<TContactRouteInfo>(<TContactRouteInfo>{});
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});

const mobile = inject('mobile');

onBeforeMount(async () => {
  ContactData.value = await getContactData();
  SiteInfo.value = await GetSiteInfo();
})
</script>
