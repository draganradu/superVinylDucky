<script setup lang="ts">
import { editItem } from '@/components/shop/crud/formStructure'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import FormControl from '@/components/FormControl.vue'
import ShopLayout from '@/layouts/shop/mainLayout.vue'

// hooks ---------------------------------------
const store = useStore()
const router = useRouter()

// methods ---------------------------------------
const submitForm = async (form: any) => {
  // set form
  await store.dispatch("shop/addProduct", {
    product: form,
  })
  // change url
  router.push(`/en/stickers/${form.title}`)
  // location.reload()
}
</script>

<template>
  <main>
    <ShopLayout :sidebar="true" id="product-main" :only-on-develop="true">
      <FormControl 
      :submitForm="submitForm" 
      :data="editItem" 
      :exclude="['dbID']" 
      submitText="Add Product" />
    </ShopLayout>
  </main>
</template>
