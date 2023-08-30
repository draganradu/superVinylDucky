<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue';
import Item from './helpsers/sidebarItem.vue'
const store = useStore()

let collapsed = ref(true);

const isLogin = computed(() => store.getters['user/isLoggedIn'])
const logout = () => {
  store.commit('user/SET_login', false);
}
</script>

<template>
  <div :class="['col-auto', 'sidebar', collapsed ? 'sidebar-collapse' : '', 'a-clean']">
    <div @click="() => { collapsed = !collapsed }">
      <Item :icon="!collapsed ? 'bi-arrow-bar-left' : 'bi-arrow-bar-right'" />
    </div>
    <hr />
    <Item to="/en/radu-dragan/" text="CV" icon="bi-file-earmark-person" />
    <Item to="/site-map/" text="Sitemap" />

    <hr />
    <div v-if="!isLogin" class="sidebar-item">
      <Item to="/tools/login/" text="Login" icon="bi-person-badge-fill" />
    </div>
    <div v-else class="sidebar-item">
      <Item @click="logout" text="Logout" icon="bi-emoji-dizzy-fill" />
    </div>

  </div>
</template>

<style >
.sidebar-collapse span {
  display: none;
}
</style>