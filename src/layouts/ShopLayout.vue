<script setup lang="ts">
import Container from '@/scaffolding/Container.vue'
import Footer from "@/components/shop/footer.vue"
import Sidebar from "@/components/sidebar/index.vue"

defineProps<{
  sidebar?: boolean
}>()

</script>

<template>
  <div id="shopLayout" class="bg-body-secondary pt-5">
    <!-- <Header /> -->
    <Container>
      
      <Sidebar :sidebar="sidebar"/>
      <div class="col">
        <div class="main-logo">Vinyl Ducky</div>
        <slot />
      </div>
    </Container>
    <Footer />
  </div>
</template>

<style lang="scss">
.main-logo {
  position: absolute;
  z-index: 1;
  transform: translateY(-100%);
  padding-bottom: 10px;
  font-weight: 800;
  opacity: 0.2;
  pointer-events: none;
}

#shopLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > div {
    flex-grow: 1;
  }
}
</style>