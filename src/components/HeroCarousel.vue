<template>
  <section id="hero" class="relative w-full overflow-hidden bg-dark max-md:h-[78vh] max-md:min-h-[440px] md:h-screen md:min-h-[500px] lg:min-h-[600px]">
    <div class="relative w-full h-full">
      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 w-full h-full bg-dark bg-cover bg-center bg-no-repeat flex items-center justify-center text-center transition-opacity duration-800 ease-in-out pointer-events-none z-[1]"
        :class="{ 'opacity-100 pointer-events-auto !z-[2]': index === activeIndex, 'opacity-0': index !== activeIndex }"
        :style="{ backgroundImage: `linear-gradient(to bottom, rgba(9, 30, 62, 0.6), rgba(9, 30, 62, 0.8)), url(${slide.image})`, backgroundColor: '#091E3E' }"
      >
        <div class="max-w-[900px] px-6 sm:px-8 md:px-10 text-white relative max-md:w-[92%] max-md:max-w-[520px] max-md:rounded-[24px] max-md:border max-md:border-white/15 max-md:bg-white/10 max-md:backdrop-blur-[8px] max-md:px-5 max-md:py-6" :class="{ 'content-animate': index === activeIndex }" :key="index === activeIndex ? animationKey : index">
          <h5 class="slide-tagline text-[1.25rem] md:text-base max-md:text-[0.7rem] font-bold uppercase text-primary mb-5 max-md:mb-2 tracking-[3px] [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">{{ slide.tagline }}</h5>
          <h1 class="slide-title text-[4rem] md:text-3xl max-md:text-[1.45rem] font-extrabold mb-6 max-md:mb-2.5 [text-shadow:0_4px_10px_rgba(0,0,0,0.4)] leading-[1.2] max-md:leading-[1.25]">{{ slide.title }}</h1>
          <p class="slide-desc text-[1.15rem] md:text-sm max-md:text-[0.82rem] font-medium mb-[35px] max-md:mb-0 max-md:line-clamp-2 leading-[1.8] max-md:leading-[1.6] text-white/90 [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]" v-html="slide.desc"></p>
        </div>
      </div>

      <!-- Carousel Navigation Arrows -->
      <button 
        class="absolute top-1/2 -translate-y-1/2 left-[30px] w-[54px] h-[54px] rounded-full bg-white/15 border border-white/25 text-white flex items-center justify-center text-[1.25rem] cursor-pointer z-[10] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] backdrop-blur-[5px] hover:bg-primary hover:border-primary hover:-translate-y-1/2 hover:scale-[1.08] max-lg:hidden" 
        @click="prevSlide" 
        aria-label="Previous Slide"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button 
        class="absolute top-1/2 -translate-y-1/2 right-[30px] w-[54px] h-[54px] rounded-full bg-white/15 border border-white/25 text-white flex items-center justify-center text-[1.25rem] cursor-pointer z-[10] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] backdrop-blur-[5px] hover:bg-primary hover:border-primary hover:-translate-y-1/2 hover:scale-[1.08] max-lg:hidden" 
        @click="nextSlide" 
        aria-label="Next Slide"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'HeroCarousel',
  setup() {
    const activeIndex = ref(0)
    const animationKey = ref(0)
    const timer = ref(null)
    const imageCache = new Map()

    const slides = [
      {
        image: 'https://www.manopharmacy.com/img/carousel-1.jpg',
        tagline: '以照顧家人的心情照顧您',
        title: '成為值得信賴的好鄰居',
        desc: '我們希望能引領專業資深藥師及經驗豐富的醫護相關人員，讓民眾有更安全、更完整的醫護照顧。<br/>同時與診所合作，共同打造地方社區關懷及更多健康諮詢服務。'
      },
      {
        image: 'https://www.manopharmacy.com/img/carousel-2.jpg',
        tagline: '職前訓練 ▪ 專業培訓',
        title: '經營管理 ▪ 持續成長',
        desc: '培養第一線專業人員，醫護科別知識，及溝通銷售技巧等。<br/>隨時教導最新醫學、醫藥知識，促進個人成長及準確了解客戶需求。'
      }
    ]

    const preloadImage = (url) => {
      if (imageCache.has(url)) {
        return Promise.resolve(imageCache.get(url))
      }
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => { imageCache.set(url, img); resolve(img) }
        img.onerror = () => { imageCache.set(url, img); resolve(img) }
        img.src = url
      })
    }

    const preloadImages = async () => {
      await Promise.all(slides.map((slide) => preloadImage(slide.image)))
    }

    const startTimer = () => {
      timer.value = setInterval(() => { nextSlide() }, 6000)
    }

    const stopTimer = () => {
      if (timer.value) clearInterval(timer.value)
    }

    const switchSlide = async (index) => {
      const targetIndex = (index + slides.length) % slides.length
      if (targetIndex === activeIndex.value) return
      stopTimer()
      await preloadImage(slides[targetIndex].image)
      activeIndex.value = targetIndex
      animationKey.value++
      startTimer()
    }

    const nextSlide = () => switchSlide(activeIndex.value + 1)
    const prevSlide = () => switchSlide(activeIndex.value - 1)
    const setSlide = (index) => switchSlide(index)

    onMounted(() => {
      preloadImages().then(() => { startTimer() })
    })

    onUnmounted(() => { stopTimer() })

    return { activeIndex, animationKey, slides, nextSlide, prevSlide, setSlide }
  }
}
</script>

<style scoped>
/* Content entrance animation — plays when slide becomes active */
.slide-tagline,
.slide-title,
.slide-desc {
  opacity: 0;
  transform: translateY(20px);
}

.content-animate .slide-tagline {
  animation: contentUp 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s forwards;
}

.content-animate .slide-title {
  animation: contentUp 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0.35s forwards;
}

.content-animate .slide-desc {
  animation: contentUp 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s forwards;
}

@keyframes contentUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
