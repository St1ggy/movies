<script setup lang="ts">
import { useStore, useVModel } from 'effector-vue/composition'

import IconButton from '@/components/icon-button.vue'
import { store } from '@/stores'

definePageMeta({
  middleware: ['auth'],
  title: 'Все',
})

const isLoading = useStore(store.movies.stores.$isLoading)
const data = useStore(store.movies.computed.$moviesFiltered)

const query = useVModel(store.movies.stores.$query)
</script>

<template lang="pug">
page-wrapper(:loading="isLoading")
  template(#toolbar-center)
    search-bar(v-model="query")
  template(#toolbar-right)
    nuxt-link(to="/new")
      icon-button(name="PlusCircleIcon")

  .movies
    .grid-list
      ItemMovie(:key="movie.id", :movie="movie", v-for="movie in data")
</template>

<style scoped lang="scss">
.grid-list {
  @apply w-full grid grid-cols-auto justify-center gap-10 p-8 items-center;
  grid-template-columns: repeat(auto-fill, theme('spacing.48'));
}
</style>
