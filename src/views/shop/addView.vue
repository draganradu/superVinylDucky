<script setup lang="ts">
import ShopLayout from '@/layouts/shop/mainLayout.vue'
import { editItem } from '@/components/shop/crud/formStructure'
</script>

<template>
  <main>
    <ShopLayout :sidebar="true" id="product-main">
      Add new

      {{  editItem }}
      <!-- <div v-if="!product">Is not loaded</div>
      <div v-else-if="!edit">
        <ProductMainView :product="product" />
        <i v-if="isDebug" class="bi bi-pencil-square" @click="() => { edit = true }" />
      </div>
      <div v-else-if="edit && isDebug" class="col-12">
        <EditMainView :product="product" />
        <i v-if="isDebug" class="bi bi-pencil-square" @click="() => { edit = false }" />
      </div> -->
xx
    </ShopLayout>
  </main>
</template>