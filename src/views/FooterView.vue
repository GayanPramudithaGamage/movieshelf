<template>
    <footer class="w-full bg-neutral-900 text-white">
      <!-- Main footer content -->
      <div class="container mx-auto px-4 py-8 flex flex-col items-center md:flex-row justify-between md:items-start">
        <!-- Company info -->
        <div class="mb-6 text-center md:text-left md:mb-0">
          <h2 class="text-xl font-bold mb-4">Amadeus IT Group</h2>
          <p class="text-gray-300">
            C. Salvador de Madariaga, 1<br>
            28027 Madrid<br>
            Spain
          </p>
        </div>
  
  
        <div class="hidden md:block flex-grow"></div>
  
        <!-- Social media -->
        <div class="flex flex-row mt-6 space-x-4 md:mt-0">
          <p class="text-gray-300 mb-2">Follow us on</p>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-gray-300">
              <img src="../assets/icons/Twitter White.svg" alt="twitter"/>
            </a>
            <a href="#" class="text-white hover:text-gray-300">
              <img src="../assets/icons/Youtube White.svg" alt="youtube"/>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Copyright section -->
      <div class="border-t border-gray-800">
        <div class="container mx-auto px-4 py-4 flex flex-col text-center md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            <p>Copyright © 2022 Amadeus Hotels. All rights reserved.</p>
          </div>
          <div class="mt-2 md:mt-0">
            <p>
              Photos by 
              <a href="#" class="text-gray-300 hover:underline">Felix Mooneeram</a>
              &amp;
              <a href="#" class="text-gray-300 hover:underline">Serge Kutuzov</a>
              on
              <a href="#" class="text-gray-300 hover:underline">Unsplash</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </template>