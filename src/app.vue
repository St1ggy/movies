<script lang="ts" setup>
import { genresStore, moviesStore } from '@/stores'

onMounted(() => {
  moviesStore.events.getMovies()
  genresStore.events.getGenres()
})

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  bodyAttrs: {},
})
</script>

<template lang="pug">
#app
  Head
    Title {{ $route.meta.title }} | Movies

  SideBar
  NuxtPage
</template>
