<script setup lang="ts">
// 0.0.8 ----------------------------------------
import { computed, onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Container from '@/scaffolding/Container.vue'
import EditMode from "@/components/tools/edit.vue"
import Sidebar from "@/components/sidebar/sidebarTools.vue"

// hooks ----------------------------------------
const store = useStore()
const route = useRoute()

// events ---------------------------------------
onMounted(async () => {
  await store.dispatch('tools/callTools')
})

// store / props / params -----------------------
const prodID = route.params.id as string
const tools = computed(() => store.getters['tools/getTool'](prodID))

// logic ----------------------------------------
const edit = ref(false)

// seo ------------------------------------------
useHead({
  title: 'Get tools by ID',
  meta: [
    {
      name: 'description',
      content: "This are the tools by ID"
    },
  ],
})

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