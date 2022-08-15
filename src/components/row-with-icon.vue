<script setup lang="ts">
defineProps<{ iconName: IconName; text: string }>()
</script>

<template lang="pug">
.row
  Icon.icon(:name="iconName")
  | {{ text }}
</template>

<style scoped lang="scss">
.row {
  @apply flex flex-row justify-center items-center;

  .icon {
    @apply w-4 h-4 mr-1;
  }
}
</style>
