<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header Navigation -->
    <AppHeader />

    <!-- Main Content -->
    <main class="grow">
      <!-- Hero Slide Carousel Section -->
      <HeroCarousel />

      <!-- Floating Highlights/Facts Section -->
      <HighlightFacts />

      <!-- About Us Section -->
      <AboutUs />

      <!-- Core Values / Features Section -->
      <CoreValues />

      <!-- Services Section -->
      <OurServices />

      <!-- Branches Section -->
      <StoreBranches />

      <!-- Contact Us Form Section -->
      <ContactUs />
    </main>

    <!-- Footer Copyright & Back to Top -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HeroCarousel from './components/HeroCarousel.vue'
import HighlightFacts from './components/HighlightFacts.vue'
import AboutUs from './components/AboutUs.vue'
import CoreValues from './components/CoreValues.vue'
import OurServices from './components/OurServices.vue'
import StoreBranches from './components/StoreBranches.vue'
import ContactUs from './components/ContactUs.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroCarousel,
    HighlightFacts,
    AboutUs,
    CoreValues,
    OurServices,
    StoreBranches,
    ContactUs,
    AppFooter
  }
}
</script>
