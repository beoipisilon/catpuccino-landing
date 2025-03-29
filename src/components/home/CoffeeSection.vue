<template>
  <div id="products">
    <div class="coffee hidden">
      <h1>Coffees</h1>
      <hr>
      <p>Meet our exclusive coffees thought out and prepared by
        <br>our renowned baristas.
      </p>
      <a href="#">See all ></a>
    </div>

    <div class="cards">
      <div class="card card-1 hidden">
        <div class="capuccino">
          <img src="@/assets/img/card1.png" alt="Capuccino">
        </div>
        <h3>$24.00</h3>
        <h1>Capuccino</h1>
        <p>Espresso coffee, steamed milk, foam, and a touch of caramel.</p>
        <input type="button" value="Delivery">
      </div>
      <div class="card card-2 hidden">
        <div>
          <img src="@/assets/img/card2.png" alt="Coffee with milk">
        </div>
        <h3>$16.00</h3>
        <h1>Coffee with milk</h1>
        <p>The classic, loved by Brazilians, with a touch of sophistication!</p>
        <input type="button" value="Delivery">
      </div>
      <div class="card card-3 hidden">
        <div>
          <img src="@/assets/img/card3.png" alt="Black coffee">
        </div>
        <h3>$12.00</h3>
        <h1>Black coffee</h1>
        <p>Selected grains made in your favorite preparation method.</p>
        <input type="button" value="Delivery">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoffeeSection'
});
</script> 