
<script setup lang="ts">
import { useHead } from '@unhead/vue';
import AboutUs from '@/components/shop/about.vue';
import Contact from '@/components/shop/contact.vue';
import Hero from '@/components/shop/hero.vue';
import ProductGrid from '@/components/shop/productGrid.vue';
import ShopLayout from '@/layouts/ShopLayout.vue';
import SocialMedia from '@/components/shop/socialMedia.vue';
import Video from '@/components/Video.vue';

// seo ---------------------------------------
useHead({
  title: 'Viny Ducky is a vinyl sticker shop and a bit more',
  meta: [
    {
      name: 'description',
      content: "I`m a builder of wonderful digital things, some would call me a maker. Making things is my main motivation for getting out of bed in the morning. Be it front end, back end, or motorbike end, as long as I'm coding/wrenching/cutting/building I`m a happy camper as they say. The simplest way to explain it is: Building the world is the only way we can shape the future."
    },
  ],
})

</script>

<template>
  <main>
    <ShopLayout>
      <Hero />
      <Video id="py1zGPq_OPM" />
      <ProductGrid />
      <AboutUs />
      <SocialMedia />
      <Contact />
    </ShopLayout>
  </main>
</template>
