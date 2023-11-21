<script setup lang="ts">

defineProps<{
  title: string,
  isLoading?: boolean,
}>()
</script>

<template>
  <div class="col-6 bg-body-secondary mb-4" v-if="!isLoading">
    <div class="bg-white rounded-4 shadow">
      <div v-if="title" class="p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">{{ title }}</h1>
      </div>

      <div :class="['p-5', title ? 'pt-0' : '']">
        <slot />
      </div>
    </div>
  </div>
  <div class="col-6 bg-body-secondary mb-4" v-else>
    <div class="bg-white rounded-4 shadow">
      <div :class="['p-5']">Is Loading</div>
    </div>
  </div>
</template>