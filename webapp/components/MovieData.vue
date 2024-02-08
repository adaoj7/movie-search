<script setup>
import { ref } from 'vue';

defineProps({
  movieListData: Array,
})

</script>

<template>
    <ul>
        <li v-for="object in movieListData">
            <p>Movie Title: {{ object.title }}</p>
            <img :src="object.poster" alt="">
            <p>Popularity Score: {{ object.popularity }}</p>
        </li>
    </ul>
</template>

<style>
    ul {
        list-style: none;
    }
</style>