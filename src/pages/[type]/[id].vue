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
const background = computed(() =>
  details.value ? `url(${getImagePath(details.value.backdropPath)}) no-repeat center center / cover` : '',
)

useHead({
  titleTemplate: () => details.value?.titles.title ?? 'Загрузка...',
})
</script>

<template lang="pug">
.wrapper
  .backdrop(:style="{ background }", v-if="details != null")
  .toolbar
    .flex-1
      NuxtLink(to="/")
        Icon.w-12.h-12(name="ChevronLeftIcon")

    .flex-col
      h3.title {{ details?.titles.title }} {{ backdropPath }}
      h5.subtitle {{ details?.titles.subtitle }}

    .flex-1

  Loader.loader(v-if="isLoading")

  .content(v-else-if="details")
    .flex.flex-row
      ItemJson(:data="details", title="Детали", v-if="!!details")
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-col flex-grow items-center relative h-screen;

  .backdrop {
    // TODO
    @apply h-full w-full absolute backdrop-filter blur brightness-50;
  }

  .loader {
    @apply flex-1 self-center;
  }

  .toolbar {
    @apply h-20 w-full flex items-center;

    .title {
      @apply text-center text-primary;
    }

    .subtitle {
      @apply text-center text-secondary;
    }
  }

  .content {
    @apply flex flex-col overflow-scroll;
  }
}
</style>
