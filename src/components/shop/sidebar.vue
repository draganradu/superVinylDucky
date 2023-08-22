<script setup lang="ts">
import { ref } from 'vue';

let collapsed = ref(true);

</script>

<template>
  <div :class="['col-auto', 'sidebar', collapsed ? 'sidebar-collapse' : '', 'a-clean']">
    <div class="sidebar-item" @click="() => { collapsed = !collapsed }">
      <i :class="[!collapsed ? 'bi-arrow-bar-left' : 'bi-arrow-bar-right', 'me-2']" />
    </div>
    <hr />
    <div class="sidebar-item">
      <RouterLink :to="`/en/radu-dragan/`">
        <i class="bi-file-earmark-person me-2" />
        <span>CV</span>
      </RouterLink>
    </div>
    <div class="sidebar-item">
      <RouterLink to="/site-map/">
        <i class="bi-diagram-3 me-2" />
        <span>Sitemap</span>
      </RouterLink>
    </div>

    <hr />
    <div class="sidebar-item">
      <i class="bi-person-badge-fill me-2" />
      <span>Login</span>
    </div>

  </div>
</template>

<style >
.sidebar-collapse span {
  display: none;
}
</style>