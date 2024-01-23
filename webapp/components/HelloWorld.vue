<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const movie = ref('')
const handleSubmit = () => {
  console.log(movie)
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <form @submit.prevent="handleSubmit">
    <p>{{ movie }}</p>
    <input v-model="movie" placeholder="Please enter a movie">
    <button type="submit">Search</button>
  </form>

  
</template>

<style scoped>

</style>
