<script setup lang="ts">
import container from '@/scaffolding/Container.vue'
import Header from '@/components/store/header.vue'
</script>

<template>
  <div>
    <Header />
    <container>
      <div class="col-2">Sidebar</div>
      <div class="col-8">
        <slot />
      </div>
    </container>
    footer
  </div>
</template>