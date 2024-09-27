<template>
  <TwoColumnTemplate>
    <template v-slot:left>
      <div class="flex flex-col items-end">
        <h2 class="text-3xl font-bold mb-4">{{ ProjectsData.title }}</h2>
        <p class="text-basis text-slate-600 ml-4 text-right">{{ ProjectsData.text }}</p>
      </div>
    </template>
    <template v-slot:right>
      <div class="flex flex-col items-start mt-4">
          <div v-for="project in PaginatedProjects" :key="project.id" :class="'w-full flex flex-row px-4 py-4 ' + (((project.id + 1) % 2) ? 'bg-slate-200' : 'bg-neutral-100')">
            <img v-if="project.imagePath" :src="project.imagePath" class="max-w-40 max-h-40 aspect-square m-4 mr-8" /><div v-else class="px-4"></div>
            <div class="flex flex-col flex-grow-3 space-y-3">
              <div class="flex flex-row items-center justify-between">
                <a v-if="project.url && project.url !== ''" :href="project.url" class="flex flex-row items-center space-x-2">
                  <h3 class="text-2xl font-bold">{{ project.title }}</h3>
                  <font-awesome-icon class="text-slate-600" :icon="IconType.link" size="l"></font-awesome-icon>
                </a>
                <h3 v-else class="text-2xl font-bold">{{ project.title }}</h3>
                <h4 class="text-xl font-bold text-slate-600 mr-8">{{ project.date }}</h4>
              </div>
              <div class="text-lg ml-2 mb-3" v-html="project.text"></div>
            </div>
          </div>
          <v-pagination class="pt-4" v-if="ProjectsData.projects ? (ProjectsData.projects.length > pageSize) : false" v-model="currPage" :total-visible="totalPages" :length="totalPages"></v-pagination>
      </div>
    </template>
  </TwoColumnTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { computed, ref } from '@vue/reactivity';
import { getProjectsData } from './../helpers/getRequests';
import { TProjectsRouteInfo } from '../types/routes';
import TwoColumnTemplate from '../components/TwoColumnTemplate.vue';
import { IconType } from '../types/enums.ts';

const ProjectsData = ref<TProjectsRouteInfo>(<TProjectsRouteInfo>{});
const SortedProjects = computed(() => ProjectsData.value.projects? ProjectsData.value.projects.sort((a, b) => a.id - b.id) : []);
const PaginatedProjects = computed(() => SortedProjects.value.slice(((currPage.value - 1) * pageSize), ((currPage.value - 1) * pageSize + pageSize)));
const totalPages = computed(() => {
  console.log(SortedProjects.value.length ? Math.ceil(SortedProjects.value.length / pageSize) : 1);
  return SortedProjects.value.length ? Math.ceil(SortedProjects.value.length / pageSize) : 1});
const currPage = ref<number>(1);
const pageSize = 3;

onBeforeMount(async () => {
  ProjectsData.value = await getProjectsData();
  
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.flex-grow-3 {
  flex-grow: 3;
}

.v-pagination > ul > li:first-child,
.v-pagination > ul > li:last-child {
  color: black;
}
</style>
