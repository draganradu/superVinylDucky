<script setup lang="ts">
defineProps<{
  icon: string,
  title: string,
  text: string,
}>()
</script>
<template>
  <div class="col-4 d-flex align-items-start">
    <i :class="icon"></i>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
i {
  font-size: 1.2em;
  margin-right: 10px;
}
</style>