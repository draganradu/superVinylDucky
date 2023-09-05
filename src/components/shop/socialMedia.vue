<script setup lang="ts">
import { useStore } from 'vuex'
import Card from '@/scaffolding/Card.vue'

const store = useStore()
const socialMedia = store.getters['shop/getSocialLinks']
</script>

<template>
  <Card transparent class="mt-5 social">
    <div class="d-flex justify-content-center">
      <div v-for="(s, key) in socialMedia" :key="key">
        <a :title="s.name" :href="s.url" class="a-clean">
          <i :class="s.icon" />
          <br />
          <small>{{ s.name }}</small>
        </a>
      </div>
    </div>
  </Card>
</template>

<style scoped>
small {
  font-size: 0.4em;
}

a {
  display: block;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 1em;
}

i {
  font-size: 2em;
}

.social a {
  opacity: 0.4;
}

.social a:hover {
  opacity: 1;
}
</style>