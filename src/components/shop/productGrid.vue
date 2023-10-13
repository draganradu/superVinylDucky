<script setup lang="ts">
import Color from '@/components/shop/helper/color.vue'
import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const store = useStore();
const getProducts = store.getters['shop/getProductsGrid'];
</script>

<template>
  <div id="productGrid" class="mt-5 d-grid a-clean">
    <RouterLink v-for="(i, k) in getProducts" :key="k" class="grid-item rounded-4 card shadow overflow-hidden"
      :to="`/${locale}/stickers/${k}/`">
      <div class="container-colors hide" v-if="i.colors">
        <Color v-for="color in i.colors" :key="color" :color="color" />
      </div>
      <h3 class="name hide"> {{ i[locale]?.name }} </h3>
      <p class="description hide text-truncate-3"> {{ i[locale]?.description }}</p>
      <div class="bg-img" :style="`background-image: url(https://vinylducky.nl/product-img/${i.img[0]})`">
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
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