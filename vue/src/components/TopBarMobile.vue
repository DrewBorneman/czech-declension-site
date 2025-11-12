<template>
  <div class="content flex flex-row mt-2 items-center">
    <img src="../../public/logo.svg" class="w-11 h-11 mr-4 ml-8 mt-1" />
    <h3 class="text-3xl font-bold">{{ $t('siteInfo.title') }}</h3>
    <div class="flex-grow-3"></div>
    <div class="flex flex-row space-x-8 mt-2 items-center text-lg pr-12">    
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grow-2 {
  flex-grow: 2;
}
.flex-grow-3 {
  flex-grow: 3;
}
.no-scroll-list {
  max-height: none;
  overflow: visible;
}
.no-scroll-list {
  max-height: none;
  overflow: visible;
}
</style>
