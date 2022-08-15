<script setup lang="ts">
import { useStore } from 'effector-vue/composition'

import { genresStore } from '@/stores'

definePageMeta({
  title: 'DEBUG',
  menuPosition: process.dev ? 2 : undefined,
})

const { data, pending, error } = useFetch('/api/debug')

const genres = useStore(genresStore.stores.$genres)
</script>

<template lang="pug">
.wrapper(v-if="!pending")
  ItemJson(:data="data", title="DATA", v-if="data")
  ItemJson(:data="genres", title="GENRES", v-if="data")
  ItemJson(:data="error", title="ERROR", v-if="error")
</template>

<style scoped lang="scss">
.wrapper {
  @apply w-full min-h-full text-center flex flex-row;
}
</style>
