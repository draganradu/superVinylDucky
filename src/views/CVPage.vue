<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import AboutMe from "@/components/cv/AboutMe.vue"
import Container from '@/scaffolding/Container.vue'
import Experience from "@/components/cv/Experience.vue"
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import Social from "@/components/cv/Social.vue"
import Work from "@/components/cv/Work.vue"
import WorkDesign from "@/components/cv/WorkDesign.vue"
import WorkDevelop from "@/components/cv/WorkDevelop.vue"
import WorkOrganize from "@/components/cv/WorkOrganize.vue"
import Video from '@/components/Video.vue';

// props ---------------------------------------
const route = useRoute();
console.log(route.params.skill)


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
          <Video id="biQzsrPJZnk" />
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
