<template>
  <div class="content flex flex-row mt-3 items-center">
    <div class="flex-grow-2"></div>
    <RouterLink class="font-bold" to="/">
      <img src="../../public/logo.svg" class="w-11 h-11 mr-4 ml-12 mt-1" />
    </RouterLink>
    <div class ="flex flex-col">
    <h3 class="text-3xl font-bold">
      <RouterLink class="font-bold" to="/">{{ $t('siteInfo.title') }}</RouterLink>
    </h3>
    <p class="text-xs font-italic">{{ $t('siteInfo.subtitle') }}</p>
    </div>
    <div class="flex-grow-3"></div>
    <div class="flex flex-row space-x-8 mt-2 items-center text-lg pr-24">
    </div>
    <div class="flex-grow"></div>
  </div>
</template>

<script lang="ts" setup>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grow-2 {
  flex-grow: 2;
}
.flex-grow-3 {
  flex-grow: 3;
}
</style>
