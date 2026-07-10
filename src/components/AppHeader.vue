<template>
  <header 
    :class="['fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]', isScrolled || isMenuOpen ? 'py-3 bg-white/85 backdrop-blur-[15px] shadow-[0_4px_30px_rgba(9,30,62,0.05)] border-b border-white/30' : 'py-[25px] bg-transparent border-b border-white/10']"
  >
    <div class="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="group logo-link" @click.prevent="scrollToSection('hero')">
        <img 
          src="https://www.manopharmacy.com/img/MANO LOGO.png" 
          alt="瑪諾藥局 MANO PHARMACY Logo" 
          class="h-12 w-auto block transition-transform duration-400 ease-out drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] group-hover:scale-[1.02]"
        />
      </a>

      <!-- Hamburger Button -->
      <button 
        class="hidden max-lg:flex flex-col justify-between w-[30px] h-[21px] bg-transparent border-none cursor-pointer z-[1001]" 
        @click="toggleMenu"
        aria-label="Toggle Navigation"
      >
        <span :class="['w-full h-[3px] rounded-[2px] transition-all duration-300', isScrolled || isMenuOpen ? 'bg-dark' : 'bg-white', isMenuOpen ? 'translate-y-[9px] rotate-45' : '']"></span>
        <span :class="['w-full h-[3px] rounded-[2px] transition-all duration-300', isScrolled || isMenuOpen ? 'bg-dark' : 'bg-white', isMenuOpen ? 'opacity-0' : '']"></span>
        <span :class="['w-full h-[3px] rounded-[2px] transition-all duration-300', isScrolled || isMenuOpen ? 'bg-dark' : 'bg-white', isMenuOpen ? '-translate-y-[9px] rotate-[-45deg]' : '']"></span>
      </button>

      <!-- Nav Links -->
      <nav 
        :class="['flex items-center gap-[30px] max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:bg-white max-lg:flex-col max-lg:py-[30px] max-lg:px-0 max-lg:gap-5 max-lg:shadow-[0_10px_30px_rgba(9,30,62,0.1)] max-lg:transition-all max-lg:duration-400 max-lg:ease-[cubic-bezier(0.165,0.84,0.44,1)]', isMenuOpen ? 'max-lg:opacity-100 max-lg:visible max-lg:translate-y-0' : 'max-lg:opacity-0 max-lg:invisible max-lg:-translate-y-5']"
      >
        <a 
          href="#hero" 
          :class="['group relative font-semibold text-[1.05rem] py-2 cursor-pointer transition-colors duration-300 hover:text-primary', isScrolled || isMenuOpen ? 'text-dark' : 'text-white max-lg:text-dark']"
          @click.prevent="scrollToSection('hero')"
        >
          回首頁
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a 
          href="#about" 
          :class="['group relative font-semibold text-[1.05rem] py-2 cursor-pointer transition-colors duration-300 hover:text-primary', isScrolled || isMenuOpen ? 'text-dark' : 'text-white max-lg:text-dark']"
          @click.prevent="scrollToSection('about')"
        >
          關於瑪諾
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a 
          href="#feature" 
          :class="['group relative font-semibold text-[1.05rem] py-2 cursor-pointer transition-colors duration-300 hover:text-primary', isScrolled || isMenuOpen ? 'text-dark' : 'text-white max-lg:text-dark']"
          @click.prevent="scrollToSection('feature')"
        >
          經營理念
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a 
          href="#service" 
          :class="['group relative font-semibold text-[1.05rem] py-2 cursor-pointer transition-colors duration-300 hover:text-primary', isScrolled || isMenuOpen ? 'text-dark' : 'text-white max-lg:text-dark']"
          @click.prevent="scrollToSection('service')"
        >
          服務項目
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <!-- Dropdown Menu for Branches -->
        <div class="relative group/dropdown" @mouseenter="showDropdown" @mouseleave="hideDropdown">
          <a 
            href="#branches" 
            :class="['group relative font-semibold text-[1.05rem] py-2 cursor-pointer transition-colors duration-300 hover:text-primary flex items-center', isScrolled || isMenuOpen ? 'text-dark' : 'text-white max-lg:text-dark']"
            @click.prevent="scrollToSection('branches')"
          >
            門市據點 
            <i :class="['fas fa-chevron-down text-[0.8rem] ml-1 transition-transform duration-300', isDropdownVisible ? 'rotate-180' : '']"></i>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div 
            :class="['absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-[0_10px_30px_rgba(9,30,62,0.15)] rounded-xl py-2.5 min-w-[160px] border border-black/5 transition-all duration-300 max-lg:static max-lg:translate-x-0 max-lg:translate-y-0 max-lg:shadow-none max-lg:border-none max-lg:bg-[#f8f9fa] max-lg:mt-2.5 max-lg:w-full max-lg:text-center', isDropdownVisible ? 'opacity-100 visible translate-y-0 max-lg:block' : 'opacity-0 invisible translate-y-2.5 max-lg:hidden']"
          >
            <a href="https://www.instagram.com/manopharmacy_02/" target="_blank" class="block py-2.5 px-5 !text-dark text-[0.95rem] font-semibold transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-light hover:!text-primary hover:pl-[25px]" @click="closeMenu">瑪諾藥局</a>
            <a href="https://www.instagram.com/manopharmacy_01/" target="_blank" class="block py-2.5 px-5 !text-dark text-[0.95rem] font-semibold transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-light hover:!text-primary hover:pl-[25px]" @click="closeMenu">祐兒藥局</a>
            <a href="https://www.instagram.com/manopharmacy_03/" target="_blank" class="block py-2.5 px-5 !text-dark text-[0.95rem] font-semibold transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-light hover:!text-primary hover:pl-[25px]" @click="closeMenu">鄰康藥局</a>
            <a href="https://www.instagram.com/manopharmacy_04/" target="_blank" class="block py-2.5 px-5 !text-dark text-[0.95rem] font-semibold transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-light hover:!text-primary hover:pl-[25px]" @click="closeMenu">恆新健康藥局</a>
          </div>
        </div>

        <a 
          href="#contact" 
          class="btn btn-primary !py-2.5 !px-6 !text-[0.95rem]" 
          @click.prevent="scrollToSection('contact')"
        >
          聯絡我們
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const isScrolled = ref(false)
    const isMenuOpen = ref(false)
    const isDropdownVisible = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
      isDropdownVisible.value = false
    }

    const showDropdown = () => {
      isDropdownVisible.value = true
    }

    const hideDropdown = () => {
      isDropdownVisible.value = false
    }

    const scrollToSection = (id) => {
      closeMenu()
      const element = document.getElementById(id)
      if (element) {
        // Offset for sticky header
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initialize on load
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      isMenuOpen,
      isDropdownVisible,
      toggleMenu,
      closeMenu,
      showDropdown,
      hideDropdown,
      scrollToSection
    }
  }
}
</script>
