<script setup lang="ts">
import Container from '@/scaffolding/Container.vue'
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import NotificationService from "@/components/tools/notificationService.vue"
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import type { groupToolType } from '@/store/tools/type'

// hooks ---------------------------------------
const store = useStore()

// events ---------------------------------------
onMounted(async () => {
  await store.dispatch('tools/callTools')
})

// data ---------------------------------------
const tools = computed<groupToolType>(() => store.getters['tools/getTools'])

const keysList = ["ID", "usage", "size", "maker", "model"]
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