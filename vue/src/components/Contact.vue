<template>
  <div class="contact">
    <div class="flex flex-row space-x-12 mt-36">    
        <h1>CONTACT</h1>   
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
