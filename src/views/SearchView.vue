<script setup>
import { computed, watchEffect, ref } from 'vue'
import SearchBox from '../components/SearchBox.vue';
import { useMovieStore } from '../store/movieStore.js';
import MovieCard from '../components/MovieCard.vue';
import gsap from 'gsap'

const store = useMovieStore()
const results = computed(() => store.results)
const addMovie = (movie) => {
    store.addMovie(movie)
}


const staticMovies = [
    {
        id: 1,
        name: 'Batman Returns',
        image: '../src/assets/img/Batman.jpg',
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
        id: 2,
        name: 'Wild Wild West',
        image: '../src/assets/img/Wild West.jpg',
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
        id: 3,
        name: 'The Amazing Spiderman',
        image: '../src/assets/img/Spiderman.jpg',
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
]

const resultsContainer = ref(null)

watchEffect(() => {
  if (store.results.length && resultsContainer.value) {
    gsap.fromTo(
      resultsContainer.value.querySelectorAll('.result-item'),
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
      }
    )
  }
})
</script>

<template>
    <div class="bg-neutral-900 py-8 md:py-16">
        <div class="container mx-auto md:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
                <h2 class="text-2xl  font-Roboto md:text-4xl text-white mb-4 md:mb-0">Collect your favourites</h2>
                <SearchBox />
            </div>
            <div v-if="store.results.length" ref="resultsContainer">
                <div class="result-item" v-for="movie in store.results" :key="movie.id" @click="addMovie(movie)"  >
                    <div  class="flex flex-row p-5 items-center cursor-pointer">
                        <img class="w-7 pr-2" src="../assets/icons/green-add-button.svg" alt="add button" />
                        <div class="w-15"><img :src="movie.image" :alt="movie.name" v-if="movie.image" /></div>
                        <div class="px-5 text-white">{{ movie.name }}</div>
                    </div>

                </div>
            </div>
            <hr class="border-t-2 border-white my-4" />
        </div>

        <div class="container mx-auto px-3 md:px-7  ">
         <!-- Static Movies Section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 ">
            <MovieCard v-for="movie in staticMovies" :key="movie.id" :movie="movie" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            <MovieCard v-for="(movie, index) in store.selectedMovies" :key="index" :movie="movie"
                @remove="store.removeMovie(movie.id)" />
        </div>
            </div>

       
    </div>
</template>