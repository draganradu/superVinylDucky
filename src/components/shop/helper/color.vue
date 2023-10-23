<script setup lang="ts">
defineProps<{
  color?: string,
}>()

const mapping = (color: string): string => {
  switch (color) {
    case "blue":
      return "text-bg-primary"
    case "gray":
    case "silver":
      return "text-bg-secondary"
    case "green":
      return "text-bg-success"
    case "red":
      return "text-bg-danger"
    case "gold":
    case "yellow":
      return "text-bg-warning"
    case "black":
      return "text-bg-dark"
    case "white":
    case "transparent":
      return "bg-light outline"
    default:
      return "text-bg-primary"
  }
}
</script>
<template>
  <span :class="[mapping(color || 'black'), color, 'badge  me-1']">{{ color || 'black' }}</span>
</template>
<style scoped lang="scss">
.badge {
  z-index: 2;
}

.bg-light.outline {
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
}

.badge.white {
  background-color: white!important;
  color: rgba(0, 0, 0, 1)!important;
}

.badge.gold {
  background-color: gold!important;
  color: rgba(0, 0, 0, 0.6)!important;
}
</style>