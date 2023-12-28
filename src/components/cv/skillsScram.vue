<script setup lang="ts">
// ECBGI-81 ----------------------------------------
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// methods ---------------------------------------
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// props ---------------------------------------
const route = useRoute()
const store = useStore()

// props ---------------------------------------
const skill = route.params.skill as string
const { skills } = store.state.cv

// data ---------------------------------------
const is = store.getters['cv/is'](skill)

skills.map((i: any) => {
  console.log(i)
  i.value.push(randomIntFromInterval(i.value[0], i.value[1]))
  return i
})

</script>

<template>
  <div class="row">
    <div class="col-12 mb-3">
      <h2>Skills</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur
        velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis
        commodi quidem hic quas.</p>
    </div>
    <div class="col-6" v-for="(i, k) in skills" :key="k" v-show="i.show.includes(skill)">
      <div v-if="i.show.includes(skill)" class="mb-3">
        <div class="row mb-2">
          <div class="col">
            <b>{{ i.name }}</b>
          </div>
          <div class="col-md-auto">{{ i.value[2] }}%</div>
        </div>
        <div>
          <div class="progress" role="progressbar" aria-label="Default striped example" :aria-valuenow="i.value[2]"
            aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped" :style="`width: ${i.value[2]}%`"></div>
          </div>
        </div>
        <div v-if="i.description" class="skill-description mt-3">{{ i.description }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.skill-description {
  font-size: 0.7em;
  line-height: 1.3em;
}
</style>
```