<script setup>
import { ref } from 'vue'
import axios from 'axios';
import MovieData from './MovieData.vue'


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
  <form @submit.prevent="handleSubmit">
    <h1>Adam's Movie Lookup</h1>
    <p>This app will display 10 movies using The Movie Database API</p>
    <input v-model="movie" placeholder="Please enter a movie title">
    <button type="submit">Search</button>
  </form>
  <MovieData v-if="movieListData" :movieListData="movieListData"/>

  
</template>

<style scoped>

</style>
