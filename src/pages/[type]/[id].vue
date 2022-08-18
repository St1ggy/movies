<script setup lang="ts">
import { useStore } from 'effector-vue/composition'

import { store } from '@/stores'

const id = useParamsId()
const type = useParamsType()

definePageMeta({
  middleware: ['auth'],
  title: 'Страница фильма',
})

const isLoading = useStore(store.movie.stores.$isLoading)
const details = useStore(store.movie.stores.$details)

const fetchMovie = () => store.movie.events.getDetails({ id, type })

onMounted(fetchMovie)
onUnmounted(store.movie.events.clearMovie)

useHead({
  titleTemplate: () => details.value?.titles.title ?? 'Загрузка...',
})
</script>

<template lang="pug">
page-wrapper(:loading="isLoading")
  template(#toolbar-left)
    nuxt-link(to="/")
      icon-button(name="ChevronLeftIcon")

  template(#toolbar-center)
    .flex-col
      h3.toolbar-title {{ details?.titles.title }}
      h5.toolbar-subtitle {{ details?.titles.subtitle }}

  .content(:style="{ 'background-image': `url(${getImagePath(details.backdropPath)})` }", v-if="details")
    details-series(:details="details", v-if="isSeries(details)")
    details-movie(:details="details", v-if="isMovie(details)")
</template>

<style scoped lang="scss">
.content {
  @apply bg-fixed bg-no-repeat bg-top bg-cover;

  &:before {
    content: '';
    @apply bg-opacity-80 bg-page absolute w-full h-full backdrop-blur;
  }
}

.toolbar {
  &-title {
    @apply text-center text-primary;
  }

  &-subtitle {
    @apply text-center text-secondary;
  }
}

.content {
  @apply flex flex-col overflow-scroll;
}
</style>
