<template>
  <MainTemplate>
      <div class = "flex flex-col pl-36">
        <h1 class="text-5xl font-bold mb-2">{{ HomeData.title  }}</h1>
        <h2 class="text-2xl text-slate-500">{{ HomeData.subtitle  }}</h2>
        <p class="pt-4 w-3/4 text-xl">{{ HomeData.text  }}</p>
      </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { GetHomeData } from './../helpers/homeRequests';
//import { GetHomeData } from 'helpers/homeRequests';
import { THomeRouteInfo } from '../types/routes';
import MainTemplate from '../components/MainTemplate.vue';

// export default defineComponent({
//   name: 'Content',
//   props: {
//     msg: String
//   }
// });

const HomeData = ref<THomeRouteInfo>(<THomeRouteInfo>{});

onBeforeMount(async () => {
  HomeData.value = await GetHomeData();
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
