<template>
  <footer class="bg-dark text-white/70 py-[30px] border-t border-white/5">
    <div class="container">
      <div class="flex justify-center items-center">
        <p class="text-[0.95rem] font-medium text-center">
          Copyrights &copy; {{ currentYear }} 
          <a href="#" @click.prevent="scrollToTop" class="text-white font-bold mx-1 hover:text-primary">瑪諾醫藥生技股份有限公司</a> 
          MANO PHARMACY. All Rights Reserved.
        </p>
      </div>
    </div>

    <!-- Back to Top Button -->
    <Transition name="fade">
      <button 
        v-show="showBackToTop" 
        @click="scrollToTop" 
        class="fixed right-[30px] bottom-[30px] max-md:right-5 max-md:bottom-5 w-12 h-12 max-md:w-[42px] max-md:h-[42px] rounded-xl bg-primary text-white border-none text-[1.25rem] max-md:text-[1.1rem] cursor-pointer flex items-center justify-center shadow-[0_8px_25px_rgba(221,106,130,0.4)] z-[99] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-primary-hover hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(221,106,130,0.6)]"
        aria-label="Back to Top"
      >
        <i class="bi bi-arrow-up"></i>
      </button>
    </Transition>
  </footer>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = ref(new Date().getFullYear())
    const showBackToTop = ref(false)

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 400
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      currentYear,
      showBackToTop,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
