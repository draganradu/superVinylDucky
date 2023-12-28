<script setup lang="ts">
// ECBGI-84 ----------------------------------------
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Card from '@/scaffolding/Card.vue'

// props ---------------------------------------
const route = useRoute()
const store = useStore()

// props ---------------------------------------
const skill = route.params.skill as string

// data ---------------------------------------
const is = store.getters['cv/is'](skill)

</script>


<template>
  <Card id="radu-work" class="mt-3">
    Portofolio [ECBGI-84]
  </Card>
</template>

<style lang="scss">
#radu-work {
  z-index: 10;
}
</style>