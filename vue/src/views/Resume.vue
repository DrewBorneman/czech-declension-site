<template>
  <MainTemplate>
      <div class = "flex flex-col pl-36">
        <h1 class="text-5xl font-bold mb-2">{{ ResumeData.title }}</h1>
        <p class="pt-4 text-xl">{{ ResumeData.text }}</p>
        <div class="content flex flex-col space-y-6 mt-8 ml-6 items-start">
          <div v-if="ResumeData.pdfPath">
            <a :href="ResumeData.pdfPath" alt="Resume PDF Download" class="flex items-center" download>
              <font-awesome-icon class="" :icon="IconType.PDF" size="3x"></font-awesome-icon>
              <span class="ml-4 text-xl font-bold">PDF</span>
            </a>
          </div>
          <div v-if="ResumeData.docxPath">
            <a :href="ResumeData.docxPath" alt="Resume DOCX Download" class="flex items-center" download>
              <font-awesome-icon class="" :icon="IconType.DOCX" size="3x"></font-awesome-icon>
              <span class="ml-6 text-xl font-bold">DOCX</span>
            </a>
          </div>
        </div>
      </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { getResumeData } from './../helpers/homeRequests';
//import { GetHomeData } from 'helpers/homeRequests';
import { TResumeRouteInfo } from '../types/routes';
import MainTemplate from '../components/MainTemplate.vue';
import { IconType } from '../types/enums.ts';

// export default defineComponent({
//   name: 'Content',
//   props: {
//     msg: String
//   }
// });

const ResumeData = ref<TResumeRouteInfo>(<TResumeRouteInfo>{});

onBeforeMount(async () => {
  ResumeData.value = await getResumeData();
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
