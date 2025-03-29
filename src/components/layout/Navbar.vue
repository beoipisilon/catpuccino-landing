<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <img src="@/assets/img/logo.png" alt="Catpuccino" class="logo">
      </div>

      <div class="mobile-menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-menu" :class="{ 'show-nav-bar': isMenuOpen }">
        <ul class="nav-links">
          <li><a href="#inicio" @click="closeMenu">Home</a></li>
          <li><a href="#products" @click="closeMenu">Products</a></li>
          <li><a href="#about" @click="closeMenu">About</a></li>
        </ul>
        <button class="nav-button">Delivery</button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
      document.body.style.overflow = '';
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu
    };
  }
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-brand {
    .logo {
      height: 40px;
      width: auto;
    }
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);

    &.show-nav-bar {
      right: 0;
    }
  }
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  li {
    a {
      color: #3C0E0E;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: #F1C6C3;
        transition: width 0.3s ease;
      }

      &:hover {
        color: #F1C6C3;

        &::after {
          width: 100%;
        }
      }
    }
  }
}

.nav-button {
  background: #3C0E0E;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #F1C6C3;
    transform: translateY(-2px);
  }
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 3px;
    background: #3C0E0E;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  &.active {
    span {
      &:first-child {
        transform: translateY(9px) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
}

@media (max-width: 768px) {
  .show-nav-bar::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}
</style> 