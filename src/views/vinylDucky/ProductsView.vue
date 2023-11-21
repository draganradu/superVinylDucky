<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ShopLayout from '@/layouts/ShopLayout.vue'

import ProductMainView from './ProductMain.vue'

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


const { id, img, price = 0, size, colors, printReverse, category, buyLink, material } = product.value
const { name = route.params.id } = product.value[route.params.locale as string] || {}

const description = computed(() => product.value[route.params.locale as string]?.description)
const subtitle = computed(() => product.value[route.params.locale as string]?.subtitle)

const { email } = store.state.shop.contact





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
      <div v-else>
        ProdLoaded
        <ProductMainView :product="product" />
      </div>

      <!-- <div class="row">
        <div :class="[isFullScreen ? 'col-12' : 'col-md-4', 'product-grid']">
          <div class="product-img bg-secondary bg-opacity-25 border shadow" v-for="(i, k) in collapsed" :key="k"
            @click="setImg(i)" :style="`background-image: url(https://vinylducky.nl/product-img/${i})`">
            <img :src="`https://vinylducky.nl/product-img/${i}`" />
          </div>
        </div>
        <div :class="[isFullScreen ? 'col-12' : 'col-md-6']">
          <p class="sku">SKU: {{ id }}</p>
          <h1>{{ name }}</h1>
          <p>{{ subtitle }}</p>
          <hr />
          <div class="row">
            <div class="col-md mb-3">
              <p class="price mb-5"><span>€ {{ price }}<sup>00</sup> </span></p>

              <ul class="list-group list-group-flush bg-transparent text-break-spaces">
                <ListGroup label="Size" :value="size" />
                <li v-if="colors" class="list-group-item">Color:
                  <Color v-for="i in colors" :key="i" :color="i" />
                </li>
                <ListGroup v-else label="Color" value="Any" />

                <ListGroup v-if="printReverse" label="Print Revers" value="optional" />
                <ListGroup label="Material" :value="material" />
                <ListGroup :value="description" light />
                <li class="list-group-item">
                  <a :href="`mailto:${email}`" target="_blank" class="btn btn-outline-dark mt-3">Something custom</a>
                </li>
              </ul>

            </div>
            <div class="col-auto" v-if="product?.buyLink && price">
              <a type="button" :href="buyLink" target="_blank" class="btn btn-outline-success">Buy Now</a>
            </div>
            <div class="col-auto" v-else> Out of Stock</div>
          </div>
        </div>
        <div v-if="category" class="mt-5">Category:
          <span class="badge text-bg-primary me-1" v-for="i in category" :key="i">{{ i }}</span>
        </div>
      </div>-->
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
