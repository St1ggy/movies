<script setup lang="ts">
import { Movie } from '@/models'

defineProps<{ movie: Readonly<Movie> }>()
</script>

<template lang="pug">
nuxt-link.movie(:to="`/${paramByType[movie.type]}/${movie.id}`")
  img.image(:src="getImagePath(movie.posterPath)", v-if="movie.posterPath")

  .content
    h4.title {{ movie.localizedTitle ?? '-' }}
    h5.subtitle(v-if="movie.originalTitle.length") {{ movie.originalTitle }}
    h5.subtitle {{ movie.releaseDate }}
</template>

<style scoped lang="scss">
.movie {
  @apply flex flex-col justify-end rounded-3xl overflow-hidden relative aspect-[2/3];

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
      @apply font-black text-primary;
    }

    .subtitle {
      @apply font-semibold text-secondary;
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
