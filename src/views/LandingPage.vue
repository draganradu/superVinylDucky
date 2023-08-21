
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import shopLayout from '@/layouts/ShopLayout.vue'

const store = useStore()
const one = 1

const count = computed(() => store.getters.doneTodos)
const increse = () => store.commit('increment')

</script>

<template>
  <main>
    <shopLayout>
    Landing Page {{ one }}
    <hr />
    <span @click="$store.commit('increment')"> >> {{ count }}</span>
    <br />
    <span @click="increse"> >2> {{ count }}</span>
    </shopLayout>
  </main>
</template>
