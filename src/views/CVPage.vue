<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AboutMe from "@/components/cv/AboutMe.vue"
import Container from '@/scaffolding/Container.vue'
import Experience from "@/components/cv/Experience.vue"
import Social from "@/components/cv/Social.vue"
import Work from "@/components/cv/Work.vue"
import WorkOrganize from "@/components/cv/WorkOrganize.vue"
import WorkDesign from "@/components/cv/WorkDesign.vue"
import WorkDevelop from "@/components/cv/WorkDevelop.vue"
import Sidebar from "@/components/sidebar/sidebarTools.vue"

// seo ---------------------------------------
useHead({
  title: 'Radu Dragan CV, I`m a builder of wonderful digital things '
})
</script>

<template>
  <main>
    <div class="bg-body-secondary">
      <Container class="pt-5">
        <Sidebar />
        <div class="col">
          <AboutMe />
          <Work />
          <WorkOrganize />
          <WorkDesign />
          <WorkDevelop />
          <Social />

          <Experience />
        </div>
      </Container>
    </div>
  </main>
</template>
