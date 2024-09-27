<template>
  <MainTemplate>
      <div class = "flex flex-col pl-24">
        <h1 class="text-5xl font-bold mb-2">{{ ResumeData.title }}</h1>
        <p class="pt-4 text-xl">{{ ResumeData.text }}</p>
        <div class="content flex flex-col space-y-6 mt-8 ml-6 items-start">
          <div v-for="file in ResumeData.files">
            <a :href="file.path" :alt="file.filename" class="flex items-center" download>
              <font-awesome-icon class="" :icon="file.icon" size="3x"></font-awesome-icon>
              <span class="ml-4 text-xl font-bold">{{ file.description }}</span>
            </a>
          </div>
        </div>
      </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { getResumeData } from './../helpers/getRequests';
import { TResumeRouteInfo } from '../types/routes';
import MainTemplate from '../components/MainTemplate.vue';
import { IconType } from '../types/enums.ts';

const ResumeData = ref<TResumeRouteInfo>(<TResumeRouteInfo>{});

onBeforeMount(async () => {
  ResumeData.value = await getResumeData();
})
</script>
