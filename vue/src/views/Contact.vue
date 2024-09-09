<template>
  <MainTemplate>
      <div class = "flex flex-col pl-36">
        <h1 class="text-5xl font-bold mb-2">{{ ContactData.title  }}</h1>
        <h2 class="text-2xl text-slate-500 mb-4">{{ ContactData.subtitle  }}</h2>
        <p class="pt-4 text-xl">Please send any inquiries to my email at <span class="font-bold">{{ ContactData.email }}</span>.</p>
        <p class="pt-8 text-xl">You can also find me on the following platforms:</p>
        <IconLinks :links="SiteInfo.links" :big="true" class="ml-6"/>
      </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { getContactData, GetSiteInfo } from './../helpers/homeRequests';
//import { GetHomeData } from 'helpers/homeRequests';
import { TContactRouteInfo, TSiteInfo } from '../types/routes';
import IconLinks from '../components/IconLinks.vue';
import MainTemplate from '../components/MainTemplate.vue';

// export default defineComponent({
//   name: 'Content',
//   props: {
//     msg: String
//   }
// });

const ContactData = ref<TContactRouteInfo>(<TContactRouteInfo>{});
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});

onBeforeMount(async () => {
  ContactData.value = await getContactData();
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
