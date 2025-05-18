<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}
</script>
<template>
  <header class="bg-black text-white ">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <div class="text-3xl font-bold">
          <a href="#" class="text-white hover:text-gray-300"><img src="../assets/img/Logo White.svg" alt="Logo" /></a>
        </div>

        <!-- Hamburger Menu Button for Mobile and Tablet -->
        <button 
          class="lg:hidden text-white focus:outline-none" 
          @click="toggleMobileMenu"
          title="Toggle Menu"
        >
          <img src="../assets/icons/Menu White.svg" alt="menu"/>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-8">
          <a href="#" class="hover:text-gray-300">HOME</a>
          <a href="#library" class="hover:text-gray-300">MOVIE LIBRARY</a>
          <a href="#schedule" class="hover:text-gray-300">SCHEDULE</a>
          <a href="#screens" class="hover:text-gray-300">OUR SCREENS</a>
          <a href="#contact" class="hover:text-gray-300">LOCATION & CONTACT</a>
        </nav>
      </div>

      <!-- Mobile and Tablet Navigation -->
      <nav 
        v-if="mobileMenuOpen" 
        class="lg:hidden mt-4 space-y-4 bg-gray-800 p-4 rounded-lg"
      >
        <a href="#" class="block text-white hover:text-gray-300" @click="closeMobileMenu">HOME</a>
        <a href="#library" class="block text-white hover:text-gray-300" @click="closeMobileMenu">MOVIE LIBRARY</a>
        <a href="#schedule" class="block text-white hover:text-gray-300" @click="closeMobileMenu">SCHEDULE</a>
        <a href="#screens" class="block text-white hover:text-gray-300" @click="closeMobileMenu">OUR SCREENS</a>
        <a href="#contact" class="block text-white hover:text-gray-300" @click="closeMobileMenu">LOCATION & CONTACT</a>
      </nav>
    </div>
  </header>
</template>