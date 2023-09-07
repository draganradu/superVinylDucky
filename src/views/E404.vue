<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Container from '@/scaffolding/Container.vue'
import Card from '@/scaffolding/Card.vue'

// seo ---------------------------------------
useHead({
  title: 'The page has not been found',
  meta: [{ name: 'description', content: 'Error 404 Page' },],
})
</script>
<template>
  <main>
    <Container id="e404" class="d-flex align-items-center bg-body-secondary">
      <div id="back" class="text-center a-clean">
        <RouterLink to="/"><span class=""><i class="bi bi-arrow-left-circle-fill" /></span></RouterLink>
      </div>
      <Card class="col-4 offset-4 text-center">
        <h1><b>E</b>404</h1>
        <hr />
        The page has not been found
        <hr />
      </Card>
    </Container>
  </main>
</template>

<style lang="scss">
#e404 {
  min-height: 100vh;

  h1 {
    font-weight: 100;
    font-size: 8em;

    b {
      font-weight: 800;
    }
  }
}

#back {
  position: relative;
  transform: translateY(50%);
  z-index: 1;


  span {
    background-color: white;
    padding: 10px 12px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.176);
    color: gray;
  }
}
</style>