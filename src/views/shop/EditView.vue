<script setup lang="ts">
import { editItem } from '@/components/shop/crud/formStructure'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import FormControl from '@/components/FormControl.vue'

// hooks ---------------------------------------
const store = useStore()
const route = useRoute()
const router = useRouter()

// methods ---------------------------------------
const submitForm = async (form: any) => {
  // set form
  await store.dispatch("shop/updateProduct", {
    product: form,
    id: props.product.dbID
  })
  // remove old product
  store.commit("shop/removeProduct", id)
  // change url
  router.push(`/en/stickers/${form.title}`)
  setTimeout(() => {
    location.reload()
  }, 100)
}

// props | params ------------------------------
const props = defineProps<{
  product: any
}>()
const id = route.params.id as string

</script>
<template>
  <FormControl :submitForm="submitForm" :data="{
    ...editItem,
    ...props.product,
  }" :exclude="['dbID']" submitText="Update" />
</template>