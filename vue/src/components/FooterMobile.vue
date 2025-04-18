<template>
  <div class="content flex flex-row mt-16 items-center">
    <div class="ml-16">
      <IconLinks :links="SiteInfo.links" size="2x" :text="false" :col="false"/>
    </div>
  </div>
  <div class="content flex flex-row mt-2 mb-8 items-center">
    <p class="flex-grow-0 text-m ml-16">{{ SiteInfo.copyrightStatement }}</p>
    <div class="flex-grow-3"></div>
    <RouterLink class="underline mr-16 text-m" to="/cms">CMS</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetSiteInfo } from '../helpers/getRequests';
import { TSiteInfo } from '../types/routes';
import IconLinks from './IconLinks.vue';

const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});

onBeforeMount(async () => {
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
</style>
