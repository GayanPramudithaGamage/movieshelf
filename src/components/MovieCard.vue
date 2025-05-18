<template>
  <div
    class="relative h-[100vh] sm:h-[50vh] md:h-[100vh] lg:h-[100vh] w-[350px] sm:w-[350px] md:w-[400px] bg-neutral-700 rounded-sm overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
  >
    <button
      @click="$emit('remove')"
      class="absolute top-2 right-2 bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition duration-200"
      aria-label="Remove"
    >
      <img src="../assets/icons/Close Grey.svg" alt="remove" />
    </button>
    <img
      :src="movie.image"
      v-if="movie.image"
      :alt="movie.name"
      :title="movie.name"
      class="w-full h-3/4 object-cover object-center"
    />
    <template v-else>
      <img
        :src="defaultImage"
        alt="No Movie Poster"
        title="No Movie Poster"
        class="w-full h-3/4 object-cover object-center"
      />
    </template>
    <div class="p-6 text-white">
      <h3 class="font-bold text-xl mb-2">{{ movie.name }}</h3>
      <div class="text-sm md:text-sm">
        {{ stripHtml(movie.summary) }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['movie'])
defineEmits(['remove'])
const MAX_TEXT_LENGTH = 230;

const defaultImage = '../assets/images/no-poster-found.png'

const stripHtml = (html) => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html
  return truncateText(tempDiv.textContent || tempDiv.innerText || '')
}

function truncateText(text, maxLength = MAX_TEXT_LENGTH) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 3)+'...';
}
</script>