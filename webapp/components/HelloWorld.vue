<script setup>
import { ref } from 'vue'
import axios from 'axios';
import MovieData from './MovieData.vue'

defineProps({
  msg: String,
})

let movie = ref('')
let movieListData = ref()
const handleSubmit = async () => {
  try {
    movieListData.value = await axios.get('/api/getMovies', {params:{movie: movie.value}})
    movieListData.value = movieListData.value.data
  } catch (error){
    console.log(error)
  }

}
</script>

<template>
  <h1>{{ msg }}</h1>
  <form @submit.prevent="handleSubmit">
    <p>{{ movie }}</p>
    <input v-model="movie" placeholder="Please enter a movie">
    <button type="submit">Search</button>
  </form>
  <MovieData v-if="movieListData" :movieListData="movieListData"/>

  
</template>

<style scoped>

</style>
