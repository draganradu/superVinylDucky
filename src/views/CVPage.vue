<script setup lang="ts">
import AboutMe from "@/components/cv/AboutMe.vue"
import Container from '@/scaffolding/Container.vue'
import Experience from "@/components/cv/Experience.vue"
import Social from "@/components/cv/Social.vue"
import Work from "@/components/cv/Work.vue"
</script>

<template>
  <main>
    <Container fluid>
      <AboutMe />
      <Social />
      <Work />
      <Experience />
    </Container>
  </main>
</template>
