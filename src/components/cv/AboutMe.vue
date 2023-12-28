<script setup lang="ts">
// ECBGI-80 ----------------------------------------
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Card from '@/scaffolding/Card.vue'
import LI from "@/scaffolding/ListLi.vue"
import UL from "@/scaffolding/ListUl.vue"

// hooks ---------------------------------------
const route = useRoute()
const store = useStore()

// props ---------------------------------------
const skill = route.params.skill as string

// data ---------------------------------------
const { contact, jobs, social } = store.state.cv

const cvLink = jobs[skill].cv
const is = store.getters['cv/is'](skill)

let collapsed = ref(true)


</script>

<template>
  <Card id="radu-about" :sans-padding="true">
    About Me [ECBGI-80]

    <div class="row">
      <div class="col-6">
        <img class="card-img-top" src="@/assets/placeholder.png" alt="Card image cap">
      </div>
      <div class="col-6">
        <h1>Hi, I'm Radu</h1>
        <h2>
          <span class="bg-front-secondary" v-if="is.front">Frontend Developer</span>
          <span class="bg-scrum-secondary" v-if="is.scrum">Scrum master</span>
          <span class="bg-ui-secondary" v-if="is.ui">Ui/UX Developer</span>
        </h2>
        <p>
          I`m a builder of wonderful digital things, some would call me a maker. Making things is my main motivation for
          getting out of bed in the morning. Be it front end, back end, or motorbike end, as long as I'm
          coding/wrenching/cutting/building I'm a happy camper as they say. The simplest way to explain it is: Building
          the world is the only way we can shape the future.
        </p>
        <hr />
        <div class="icons a-clean">
          <span v-for="(s, i) in social" :key="i">
            <a target="_blank" :href="s.url" v-if="s.show.includes(skill)">
              <i :class="['bi', `bi-${s.icon}`]" />
            </a>
          </span>

        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.2em;
  margin-bottom: 2em;
  line-height: 150%;

  span {
    padding: 0.2em 0.5em;
    font-weight: bold;
  }
}

p {
  font-size: 1em;
  line-height: 1.2;
  margin-bottom: 2em;
}

#radu-about {
  position: relative;
  z-index: 10;
  padding: 5em;
}

.icons i {
  margin-right: 1em;
}

.card-img-top {
  border: 1px solid black
}

// .subtitle {
//   font-size: 1em;
// }

// .me-img {
//   position: relative;
//   height: 100%;

//   img {
//     max-width: 100%;
//     position: absolute;
//     bottom: -50px;
//   }
// }

// .log-user {
//   position: absolute;
//   right: 0px;
//   z-index: 100;
//   top: 50px;
//   transform: translateX(50%);

//   .user {
//     width: 80px;
//     height: 80px;
//     background-color: lightgreen;
//     border: 6px solid white;
//     border-radius: 100%;
//     padding-top: 15px;
//     overflow: hidden;

//   }
// }

// .sidebar {
//   background-color: white;
//   position: absolute;
//   width: 200px;
//   right: 0;
//   top: 0;
//   margin: 10px;
//   bottom: 0px;
//   z-index: 2;

//   &-background {
//     background-color: lightgreen;
//     opacity: 0.9;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     top: 0;
//     z-index: 1;
//   }
// }
</style>