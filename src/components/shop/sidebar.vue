<script setup lang="ts">
import { ref } from 'vue';

let collapsed = ref(false);



</script>

<template>
  <div :class="['col-auto', 'sidebar', collapsed ? 'sidebar-collapse' : '']">
    <div class="sidebar-item" @click="() => { collapsed = !collapsed }">
      <i :class="[!collapsed ? 'bi-arrow-bar-left' : 'bi-arrow-bar-right', 'me-2']" />
    </div>
    <hr />
    <div class="sidebar-item">
      <i class="bi-alarm me-2" />
      <span>Sidebar</span>
    </div>
    <div class="sidebar-item">
      <i class="bi-alarm me-2" />
      <span>Sidebar</span>
    </div>
    <div class="sidebar-item">
      <i class="bi-alarm me-2" />
      <span>Sidebar</span>
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