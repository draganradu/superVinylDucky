<script setup lang="ts">
import shopLayout from '@/layouts/ShopLayout.vue'
import Card from "@/scaffolding/Card.vue"

import { useStore } from 'vuex';
const store = useStore();
const { infoSections } = store.state.shop.extraInfo;


</script>

<template>
  <main>
    <shopLayout>
      <div class="row pb-5 a-clean">
        <div class="col-8">
          <Card v-for="(k, i) in infoSections" :key="i" class="mb-3">
            <h6 :id="i">{{ $t(i) }}</h6>
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
