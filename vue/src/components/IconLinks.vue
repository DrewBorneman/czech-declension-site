<template>
  <div :class="styleClasses">
    <div v-for="link in links">
      <a :href="link.url" :alt="link.name" class="flex items-center">
        <font-awesome-icon class="" :icon="link.icon" :size="size"></font-awesome-icon>
        <span v-if="text" class="ml-4 text-xl font-bold">{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { TSocialMediaLink } from '../types/components';

const styleClassesSmall: string = "content flex flex-row space-x-3 mt-2 mr-2 items-center";
const styleClassesLarge: string = "content flex flex-col space-y-6 mt-4 items-start";

const props = defineProps<{
  links: Array<TSocialMediaLink>,
  size: string,
  text: boolean,
  col: boolean,
}>();

const styleClasses = computed(() => {
return [
  "content flex",
  props.col ? "flex-col items-start space-y-6 mt-4" : "flex-row mr-2 space-x-3 items-center mt-2",
].join(' ')
})


</script>
