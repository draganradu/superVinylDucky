<script setup lang="ts">
// ECBGI-82 ----------------------------------------
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Card from '@/scaffolding/Card.vue'

// props ---------------------------------------
const route = useRoute()
const store = useStore()

// props ---------------------------------------
const skill = route.params.skill as string

// data ---------------------------------------
const { education, professional } = store.state.cv.resume
const is = store.getters['cv/is'](skill)

</script>

<template>
  <Card id="resume" class="mt-3">
    <div class="row">
      <div class="col-12">
        Skills [ECBGI-81]
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>Resume</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
          iste officiis commodi quidem hic quas.</p>
      </div>
      <div class="mb-3">
        <hr />
      </div>

      <div class="col-6">
        <h4 class="mb-5">Education</h4>

        <div class="resume-box" v-for="(k, i) in education" :key="i">
          <h5>[{{ k.degree }}] {{ k.name }} </h5>
          <p>{{ k.time.join("-") }} | {{ k.location }}</p>
          <p>{{ k.text }}</p>
        </div>


        <div class="resume-box">
          <h5>MBA - Bussines Managent </h5>
          <p>2015-2034</p>
          <p>Bucharest</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo
            nibh ante facilisis bibendum.</p>
        </div>
        <div class="resume-box">
          <h5> </h5>
          <p>2015-2034</p>
          <p>Bucharest</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo
            nibh ante facilisis bibendum.</p>
        </div>
      </div>
      <div class="col-6">
        <h4 class="mb-5">Professional Experience</h4>
        <!-- {{ professional  }} -->
        <div class="resume-box">
          <h5>Oneara Health [Scrum master]</h5>
          <p>2015-2034</p>
          <p>Bucharest</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo
            nibh ante facilisis bibendum.</p>
        </div>
        <div class="resume-box">
          <h5>Meditools [Full Stack]</h5>
          <p>2015-2034</p>
          <p>Bucharest</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo
            nibh ante facilisis bibendum.</p>
        </div>
        <div class="resume-box">
          <h5>Verifon now 2Checkout [front]</h5>
          <p>2015-2034</p>
          <p>Bucharest</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo
            nibh ante facilisis bibendum.</p>
        </div>
        <button type="button" class="btn btn-outline-secondary">More</button>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
$marginLeft: 20px;
$circleSize: 20px;
$borderSize: 1px;

.resume-box {
  border-left: $borderSize solid #ccc;
  padding-left: $marginLeft;
  padding-bottom: 20px;

  h5 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: $circleSize;
      height: $circleSize;
      background: #ccc;
      position: absolute;
      left: ($marginLeft + calc($circleSize/2)) * -1;
      top: 0px;

      border-radius: 100%;
    }
  }
}
</style>
```