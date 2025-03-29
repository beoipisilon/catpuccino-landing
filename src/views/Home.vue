<template>
  <div class="home">
    <HeroSection />
    <CoffeeSection />
    <CroissantsSection />
    <DeliverySection />
    <AboutSection />
    <EnjoySection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import setupScrollAnimations from '@/utils/animations';
import HeroSection from '@/components/home/HeroSection.vue';
import CoffeeSection from '@/components/home/CoffeeSection.vue';
import CroissantsSection from '@/components/home/CroissantsSection.vue';
import AboutSection from '@/components/home/AboutSection.vue';
import DeliverySection from '@/components/home/DeliverySection.vue';
import EnjoySection from '@/components/home/EnjoySection.vue';
export default defineComponent({
  name: 'Home',
  components: {
    HeroSection,
    CoffeeSection,
    CroissantsSection,
    AboutSection,
    DeliverySection,
    EnjoySection,
  },
  mounted() {
    setupScrollAnimations();
  },
  activated() {
    setupScrollAnimations();
  },
  updated() {
    setupScrollAnimations();
  }
});
</script>


