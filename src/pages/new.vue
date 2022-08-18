<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  title: 'Добавить',
})
</script>

<template lang="pug">
.wrapper Add movie
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex flex-grow flex-col items-center justify-center;
}
</style>
