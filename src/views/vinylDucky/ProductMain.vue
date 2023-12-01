<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import ListGroup from '@/components/shop/helper/productList.vue'
import Color from '@/components/shop/helper/color.vue'

// hooks ---------------------------------------
const store = useStore()
const route = useRoute()

// props | params ------------------------------
const props = defineProps<{
  product: any
}>()

const lang = route.params.locale as string

// data ---------------------------------------
let isFullScreen = computed(() => store.getters['shop/getLogic'].isFullscreen)
const dbID = computed(() => props.product.dbID)
let collapsed = computed(() => props.product?.img || ["placeholder.png"])
const setImg = (newHero: string) => {
  if (collapsed.value[0] === newHero) {
    store.commit('shop/toggleFullScreen')
  } else {
    store.commit('shop/setHeroImg', { product: route.params.id, img: newHero })
  }
}
const { email } = store.state.shop.contact

const size = () => {
  if (Array.isArray(props.product.size)) {
    if (props.product.size[0] > 0 && props.product.size[1] > 0) {
      return props.product.size.join("x") + " cm"
    }
  }
  return props.product.size
}


</script>
<template>
  <div class="row" v-if="props.product.dbID">
    <div :class="[isFullScreen ? 'col-12' : 'col-md-4', 'product-grid']">
      <div class="product-img bg-secondary bg-opacity-25 border shadow" v-for="(i, k) in collapsed" :key="k"
        @click="setImg(i)" :style="`background-image: url(https://vinylducky.nl/product-img/${i})`">
        <img :src="`https://vinylducky.nl/product-img/${i}`" />
      </div>
    </div>
    <div :class="[isFullScreen ? 'col-12' : 'col-md-6']">
      <!-- <p class="sku">SKU: {{ id }}</p> -->
      <h1>{{ product[lang]?.name || product.title }}</h1>
      <p>{{ product[lang]?.subtitle }}</p>
      <hr />
      <div class="row">
        <div class="col-md mb-3">
          <p class="price mb-5"><span>€ {{ product.price }}<sup>00</sup> </span></p>

          <ul class="list-group list-group-flush bg-transparent text-break-spaces">
            <ListGroup label="Size" :value="size()" />
            <li v-if="product.colors" class="list-group-item">Color:
              <Color v-for="i in product.colors" :key="i" :color="i" />
            </li>
            <ListGroup v-else label="Color" value="Any" />

            <ListGroup v-if="product.printReverse" label="Print Revers" value="optional" />
            <ListGroup label="Material" :value="product.material" />
            <ListGroup :value="product[lang]?.description" light />
            <li class="list-group-item">
              <a :href="`mailto:${email}`" target="_blank" class="btn btn-outline-dark mt-3">Something custom</a>
            </li>
          </ul>

        </div>
        <div class="col-auto" v-if="product.buyLink && product.price">
          <a type="button" :href="product.buyLink" target="_blank" class="btn btn-outline-success">Buy Now</a>
        </div>
        <div class="col-auto" v-else> Out of Stock</div>
      </div>
    </div>
    <div v-if="product.category" class="mt-5">Category:
      <span class="badge text-bg-primary me-1" v-for="i in product.category" :key="i">{{ i }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 10px;

  &>div:first-child {
    grid-column: span 3;
  }
}

// img ------------------------

.product-img {
  border: 1px solid gray;
  background-size: cover;
  background-position: center center;

  img {
    opacity: 0;
  }
}
</style>