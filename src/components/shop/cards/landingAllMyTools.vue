<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CardTool from "@/components/tools/helpers/card.vue"
import type { groupToolType, toolType } from "@/store/tools/type"

// hooks ---------------------------------------
const store = useStore()

// events ---------------------------------------
onMounted(async () => {
  await store.dispatch('tools/callTools')
})

// data ---------------------------------------
const tools = computed<groupToolType>(() => store.getters['tools/getTools'])

const removeTool = async (id: toolType) => {
  if (id) {
    store.commit('user/SetAlert', { text: `Removed ${id.ID}`, type: "danger", autoRemove: true, hiden: false })
    await store.dispatch('tools/RemoveTools', id)
  }
}

// methods ---------------------------------------


</script>

<template>
  <CardTool title="My tools" :isLoading="!Object.keys(tools).length">
    <ul class="list-group list-group-flush a-clean">
      <li class="list-group-item d-flex" v-for="i in tools" :key="i.ID">
        <RouterLink class="grow-1" :to="`id/${i.ID}`">{{ [i.ID, i.maker, i.model].join(" | ") }}
        </RouterLink>
        <i class="bi bi-x-circle" @click="removeTool(i)"></i>
      </li>
    </ul>
    <hr />
    <div class="text-end">
      <small class="a-clean">
        <RouterLink to="/tools/table">See as table</RouterLink>
      </small>
    </div>
  </CardTool>
</template>

<style>
.grow-1 {
  flex-grow: 1;
}
</style>