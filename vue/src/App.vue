<template>
  <div v-if="mobile">
    <div class="flex flex-col h-screen overflow-hidden">
      <TopBarMobile />
      <router-view class="flex-grow main-overflow" v-slot="{ Component, route }">
        <Transition :name="DetermineTransitionName(route.name)">
          <component :is="Component"/>
        </Transition>
      </router-view>
    </div>
  </div>
  <div v-else>
    <div class="flex flex-col h-screen overflow-hidden">
      <TopBar />
      <router-view class="flex-grow main-overflow" v-slot="{ Component, route }">
        <Transition :name="DetermineTransitionName(route.name)">
          <component :is="Component"/>
        </Transition>
      </router-view>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import TopBar from './components/TopBar.vue'
import TopBarMobile from './components/TopBarMobile.vue'
import Footer from './components/Footer.vue'
import { useIsMobile } from './composables/useIsMobile.ts'
import type { RouteRecordNameGeneric } from 'vue-router'
import { computed, provide } from 'vue'

export default {
  name: 'App',
  components: {
    TopBar,
    TopBarMobile,
    Footer
  },
  methods: {
    DetermineTransitionName(routeName: RouteRecordNameGeneric) {
      let fromRoute = this.$router.resolve({ path: this.$router.options.history.state.back?.toString()});
      let toRoute = this.$router.resolve({ name: routeName?.toString() });
      
      if(!fromRoute.meta.order || !toRoute.meta.order) return 'fade';

      if(fromRoute.meta.order < toRoute.meta.order) {
        return 'slide-fade-right'
      } 
      else if(fromRoute.meta.order > toRoute.meta.order) {
        return 'slide-fade-left'
      }
      else {
        return 'fade'
      }
    }
  },

  setup() {
    const { isMobile } = useIsMobile();
    const mobile = computed(() =>
      isMobile.value
    )

    provide('mobile', mobile)
    
    return {
      mobile,
    }
  }
}
</script>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
html::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.main-overflow {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-x:hidden;
}

.slide-fade-left-enter-active,
.slide-fade-right-enter-active,
.fade-enter-active {
  overflow: hidden;
  transition: all 0.3s ease-in;
}

.slide-fade-left-leave-active,
.slide-fade-right-leave-active,
.fade-leave-active {
  visibility: hidden;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-50px);
  opacity: 0.2;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(50px);
  opacity: 0.2;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0.95, 0.95);
  opacity: 0.2;
}
</style>
