<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

// hooks ---------------------------------------
const store = useStore()
const route = useRoute()
const router = useRouter()

// methods ---------------------------------------
const sendForm = async () => {
  // set form
  await store.dispatch("shop/updateProduct", { product: form.value, id: props.product.dbID })
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

const size = props.product?.size || [0, 0]
const en = props.product?.en || { description: "", name: "" }
const nl = props.product?.nl || { description: "", name: "" }
const id = route.params.id as string

// data ---------------------------------------
const form = ref({
  title: props.product.title,
  en,
  nl,
  buyLink: props.product.buyLink,
  // to add description
  category: (props.product.category || ["sticker"]).join(", "),
  colors: (props.product.colors || ["black"]).join(", "),
  img: (props.product.img || []).join(", "),
  material: props.product.material || "Oracal 651",
  price: props.product.price || 0,
  sizeL: size[0],
  sizeH: size[1],
})


</script>
<template>
  <div v-for="(v, k) in form" :key="k">
    <!-- Normal input -->
    <div v-if="!['en', 'nl'].includes(k)" class="form-floating mb-3">
      <input type="text" class="form-control rounded-3" :id="k" v-model="form[k]">
      <label :for="k">{{ k }}</label>
    </div>

    <!-- EN description name -->
    <div v-else-if="['en', 'nl'].includes(k)">
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
    Send
  </span>
</template>