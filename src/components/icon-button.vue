<script setup lang="ts">
defineProps<{ name: IconName }>()
</script>

<template lang="pug">
icon.icon(:name="name")
</template>

<style lang="scss">
.icon {
  @apply cursor-pointer w-12 h-12;
}
</style>
