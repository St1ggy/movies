<template lang="pug">
.loader
</template>

<style scoped lang="scss">
.loader {
  @apply flex justify-center items-center animate-spin;

  &:after {
    content: '';
    @apply inline-block w-12 h-12 border-4 rounded-full border-success border-t-[transparent];
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
