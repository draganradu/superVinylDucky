<script setup lang="ts">
import { useStore } from 'vuex';

const lang = "en"; // to do get name
const store = useStore();
const getProducts = store.getters['shop/getProductsGrid'];
</script>

<template>
  <div id="productGrid" class="mt-3 d-grid a-clean">
    <RouterLink v-for="(i, k) in getProducts" :key="k" class="grid-item rounded-4 card shadow overflow-hidden"
      :to="`/${lang}/stickers/${k}/`">
      <div class="debug">{{ i }}</div>
      <h3 class="name"> {{ i[lang]?.name }} </h3>
      <p class="description"> {{ i[lang]?.description }}</p>
      <div class="colors">
        <div v-for="color in i.colors" :class="[color, 'product-color']">
          <span class="title">{{ color }}</span>
        </div>
      </div>
      <div class="bg-img" style="background-image: url(https://vinylducky.nl/grid/death_trap_vinyl_duckey_nl.jpg)">
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
#productGrid {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 15px;
}

/* .grid-item {
  min-height: 200px;
} */

.grid-item:hover .bg-img {
  opacity: 0.2;
}


.product-color {
  z-index: 10;
  position: relative;
}

.product-color .title {
  opacity: 0;
  font-size: 8px;
  position: absolute;
  bottom: 0px;
  left: 3px;
}

.product-color:hover .title {
  opacity: 1 !important;
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

.debug {
  z-index: 2;
  display: none;
}

.name {
  z-index: 3;
  padding-left: 20px;
  margin-top: 150px;
  margin-bottom: 0px;
}

.description {
  padding-left: 20px;
  margin-bottom: 20px;
}

.colors {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
}

.product-color {
  background-color: red;
  margin-left: 10px;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  overflow: hidden;
}

.product-color.black {
  background-color: black;
  color: white;
}

.product-color.gold {
  background-color: gold;
}

.product-color.transparent,
.product-color.white {
  background-color: white;
}
</style>