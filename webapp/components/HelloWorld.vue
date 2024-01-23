<script setup>
import { ref } from 'vue'
import axios from 'axios';

defineProps({
  msg: String,
})

let movie = ref('')
let movieListData = ref()
const handleSubmit = async () => {
  try {
    movieListData = await axios.get('/api/getMovies', movie)
    console.log('hitting endpoint')
    console.log(movieListData)
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
  <div v-if="movieListData">{{ movieListData }}</div>

  
</template>

<style scoped>

</style>
