<script setup lang="ts">
defineProps<{
  fluid?: boolean
  color?: string
}>()
</script>

<template>
  <div :class="[color || 'bg-transparent' ]">
    <div :class="[fluid ? 'container-fluid' : 'container']">
    <div class="row">
        <slot />
    </div>
    </div>
  </div>
</template>