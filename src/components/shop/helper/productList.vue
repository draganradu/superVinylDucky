<script setup lang="ts">
// props | params ------------------------------
const props = defineProps<{
  fallback?: string
  label?: string,
  light?: boolean
  value?: any,
}>()

// data ---------------------------------------
let absValue = props.value || props.fallback

if(Array.isArray(absValue)) {
  absValue = absValue.join(',')
}

</script>
<template>
  <li v-if="absValue" class="list-group-item">
    <span class="label" v-if="props.label">{{ props.label }}: </span>
    <span class="label-value-light" v-if="props.light">{{ absValue }}</span>
    <b class="value" v-else>{{ absValue }}</b>
  </li>
</template>