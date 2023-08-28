<script setup lang="ts">
import SubItem from "./subItem.vue"
defineProps<{
  text?: string,
  icon?: string,
  to?: string,
}>()

</script>

<template>
  <div class="sidebar-item">
    <RouterLink :to="to" v-if="to">
      <SubItem  :icon="icon" :text="text || to" />
    </RouterLink>
    <div v-else>
      <SubItem  :icon="icon" :text="text || to" />
    </div>
  </div>
</template>