
<script setup lang="ts">
import AboutUs from '@/components/shop/about.vue'
import Contact from '@/components/shop/contact.vue'
import Hero from '@/components/shop/hero.vue'
import ProductGrid from '@/components/shop/productGrid.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'
import SocialMedia from '@/components/shop/socialMedia.vue'
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
