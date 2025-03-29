<template>
  <div>
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import '@/assets/scss/mediaQuery.scss';
</style> 