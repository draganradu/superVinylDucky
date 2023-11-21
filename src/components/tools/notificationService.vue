<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { type alerts } from '@/store/user/type'

// hooks ---------------------------------------
const store = useStore()

// data ---------------------------------------
const notifications = computed<alerts[]>(() => store.getters['user/getAlerts'])

</script>

<template>
  <div class="notification-service">
    <div v-for="(v,k) in notifications" :key="k" :class="`alert alert-${v.type} show-${v.hiden ? 'x': 'y'}`" role="alert">
      {{ v.text }} 
    </div>
  </div>
</template>

<style>
.notification-service {
  position: fixed;
  width: 90vw;
  left: 5vw;
  top: 20px;
  right: 0px;
  z-index: 1000;
}

.show-x {
  display: none;
}
</style>