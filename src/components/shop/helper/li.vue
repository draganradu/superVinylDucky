<script setup lang="ts">
defineProps<{
  url: string
  title: string
}>()
</script>

<template>
  <li>
    <RouterLink class="nav-link px-2 link-dark" :to="url">{{ title }}</RouterLink>
  </li>
</template>