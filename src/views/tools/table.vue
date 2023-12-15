<script setup lang="ts">
// 0.0.8 ----------------------------------------
import { computed, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { useStore } from 'vuex'
import Container from '@/scaffolding/Container.vue'
import NotificationService from "@/components/tools/notificationService.vue"
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import type { groupToolType } from '@/store/tools/type'

// hooks ----------------------------------------
const store = useStore()

// events ---------------------------------------
onMounted(async () => {
  await store.dispatch('tools/callTools')
})

// methods --------------------------------------
const buildHear = () => {
  // TODO ECBGI-75
  return ["ID", "usage", "size", "maker", "model"]
}

// store / props / params -----------------------
const tools = computed<groupToolType>(() => store.getters['tools/getTools'])

// logic ----------------------------------------
const keysList = buildHear()

// seo ------------------------------------------
useHead({
  title: 'Table view of tools',
  meta: [
    {
      name: 'description',
      content: "All tools in a table vue"
    },
  ],
})

</script>

<template>
  <Container color="bg-body-secondary main-page">
    <NotificationService />
    <div class="row pt-5">
      <Sidebar />
      <div class="col-11">
        <div class="row">
          <table class="table">
            <thead>
              <tr>
                <th v-for="k in keysList" :key="k">{{ k }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in tools" :key="i.ID">
                <td v-for="k in keysList" :key="k">{{ i[k] }}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Container>
</template>