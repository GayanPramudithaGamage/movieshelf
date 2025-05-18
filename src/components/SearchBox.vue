<template>
  <div class="w-sm mb-8">
      <div class="flex items-center text-white border-1 px-2 rounded-lg shadow-md overflow-hidden">
          <img src="../assets/icons/Search White.svg" title="search" />
          <input 
              v-model="searchQuery"
              @keyup.enter="performSearch"
              type="text" 
              placeholder="Search title and add to grid" 
              class="flex-grow px-4 py-3 focus:outline-none"
              lable="Search"
          >
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMovieStore } from '../store/movieStore'

const searchQuery = ref('') // Reactive variable for input value
const movieStore = useMovieStore()

const performSearch = () => {
  movieStore.searchMovies(searchQuery.value) // Call the store action with the input value
}
</script>