<template lang="pug">
.toolbar
  .toolbar-item.left
    slot(name="left")
  .toolbar-item.large.center
    slot(name="center")
  .toolbar-item.right
    slot(name="right")
</template>

<style lang="scss">
.toolbar {
  @apply w-full flex-row flex justify-center items-center h-16 px-8 py-2;

  &-item {
    @apply flex flex-1 h-full flex-row items-center;

    &.center {
      @apply justify-center;
    }

    &.left {
      @apply justify-start;
    }

    &.right {
      @apply justify-end;
    }

    &.large {
      @apply flex-[2];
    }
  }
}
</style>
