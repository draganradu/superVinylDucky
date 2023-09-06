
<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AboutUs from '@/components/shop/about.vue'
import Contact from '@/components/shop/contact.vue'
import Hero from '@/components/shop/hero.vue'
import ProductGrid from '@/components/shop/productGrid.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'
import SocialMedia from '@/components/shop/socialMedia.vue'

// seo ---------------------------------------
useHead({
  title: 'Viny Ducky is a vinyl sticker shop and a bit more'
})

</script>

<template>
  <main>
    <ShopLayout>
      <Hero />
      <ProductGrid />
      <AboutUs />
      <SocialMedia />
      <Contact />
    </ShopLayout>
  </main>
</template>
