<script setup lang="ts">
defineProps<{ title: string; data: object }>()
</script>

<template lang="pug">
.flex-col.flex-1
  h2 {{ title }}
  json-pretty(:data="data", :deep="10", :showDoubleQuotes="false", showLength)
</template>
