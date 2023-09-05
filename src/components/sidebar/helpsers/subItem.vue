<script setup lang="ts">
defineProps<{
  text?: string,
  icon?: string,
}>()

</script>

<template>
  <i :class="[icon || 'bi-diagram-3', 'me-2']" />
  <span>{{ text }}</span>
</template>