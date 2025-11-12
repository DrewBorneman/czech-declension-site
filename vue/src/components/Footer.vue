<template>
  <div class="content flex flex-row mt-2 pb-2 items-center">
    <img src="../../public/logo.svg" class="flex-grow-0 w-8 h-8 ml-4" />
    <p class="flex-grow-0 text-s ml-4">{{ $t('siteInfo.footer') }} </p>
    <div class="flex-grow-3"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grow-3 {
  flex-grow: 3;
}
.flex-shrink-3 {
  flex-shrink: 3;
}
</style>
