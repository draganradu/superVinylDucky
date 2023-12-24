<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { editItem, formHelper } from '@/components/shop/crud/formStructure'

// hooks ---------------------------------------
const store = useStore()
const route = useRoute()
const router = useRouter()

// methods ---------------------------------------
const sendForm = async () => {
  // set form
  await store.dispatch("shop/updateProduct", {
    product: form.value,
    id: props.product.dbID
  })
  // remove old product
  store.commit("shop/removeProduct", id)
  // change url
  router.push(`/en/stickers/${form.value.title}`)
  location.reload()
}

// props | params ------------------------------
const props = defineProps<{
  product: any
}>()
const id = route.params.id as string

// data ---------------------------------------
const form = ref<{ [n: string]: any }>(formHelper.toString({
  ...editItem,
  ...props.product,
}))


</script>
<template>
  <div v-for="(v, k) in form" :key="k">
    <!-- form exclude -->
    <div v-if="['dbID'].includes(k as string)" class="form-floating mb-3">

    </div>
    <!-- Normal input -->
    <div v-else-if="!['en', 'nl'].includes(k as string)" class="form-floating mb-3">
      <input type="text" class="form-control rounded-3" :id="(k as string)" v-model="form[k]">
      <label :for="(k as string)">{{ k }}</label>
    </div>

    <!-- EN description name -->
    <div v-else-if="['en', 'nl'].includes(k as string)">
      <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Leave a comment here" id="en-description"
          v-model="form[k].description" style="height: 100px"></textarea>
        <label for="en-description">{{ k }} >> Description</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control rounded-3" id="en-name" v-model="form[k].name">
        <label for="en-name">{{ k }} >> Name</label>
      </div>
    </div>
  </div>

  <span class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" @click="sendForm">
    Update
  </span>
</template>