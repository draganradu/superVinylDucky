<script setup lang="ts">
defineProps<{
  label?: string,
  value?: any,
  fallback?: string
  light?: boolean
}>()
</script>
<template>
  <li v-if="value || fallback" class="list-group-item">
    <span v-if="label">{{ label }}: </span>
    <span v-if="light">{{ value || fallback }}</span>
    <b v-else>{{ value || fallback }}</b>
  </li>
</template>