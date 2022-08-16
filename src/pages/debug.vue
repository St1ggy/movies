<script setup lang="ts">
import { useStore } from 'effector-vue/composition'

import { store } from '@/stores'

definePageMeta({
  title: 'DEBUG',
})

const { data, pending, error } = useFetch('/api/debug')

const genres = useStore(store.genres.stores.$genres)
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
