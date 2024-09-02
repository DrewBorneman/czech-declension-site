<template>
  <div class="content flex flex-row space-x-3 mt-2 mr-2 items-center">
    <div v-for="link in links">
      <a :href="link.url" :alt="link.subtext">
        <font-awesome-icon class="" :icon="link.icon" size="xl"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TSocialMediaLink } from '../types/components';


const props = defineProps({
  links: Array<TSocialMediaLink>,
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
