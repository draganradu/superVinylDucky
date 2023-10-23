<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useStore } from 'vuex'
import Card from "@/scaffolding/Card.vue"
import shopLayout from '@/layouts/ShopLayout.vue'

// storeData ---------------------------------------
const store = useStore()
const { infoSections } = store.state.shop.extraInfo

// seo ---------------------------------------
useHead({
  title: 'Information regarding Vinyl Ducky'
})
</script>

<template>
  <main>
    <shopLayout>
      <div class="row pb-5 a-clean">
        <div class="col-8">
          <Card v-for="(k, i) in infoSections" :key="i" class="mb-3">
            <h6 :id="i.toString()">{{ $t(i.toString()) }}</h6>
            <p>{{ k }}</p>
          </Card>
        </div>
        <div class="col-4">
          <Card> Sidebar </Card>
        </div>
      </div>
    </shopLayout>
  </main>
</template>
