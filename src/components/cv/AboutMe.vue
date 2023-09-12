<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
import { ref } from 'vue';
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
  <Card>
    <div class="row">
      <div class="col-6">
        <h1>Hi, I'm Radu</h1>
        <h2 class="subtitle">Web Designer & Developer</h2>
        <p class="mt-5">
          I`m a builder of wonderful digital things, some would call me a maker. Making things is my main motivation for
          getting out of bed in the morning. Be it front end, back end, or motorbike end, as long as I'm
          coding/wrenching/cutting/building I'm a happy camper as they say. The simplest way to explain it is: Building
          the world is the only way we can shape the future. <br />
        </p>
      </div>
      <div class="col-6">
        <div class="sidebar" v-if="!collapsed">
          AAAAAAAAAAAA
        </div>
        <img class="me-img" src="@/assets/radu-dragan-aurel-500.png" />
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.subtitle {
  font-size: 1em;
}

.me-img {
  position: relative;
  bottom: -25px;
}

.log-user {
  position: absolute;
  right: 0px;
  z-index: 100;
  top: 200px;
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
  background-color: gray;
  position: absolute;
  width: 200px;
  right: 0;
  top: 0;
  bottom: 0px;
  padding: 10px;
}
</style>