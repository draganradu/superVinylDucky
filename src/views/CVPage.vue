<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AboutMe from "@/components/cv/AboutMe.vue"
import Container from '@/scaffolding/Container.vue'
import Experience from "@/components/cv/Experience.vue"
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import Social from "@/components/cv/Social.vue"
import Video from '@/components/Video.vue';
import Skills from "@/components/cv/Work.vue"
import WorkDesign from "@/components/cv/WorkDesign.vue"
import WorkDevelop from "@/components/cv/WorkDevelop.vue"
import WorkOrganizeFront from "@/components/cv/WorkOrganizeFront.vue"
import WorkOrganizeScrum from "@/components/cv/WorkOrganizeScrum.vue"
import WorkOrganizeUi from "@/components/cv/WorkOrganizeUi.vue"
import Footer from "@/components/cv/Footer.vue"
import { computed } from 'vue'

// hooks ---------------------------------------
const route = useRoute();
const store = useStore();

// props ---------------------------------------
const skill = route.params.skill as string;

// data ---------------------------------------
const data = computed(() => store.state["cv"].jobs[skill])
const is = store.getters['cv/is'](skill)

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
          <Video :id="data.video" />
          <Skills />
          <WorkOrganizeFront v-if="is.front" />
          <WorkOrganizeScrum v-if="is.scrum" />
          <WorkOrganizeUi v-if="is.ui" />
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
