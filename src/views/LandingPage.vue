
<script setup lang="ts">
// import { computed } from 'vue'
// import { useStore } from 'vuex'
import AboutUs from '@/components/shop/about.vue'
import Hero from '@/components/shop/hero.vue'
import ProductGrid from '@/components/shop/productGrid.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'
import SocialMedia from '@/components/shop/socialMedia.vue'
import Contact from '@/components/shop/contact.vue'
// const store = useStore()

// const count = computed(() => store.getters.doneTodos)
// const increse = () => store.commit('increment')

</script>

<template>
  <main>
    <ShopLayout>
      <Hero />
      <ProductGrid />
      <AboutUs />
      <SocialMedia />
      <Contact />
      
      <!-- <span @click="$store.commit('increment')"> >> {{ count }}</span>
      <br />
      <span @click="increse"> >2> {{ count }}</span> -->
    </ShopLayout>
  </main>
</template>
