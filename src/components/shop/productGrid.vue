<script setup lang="ts">
import Color from '@/components/shop/helper/color.vue'
import { useStore } from 'vuex'
import { useI18n } from "vue-i18n"
import { computed, onMounted } from 'vue'

// hooks ---------------------------------------
const { locale } = useI18n()
const store = useStore()

// events ---------------------------------------
onMounted(async () => {
  await store.dispatch('shop/callProducts', 3)
})

// data ---------------------------------------
const getProducts = computed<any>(() => store.getters['shop/getProductsGrid'])
const keys = computed(() => Object.keys(getProducts.value || {}))

// methods ------------------------------------


</script>

<template>
  <div id="productGrid" class="mt-5 d-grid a-clean">
    <RouterLink v-for="i in keys" :key="i" class="grid-item rounded-4 card shadow overflow-hidden"
      :to="`/${locale}/stickers/${i}/`" v-show="!getProducts[i].devOnly">
      <div class="coming-soon" v-if="getProducts[i].upcoming">Coming soon</div>
      <div class="container-colors hide" v-if="getProducts[i].colors">
        <Color v-for="color in getProducts[i].colors" :key="color" :color="color" />
      </div>

      <h3 :class="['name hide', !getProducts[i].colors ? 'mt-5' : '']"> {{ getProducts[i][locale]?.name || i }} </h3>
      <p class="description hide text-truncate-3"> {{ getProducts[i][locale]?.description }}</p>
      <div v-if="getProducts[i].img" class="bg-img"
        :style="`background-image: url(https://vinylducky.nl/product-img/${getProducts[i].img[0]})`">
      </div>
      <div v-else class="bg-img" :style="`background-image: url(https://vinylducky.nl/product-img/placeholder.png)`">
      </div>
    </RouterLink>


    <button v-if="keys.length < 4" @click="() => { store.dispatch('shop/callProducts', 10) }" type="button"
      class="btn btn-outline-primary">Show All</button>

    <RouterLink v-else :to="`/${locale}/all-products/`" class="btn btn-outline-primary center-fix">
      <span>All products Tabel</span>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.center-fix {
  display: flex;

  span {
    margin: auto;
  }
}

#productGrid {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 15px;
  z-index: 10;
  position: relative;
}

@media (max-width: 992px) {
  #productGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  #productGrid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.grid-item {
  border: 1px solid white;
  background-color: white;
  min-height: 400px;
  z-index: 1;
  padding: 20px;
}

.grid-item {

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}



.grid-item .hide {
  opacity: 0;
}

.grid-item:hover .hide {
  opacity: 1;
}

.coming-soon {
  opacity: 1 !important;
  z-index: 10;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  font-size: 2em;
}

.grid-item:hover .bg-img {
  opacity: 0.2;
}

.bg-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}

.name {
  z-index: 3;
  margin-bottom: 0px;
}

.description {
  margin-bottom: 20px;
}

.container-colors {
  padding-bottom: 40px;
}
</style>