<script setup lang="ts">
// ECBGI-81 ----------------------------------------
import { useRoute } from 'vue-router'
import Card from '@/scaffolding/Card.vue'
import Feature from '@/components/shop/helper/features.vue'
import { useStore } from 'vuex'
import SkillFrontend from './skillsFrontend.vue'
import SkillScrum from './skillsScram.vue'
import SkillUi from './skillsUI.vue'

// props ---------------------------------------
const route = useRoute()
const store = useStore()

// props ---------------------------------------
const skill = route.params.skill as string

// data ---------------------------------------
const is = store.getters['cv/is'](skill)

</script>


<template>
  <Card id="radu-work" :class="['mt-3',`bg-${skill}-primary`]">
    Skills [ECBGI-81]
    <SkillFrontend v-if="is.front" />
    <SkillScrum v-if="is.scrum" />
    <SkillUi v-if="is.ui" />
    <!-- <h2>Skills</h2>
    <p>Over the years i have gained some core skills the team i am a part of. 
      <span v-if="is.front"> I think every frontend developer should have them, but i think it is a case of if you have a hammer you see everithing as a nail.</span>
      <span v-if="is.scrum"> I think every scrum master developer should have them, but i think it is a case of if you have a hammer you see everithing as a nail.</span>
      <span v-if="is.ui"> I think every ui developer should have them, but i think it is a case of if you have a hammer you see everithing as a nail.</span>
    </p>
    <div class="row features" v-if="is.front">
      <Feature icon="bi-bezier2" title="Develop" text="I am a Frontend developer" />
      <Feature icon="bi-layout-wtf" title="Design" text="I started out as a designer a long time ago" />
      <Feature icon="bi-calendar-heart-fill" title="Organize" text="Scrum Master" />
    </div>
    <div class="row features" v-if="is.scrum">
      <Feature icon="bi-calendar-heart-fill" title="Organize" text="Scrum Master" />
      <Feature icon="bi-layout-wtf" title="Design" text="I started out as a designer a long time ago" />
      <Feature icon="bi-bezier2" title="Develop" text="I am a Frontend developer" />
    </div>
    <div class="row features" v-if="is.ui">
      <Feature icon="bi-layout-wtf" title="Design" text="I started out as a designer a long time ago" />
      <Feature icon="bi-bezier2" title="Develop" text="I am a Frontend developer" />
      <Feature icon="bi-calendar-heart-fill" title="Organize" text="Scrum Master" />
    </div> -->
  </Card>
</template>

<style lang="scss">
#radu-work {
  z-index: 10;
}
</style>