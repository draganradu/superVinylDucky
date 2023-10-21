<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import Card from '@/scaffolding/Card.vue'
import LI from "@/scaffolding/ListLi.vue";
import UL from "@/scaffolding/ListUl.vue";

// hooks ---------------------------------------
const route = useRoute();
const store = useStore();

// props ---------------------------------------
const skill = route.params.skill as string;

// data ---------------------------------------
const { contact, jobs } = store.state.cv;
const cvLink = jobs[skill].cv;
const is = store.getters['cv/is'](skill)

let collapsed = ref(true);


</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 position-relative">
        <div class="log-user">
          <div class="user" @click="() => { collapsed = !collapsed }">
            <img class="me-img-small" src="@/assets/radu-dragan-aurel-500.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Card id="radu-about">
    <div class="row">
      <div class="col-6">
        <h1>Hi, I'm Radu</h1>
        <h2 class="subtitle" v-if="is.front">Web Designer & Developer</h2>
        <h2 class="subtitle" v-if="is.scrum">Scrum Master</h2>
        <h2 class="subtitle" v-if="is.ui">UI Developer</h2>
        <p class="mt-5">
          <span v-if="is.front">As a Frontend Developer,</span>
          <span v-if="is.scrum">As a Scrum master,</span>
          <span v-if="is.ui">As a Ui Developer,</span>

          I`m a builder of wonderful digital things, some would call me a maker. Making things is my main motivation for
          getting out of bed in the morning. Be it front end, back end, or motorbike end, as long as I'm
          coding/wrenching/cutting/building I'm a happy camper as they say. The simplest way to explain it is: Building
          the world is the only way we can shape the future. <br />
        </p>
      </div>
      <div class="col-6">
        <Transition name="fade">
          <div class="sidebar-background " v-if="!collapsed"></div>
        </Transition>

        <UL v-if="!collapsed" class="shadow sidebar">
          <LI text="CV" :action="`https://vinylducky.nl/cv/${cvLink}`" />

          <LI icon="bi-phone" :text="contact.phone" :action="`tel: ${contact.phone}`" />
          <LI icon="bi-envelope" :text="contact.email" :action="`mailto: ${contact.email}`" />


        </UL>
        <div class="me-img">
          <img src="@/assets/radu-dragan-aurel-500.png" />
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
#radu-about {
  position: relative;
  z-index: 10;
}

.subtitle {
  font-size: 1em;
}

.me-img {
  position: relative;
  height: 100%;

  img {
    max-width: 100%;
    position: absolute;
    bottom: -50px;
  }
}

.log-user {
  position: absolute;
  right: 0px;
  z-index: 100;
  top: 50px;
  transform: translateX(50%);

  .user {
    width: 80px;
    height: 80px;
    background-color: lightgreen;
    border: 6px solid white;
    border-radius: 100%;
    padding-top: 15px;
    overflow: hidden;

  }
}

.sidebar {
  background-color: white;
  position: absolute;
  width: 200px;
  right: 0;
  top: 0;
  margin: 10px;
  bottom: 0px;
  z-index: 2;

  &-background {
    background-color: lightgreen;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
  }
}
</style>