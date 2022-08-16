<script setup lang="ts">
import { useStore } from 'effector-vue/composition'

import { Movie } from '@/models'
import { store } from '@/stores'

import type { ReadonlyDeep } from 'type-fest'

const id = useParamsId()

definePageMeta({
  middleware: ['auth'],
  title: 'Страница фильма',
})

const isLoading = useStore(store.movie.stores.$isLoading)
const movieDetails = useStore(store.movie.stores.$movieDetails)

const moviesMap = useStore(store.movies.computed.$moviesMap)
const movieCurrent = computed(() => moviesMap.value[id] ?? null)
const fetchMovie = (m: ReadonlyDeep<Movie> | null) => {
  if (m) {
    store.movie.events.getMovieById({ id, type: m.type })
  }
}

watch(movieCurrent, fetchMovie, { deep: true })
onMounted(() => {
  fetchMovie(movieCurrent.value)
})

onUnmounted(() => {
  store.movie.events.clearMovie()
})

const getTitle = () => {
  if (!movieCurrent.value) return 'Загрузка'

  if (movieCurrent.value.originalTitle.length > 0 && movieCurrent.value.localizedTitle.length > 0)
    return `${movieCurrent.value.localizedTitle} (${movieCurrent.value.originalTitle})`

  return movieCurrent.value.originalTitle || movieCurrent.value.localizedTitle || ''
}

useHead({ titleTemplate: getTitle })
</script>

<template lang="pug">
.wrapper.p-4.flex.flex-col
  .toolbar.h-16.w-full
    NuxtLink(to="/")
      Icon.w-8.h-8(name="ChevronLeftIcon")

  p(v-if="isLoading") Loading...

  .flex.flex-col.flex-start(v-else)
    h1.self-center.my-8 {{ moviesMap[id]?.localizedTitle ?? '' }} - {{ moviesMap[id]?.originalTitle ?? '' }}
    .flex.flex-row
      ItemJson(:data="movieCurrent", title="Нужно", v-if="!!movieCurrent")
      ItemJson(:data="movieDetails", title="Детали", v-if="!!movieDetails")
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-grow flex-col items-center;
}
</style>
