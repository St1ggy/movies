<script setup lang="ts">
const {
  public: { tmdbImagePath },
} = useRuntimeConfig()
defineProps<{ src: string }>()
</script>

<template lang="pug">
img(:src="`${tmdbImagePath}${src}`")
</template>
