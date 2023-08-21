<script setup lang="ts">
import Container from '@/scaffolding/Container.vue'
import Header from '@/components/shop/header.vue'
import Footer from "@/components/shop/footer.vue"
import Sidebar from "@/components/shop/sidebar.vue"
</script>

<template>
  <div>
    <Header />
    <Container>
      <Sidebar />
      <div class="col-8">
        <slot />
      </div>
    </Container>
    <Footer />
  </div>
</template>