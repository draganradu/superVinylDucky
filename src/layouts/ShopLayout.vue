<script setup lang="ts">
import Container from '@/scaffolding/Container.vue'
import Header from '@/components/shop/header.vue'
import Footer from "@/components/shop/footer.vue"
import Sidebar from "@/components/sidebar/index.vue"
</script>

<template>
  <div class="bg-body-secondary pt-5">
    <!-- <Header /> -->
    <Container>
      <Sidebar />
      <div class="col">
        <slot />
      </div>
    </Container>
    <Footer />
  </div>
</template>