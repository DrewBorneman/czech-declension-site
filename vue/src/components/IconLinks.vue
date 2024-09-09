<template>
  <div :class="big ? styleClassesLarge : styleClassesSmall">
    <div v-for="link in links">
      <a :href="link.url" :alt="link.name" class="flex items-center">
        <font-awesome-icon class="" :icon="link.icon" :size="big ? '3x' : 'xl'"></font-awesome-icon>
        <span v-if="big" class="ml-4 text-xl font-bold">{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TSocialMediaLink } from '../types/components';

const styleClassesSmall: string = "content flex flex-row space-x-3 mt-2 mr-2 items-center";
const styleClassesLarge: string = "content flex flex-col space-y-6 mt-4 items-start";

const props = defineProps<{
  links: Array<TSocialMediaLink>,
  big: boolean,
}>();
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
