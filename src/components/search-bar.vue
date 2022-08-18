<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
const update = (value: string) => emit('update:modelValue', value)
</script>

<template lang="pug">
.search-bar
  input(:value="modelValue", @input="update($event.target.value)", type="text")
  Icon.icon.left(name="SearchIcon")
  Icon.icon.right.cursor-pointer(@click="update('')", name="XCircleIcon", v-if="modelValue.length")
</template>

<style lang="scss">
.search-bar {
  @apply max-w-96 w-full h-full relative text-page;

  & > input {
    @apply h-full;
  }

  & > .icon {
    @apply w-8 h-8 mx-4 absolute top-1/2 -translate-y-1/2;

    &.left {
      @apply left-0;
    }

    &.right {
      @apply right-0;
    }
  }
}
</style>
