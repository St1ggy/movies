<script lang="ts" setup>
import { store } from '@/stores'

onMounted(store.events.init)

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  bodyAttrs: {},
})
</script>

<template lang="pug">
#app
  Head
    Title {{ $route.meta.title }} | Movies

  NuxtPage
</template>
