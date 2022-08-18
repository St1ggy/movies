<script setup lang="ts">
import { MovieDetails } from '@/models'

defineProps<{ details: MovieDetails }>()
</script>

<template lang="pug">
.flex.flex-row
  .genre(:key="genre.id", :style="{ backgroundColor: genre.color }", v-for="genre in details.genres") {{ genre.name }}

.flex.flex-row
  ItemJson(:data="details", title="movie")
</template>

<style lang="scss">
.genre {
  @apply px-2 h-6 rounded-full mx-2 flex items-center;
}
</style>
