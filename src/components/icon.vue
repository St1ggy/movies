<script setup lang="ts">
import * as Icon from '@heroicons/vue/solid'

defineProps<{ name: IconName }>()
</script>

<template lang="pug">
component(:is="Icon[name]")
</template>
