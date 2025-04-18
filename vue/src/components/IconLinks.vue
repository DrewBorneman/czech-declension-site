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
