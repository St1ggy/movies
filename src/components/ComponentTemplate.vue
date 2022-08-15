<script setup lang="ts">
withDefaults(defineProps<{ test: string }>(), { test: 'TEMPLATE' })
</script>

<template lang="pug">
div {{ test }}
</template>
