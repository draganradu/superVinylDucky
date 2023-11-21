<script setup lang="ts">
import { useRoute } from 'vue-router'
import Container from '@/scaffolding/Container.vue'
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import EditMode from "@/components/tools/edit.vue"

// hooks ---------------------------------------
const store = useStore()
const route = useRoute()

// props | params ------------------------------
const prodID = route.params.id as string

// events ---------------------------------------
onMounted(async () => {
  await store.dispatch('tools/callTools')
})

// data ---------------------------------------
const tools = computed(() => store.getters['tools/getTool'](prodID))
const edit = ref(false)

</script>

<template>
  <Container color="bg-body-secondary main-page">
    <div class="row pt-5">
      <Sidebar />
      <div class="col-11">
        <div v-if="!edit" class="row">
          <div class="a-clean">
            <RouterLink to="/tools/all"><i class="bi bi-arrow-return-left me-2"></i></RouterLink>
            <i class="bi bi-pencil-square" @click="() => { edit = !edit }"></i>
          </div>
          <h6>{{ prodID }}</h6>
          <h1>{{ tools.Maker }} {{ tools.Name }}</h1>
          <ul class="list-group list-group-flush a-clean">
            <li class="list-group-item" v-for="(v, k) in tools" :key="k" :id="`field-${k}`">
              <b>{{ k }}</b> {{ v }}
            </li>
          </ul>
        </div>
        <div v-else>
          <div><i class="bi bi-x-square-fill" @click="() => { edit = !edit }"></i></div>
          <EditMode />
        </div>
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
#field {
  &-owner,
  &-private {
  display: none;
}
}
</style>