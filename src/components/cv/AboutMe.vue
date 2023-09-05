<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
</script>

<template>
  <Card>
    <div class="row">
      <div class="col-6">
        <h1>Hi, I'm Radu</h1>
        <h2 class="subtitle">Web Designer & Developer</h2>
        <p class="mt-5">
          I`m a builder of wonderful digital things, some would call me a maker. Making things is my main motivation for getting out of bed in the morning. Be it front end, back end, or motorbike end, as long as I'm coding/wrenching/cutting/building I'm a happy camper as they say. The simplest way to explain it is: Building the world is the only way we can shape the future. <br />
        </p>
      </div>
      <div class="col-6">
        <div class="bg-secondary bg-opacity-25">
          <img src="@/assets/placeholder.png" />
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped>
.subtitle {
  font-size: 1em;
}
</style>