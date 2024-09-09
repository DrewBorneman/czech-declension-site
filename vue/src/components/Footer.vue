<template>
  <div class="content flex flex-row mt-2 pb-2 items-center">
    <img :src="SiteInfo.iconPath" class="flex-grow-0 flex-shrink-0 w-8 h-8 ml-4" />
    <p class="flex-grow-0 flex-shrink-0 text-s ml-4">{{ SiteInfo.copyrightStatement }}</p>
    <div class="flex-grow-3 flex-shrink-0"></div>
    <div class="mr-8">
      <IconLinks :links="SiteInfo.links" :big="false"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetSiteInfo } from '../helpers/homeRequests';
//import { GetHomeData } from 'helpers/homeRequests';
import { TSiteInfo } from '../types/routes';
import IconLinks from './IconLinks.vue';

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
