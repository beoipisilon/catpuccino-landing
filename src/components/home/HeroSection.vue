<template>
  <div class="container" id="inicio">
    <div class="text-container">
      <h3>Unforgettable flavor</h3>
      <h1>CatPuccino</h1>
      <p>A perfect place for pet parents and
        coffee lovers. Our café has a comfortable space
        for you and your best friend.</p>
    </div>
    <div class="image-container">
      <img src="@/assets/img/header.png" alt="coffee header">
    </div>
    <div class="image-container-mobile">
      <img src="@/assets/img/Image header mobile.png" alt="coffee header">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection'
});
</script> 