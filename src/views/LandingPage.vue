
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const one = 1

const count = computed(() => store.getters.doneTodos)
const increse = () => store.commit('increment')

</script>

<template>
  <main>
    Landing Page {{ one }}
    <hr />
    <span @click="$store.commit('increment')"> >> {{ count }}</span>
    <br />
    <span @click="increse"> >2> {{ count }}</span>
  </main>
</template>
