<script setup lang="ts">
import CardTool from "@/components/tools/helpers/card.vue"
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

// hooks ---------------------------------------
const store = useStore()

// events ---------------------------------------
onMounted(async () => {
  await store.dispatch('tools/callTools')
})

// data ---------------------------------------
const tools = computed(() => store.getters['tools/getTools'])

</script>

<template>
  <CardTool title="My tools" :isLoading="!tools">
    <ul class="list-group list-group-flush a-clean">
      <li class="list-group-item" v-for="i in tools" :key="i.ID">
        <RouterLink :to="`id/${i.ID}`">{{ i.ID }} | {{ i.Name }}</RouterLink> XX
      </li>
    </ul>
  </CardTool>

</template>