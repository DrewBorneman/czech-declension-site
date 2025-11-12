<template>
  <MainTemplate>
    <div class="content flex flex-row">
      <div class="flex-grow"></div>
      <div class="flex-grow flex-shrink basis-most flex flex-col space-y-8 mt-2 items-center">
        <div class="w-full box-border font-bold text-center p-4 my-2 mx-8 rounded-md text-3xl">{{ $t('siteInfo.hello') }}</div>
        <div class="w-full box-border text-center p-4 my-2 mx-8 rounded-md text-xl">{{ $t('siteInfo.description') }}</div>
        <div class="w-full box-border font-italic text-center p-4 my-2 mx-8 rounded-md text-l">{{ $t('siteInfo.subdescription') }}</div>
        <div class="w-full box-border text-center p-4 my-2 mx-8 rounded-md text-l">
          <i18n-t keypath="siteInfo.countDescription">
            <template v-slot:count>
              <b>{{ count }}</b>
            </template>
          </i18n-t>
        </div>
        <div class="w-full flex flex-row">
          <div class="flex-grow"></div>
          <RouterLink class="flex-grow flex-shrink basis-1/3 box-border font-bold my-2 mx-6" :class="mobile ? 'mb-12' : ''" to="/quiz">
            <div class="text-center font-bold p-2 rounded-md bg-theme-lightgreen">{{ $t('siteInfo.begin') }}</div>
          </RouterLink>
          <div class="flex-grow"></div>
        </div>
      </div>
      <div class="flex-grow"></div>
    </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import MainTemplate from '../components/MainTemplate.vue';
import { onBeforeMount, inject } from 'vue';
import { ref } from '@vue/reactivity';
import { GetCount } from '../helpers/getRequests';

const mobile = inject('mobile');

const count = ref<number>(0);

onBeforeMount(async () => {
  count.value = await GetCount();
})

</script>

<style lang="css" scoped>
  .portrait-mobile {
    width: 16rem;
    max-width: 80%;
    margin-bottom: 2rem;
  }
  
  .basis-half {
    flex-basis: 50%;
  }
  
  .basis-most {
    flex-basis: 70%;
  }
</style>
