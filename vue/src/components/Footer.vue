<template>
  <div class="content flex flex-row mt-2 pb-2 items-center">
    <img :src="SiteInfo.iconPath" class="flex-grow-0 w-8 h-8 ml-4" />
    <p class="flex-grow-0 text-s ml-4">{{ SiteInfo.copyrightStatement }} · <RouterLink class="underline" to="/cms">CMS</RouterLink></p>
    <div class="flex-grow-3"></div>
    <div class="mr-8">
      <IconLinks :links="SiteInfo.links" :big="false"/>
    </div>
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
