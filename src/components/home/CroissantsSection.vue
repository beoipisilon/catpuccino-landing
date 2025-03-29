<template>
  <div class="croissants hidden" id="delivery">
    <div class="c-text">
      <input type="button" value="R$ 12,00">
      <h1>Croissants</h1>
      <hr>
      <h2>Meet our recipe</h2>
      <p>Our Croissant recipe will surprise you. Classic or stuffed croissants!</p>
      <a href="#">All croissants ></a>
    </div>
    <div class="c-img">
      <img src="@/assets/img/croissant.png" alt="Croissant">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CroissantsSection'
});
</script> 