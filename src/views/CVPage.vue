<script setup lang="ts">
import AboutMe from "@/components/cv/AboutMe.vue"
import Container from '@/scaffolding/Container.vue'
import Experience from "@/components/cv/Experience.vue"
import Social from "@/components/cv/Social.vue"
import Work from "@/components/cv/Work.vue"
import Sidebar from "@/components/sidebar/sidebarTools.vue"
</script>

<template>
  <main>
    <div class="bg-body-secondary">
      <Container class="pt-5">
        <Sidebar />
        <div class="col">
          <AboutMe />
          <Social />
          <Work />
          <Experience />
        </div>
      </Container>
    </div>
  </main>
</template>
