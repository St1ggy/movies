<script setup lang="ts">
import { useStore } from 'effector-vue/composition'

import { movieStore, moviesStore } from '@/stores'

const id = useParamsId()

definePageMeta({
  middleware: ['auth'],
  title: 'Страница фильма',
})

const isLoading = useStore(movieStore.stores.$isLoading)
const movieDetails = useStore(movieStore.stores.$movieDetails)

const moviesMap = useStore(moviesStore.computed.$moviesMap)
const movieCurrent = computed(() => moviesMap.value[id] ?? null)

const fetchMovie = (m: TMovie | null) => {
  if (m) {
    movieStore.events.getMovieById({ id, type: m.type })
  }
}

watch(movieCurrent, fetchMovie, { deep: true })
onMounted(() => {
  fetchMovie(movieCurrent.value)
})

onUnmounted(() => {
  movieStore.events.clearMovie()
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
.wrapper.p-4
  p(v-if="isLoading") Loading...
  .flex.flex-col(v-else)
    h1.self-center.my-8 {{ moviesMap[id]?.localizedTitle ?? '' }} - {{ moviesMap[id]?.originalTitle ?? '' }}
    .flex.flex-row
      ItemJson(:data="movieCurrent", title="Нужно", v-if="!!movieCurrent")
      ItemJson(:data="movieDetails", title="Детали", v-if="!!movieDetails")
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-grow flex-col items-center justify-center;
}
</style>
