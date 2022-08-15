<script setup lang="ts">
defineProps<{
  movie: Readonly<TMovie>
  updateMovie(updatedMovie: TUpdatedMovie): void
}>()

const {
  public: { tmdbImagePath },
} = useRuntimeConfig()
</script>

<template lang="pug">
NuxtLink.movie(:to="`/movie/${movie.id}`")
  img.image(:src="`${tmdbImagePath}${movie.posterUrl}`", v-if="movie.posterUrl")

  .content
    h2.title {{ movie.localizedTitle ?? '-' }}
    h3.subtitle {{ movie.originalTitle ?? '-' }}
</template>

<style scoped lang="scss">
.movie {
  @apply flex flex-col w-64 justify-end rounded-3xl overflow-hidden relative aspect-[2/3];

  img {
    @apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2;
  }

  &:hover {
    .content {
      @apply translate-y-0;
    }

    .done-indicator {
      @apply opacity-40;

      &:hover {
        @apply opacity-75;
      }
    }
  }

  .content {
    @apply w-full flex flex-col items-center text-center bg-page/40 p-2 translate-y-full transition-transform;
    backdrop-filter: blur(32px);

    .title {
      @apply font-black;
    }

    .subtitle {
      @apply font-semibold;
    }
  }

  .done-indicator {
    @apply absolute top-2 right-2 w-8 h-8 text-success opacity-0 transition-opacity;

    &.show {
      @apply opacity-100 #{!important};
    }
  }
}
</style>
