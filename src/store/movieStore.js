import { defineStore } from 'pinia'
import { searchShows } from '../services/api'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    results: [],
    selectedMovies: [],
  }),
  actions: {
    async searchMovies(query) {
      this.results = await searchShows(query)
    },
    addMovie(movie) {
      if (!this.selectedMovies.find(m => m.id === movie.id)) {
        this.selectedMovies.push(movie)
        console.log('Movie added:', movie)
      }
    },
    removeMovie(movieId) {
      this.selectedMovies = this.selectedMovies.filter(m => m.id !== movieId)
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'movie-store',
        storage: localStorage,
        paths: ['selectedMovies'], 
      },
    ],
  },
})