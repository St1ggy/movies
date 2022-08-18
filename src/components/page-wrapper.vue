<script setup lang="ts">
defineProps<{ loading: boolean }>()
</script>

<template lang="pug">
.screen
  toolbar(v-if="$slots['toolbar-left'] || $slots['toolbar-center'] || $slots['toolbar-right']")
    template(#left)
      slot(name="toolbar-left")
    template(#center)
      slot(name="toolbar-center")
    template(#right)
      slot(name="toolbar-right")

  .loader(v-if="loading")
    loader

  .wrapper(v-else)
    slot(name="default")
</template>

<style scoped lang="scss">
.screen {
  @apply w-full h-screen flex flex-col overflow-hidden;

  .loader {
    @apply w-full flex self-center justify-center col-span-full;
  }

  .wrapper {
    @apply overflow-auto;
  }
}
</style>
