<script setup lang="ts">
// 0.0.8 ----------------------------------------
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AboutMe from "@/components/cv/AboutMe.vue"
import Contact from "@/components/cv/Contact.vue"
import Container from '@/scaffolding/Container.vue'
import Footer from "@/components/cv/Footer.vue"
import Portofolio from "@/components/cv/Portofolio.vue"
import Resume from "@/components/cv/Resume.vue"
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import Skills from "@/components/cv/Work.vue"
import type { jobs, jobsData } from '@/store/cv/types'
import Video from '@/components/Video.vue'
import WorkOrganizeFront from "@/components/cv/WorkOrganizeFront.vue"
import WorkOrganizeScrum from "@/components/cv/WorkOrganizeScrum.vue"
import WorkOrganizeUi from "@/components/cv/WorkOrganizeUi.vue"

// hooks ---------------------------------------
const route = useRoute()
const store = useStore()

// store / props / params -----------------------
const skill = route.params.skill as jobs

// data ---------------------------------------
const data = computed<jobsData>(() => store.state["cv"].jobs[skill])
const is = store.getters['cv/is'](skill)

// seo ---------------------------------------

//TODO: Add description
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
          <Video :id="data.video" />
          <Skills />
          <Resume />
          <Portofolio />
          <Contact />
          <!-- <WorkOrganizeFront v-if="is.front" />
          <WorkOrganizeScrum v-if="is.scrum" />
          <WorkOrganizeUi v-if="is.ui" /> -->
          <!-- <WorkDesign /> -->
          <!-- <WorkDevelop /> -->
          <!-- <Social /> -->

          <!-- <Experience /> -->
        </div>
      </Container>
      <Footer />

    </div>
  </main>
</template>
