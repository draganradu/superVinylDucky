<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import EditMainView from './EditView.vue'
import ProductMainView from './ProductMain.vue'
import ShopLayout from '@/layouts/shop/main.vue'

// hooks ---------------------------------------
const store = useStore()
const route = useRoute()

// events ---------------------------------------

onMounted(async () => {
  if (!store.getters['shop/getProduct'](route.params.id)) {
    await store.dispatch('shop/callProducts')
  }
})

// data ---------------------------------------
const product = computed(() => store.getters['shop/getProduct'](route.params.id) || {})

const { price = 0, } = product.value
const { name = route.params.id } = product.value[route.params.locale as string] || {}

const description = computed(() => product.value[route.params.locale as string]?.description)
const subtitle = computed(() => product.value[route.params.locale as string]?.subtitle)

const { isDebug } = store.state.user
const edit = ref(false)

// seo ---------------------------------------
useHead({
  title: `€ ${price} , ${name} , ${subtitle.value}`,
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
})

</script>

<template>
  <main>
    <ShopLayout :sidebar="true" id="product-main">
      <div v-if="!product">Is not loaded</div>
      <div v-else-if="!edit">
        <ProductMainView :product="product" />
        <i v-if="isDebug" class="bi bi-pencil-square" @click="() => { edit = true }" />
      </div>
      <div v-else-if="edit && isDebug" class="col-12">
        <EditMainView :product="product" />
        <i v-if="isDebug" class="bi bi-pencil-square" @click="() => { edit = false }" />
      </div>

    </ShopLayout>
  </main>
</template>

<style lang="scss">
// grid ------------------------

#product-main {
  .price span {
    background-color: gray;
    padding: 10px;
    color: white;
    font-size: 1.6em;
  }

  .list-group,
  .list-group li {
    background-color: transparent !important;
  }

  .list-group li {
    border-color: gray;
  }

  .list-group li b {
    font-weight: 600;
  }

  .sku {
    font-size: 0.8em;
    margin-bottom: 0;
  }

  .badge.red {
    background-color: red !important;
  }

  .badge.gold {
    background-color: gold !important;
    color: black !important;
  }


  .badge.pink {
    background-color: pink !important;
    color: black !important;
  }

  .badge.magenta {
    background-color: magenta !important;
    color: black !important;
  }


  .badge.transparent {
    background-color: transparent !important;
    border: 1px solid black;
    color: black !important;
  }
}
</style>
