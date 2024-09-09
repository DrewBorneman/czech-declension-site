<template>
  <div class="content">
    <div class="flex flex-row space-x-12 mt-36">
      <div class="flex-grow flex-shrink-0"></div>
      <div class="flex-grow flex-shrink flex-basis-fourth">
        <slot name="left"></slot>
        
      </div>
      <div class="flex-grow flex-shrink flex-basis-half pt-8 space-y-2 bg-neutral-100 pb-12">
        <slot name="right"></slot>
      </div>
      <div class="flex-grow flex-shrink-0"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
