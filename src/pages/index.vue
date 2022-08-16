<script setup lang="ts">
import { useStore, useVModel } from 'effector-vue/composition'

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
.loader(v-if="isLoading")
  Loader

.wrapper(v-else)
  .movies
    .filters
      .search-bar
        input(type="text", v-model="query")
        Icon.icon.left(name="SearchIcon")
        Icon.icon.right.cursor-pointer(@click="query = ''", name="XCircleIcon", v-if="query.length")

    .grid-list
      ItemMovie(
        :key="movie.id",
        :movie="movie",
        :update-movie="store.movies.events.updateMovie",
        v-for="movie in data"
      )
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
      @apply w-96 relative text-page;

      input {
        @apply px-14;
      }

      .icon {
        @apply w-8 h-8 mx-4 absolute top-1/2 -translate-y-1/2;

        &.left {
          @apply left-0;
        }

        &.right {
          @apply right-0;
        }
      }
    }
  }

  .grid-list {
    @apply w-full grid grid-cols-auto justify-center gap-10 p-8 items-center;
    grid-template-columns: repeat(auto-fill, theme('spacing.64'));
  }
}
</style>
