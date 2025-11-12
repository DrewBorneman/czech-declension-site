<template>
  <div v-if="mobile" class="content">
    <div class="flex flex-col mt-6 pl-8 pr-8">
      <div class="flex-grow flex-shrink basis-auto space-y-2">
        <slot></slot>
      </div>
    </div>
    <!-- <FooterMobile /> -->
  </div>

  <div v-else class="content">
    <div class="flex flex-row space-x-12 mt-24">
      <div class="flex-grow"></div>
      <div class="flex-grow flex-shrink flex-basis-half space-y-2">
        <slot></slot>
      </div>
      <div class="flex-grow"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import FooterMobile from '../components/FooterMobile.vue'
  import { inject } from 'vue'

  const mobile = inject('mobile');


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-basis-half {
  flex-basis: 50%;
}
</style>
