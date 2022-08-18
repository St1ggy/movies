<script setup lang="ts">
import { SeriesDetails } from '@/models'

defineProps<{ details: SeriesDetails }>()
</script>

<template lang="pug">
.flex.flex-row
  ItemJson(:data="details", title="series")
</template>
