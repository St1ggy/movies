<script setup lang="ts">
import { useStore, useVModel } from 'effector-vue/composition'

import { moviesStore } from '@/stores'

definePageMeta({
  middleware: ['auth'],
  title: 'Все',
  menuPosition: 0,
})

const isLoading = useStore(moviesStore.stores.$isLoading)
const data = useStore(moviesStore.computed.$moviesFiltered)

const query = useVModel(moviesStore.stores.$query)
</script>

<template lang="pug">
.loader(v-if="isLoading")
  Loader

.wrapper(v-else)
  .movies
    .filters
      .search-bar
        input(type="text", v-model="query")
        Icon.icon(name="SearchIcon")

    .grid-list
      ItemMovie(:key="movie.id", :movie="movie", :update-movie="moviesStore.events.updateMovie", v-for="movie in data")
</template>

<style scoped lang="scss">
.loader {
  @apply w-full flex self-center justify-center col-span-full;
}

.wrapper {
  @apply w-full min-h-full text-center;

  .filters {
    @apply mt-4 relative self-center flex-row flex justify-center items-center;

    .search-bar {
      @apply w-96 relative;

      .icon {
        @apply w-8 h-8 ml-4 absolute left-0 top-1/2 -translate-y-1/2;
      }
    }

    .done-filter {
      @apply ml-4 cursor-pointer transition-opacity w-12 h-12;

      &:hover {
        @apply opacity-75 #{!important};
      }

      &.on {
        @apply text-success;
      }

      &.off {
        @apply opacity-40;
      }
    }
  }

  .grid-list {
    @apply w-full grid grid-cols-auto justify-center gap-10 p-8 items-center;
    grid-template-columns: repeat(auto-fill, theme('spacing.64'));
  }
}
</style>
