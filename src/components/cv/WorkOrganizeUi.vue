<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'

// data ---------------------------------------
const steps = {
  "requirements": () => {
    return "x"
  },
  "wireframe": () => {
    return "x"
  },
  "adjustWireframe": () => {
    return "x"
  },
  "mocks": () => {
    return "x"
  },
  "adjustMocks": () => {
    return "x"
  },
  "tasks": () => {
    return "x"
  },
  "estimate": () => {
    return "x"
  },
  "mvp": () => {
    return "x"
  },
  "adjustMVP": () => {
    return "x"
  },
  "Iterate": () => {
    return "x"
  },
}

</script>

<template>
  <Card class="mt-3 work-item">
    <div class="col-12" id="header-work-organize">
      <div class="background"></div>
    </div>
    <div class="row">
      <div class="col-6">
        <h2>Ui <span class="badge text-bg-dark">Design</span></h2>
        <p>I stared out a Ui developer after finishing my masters in Arts. While i moved on to Fronted development and
          Agile process as a scrum master. The Ui development love never left me.</p>
        <p> I could show you a impresive portofolio with shiny grafix or i could make buttons that beak down how you actualy work. What needs to be done to make something into a reality and showcase how you need to interact with a team to make something work. While the end product is something to marvole at the process is the way to add value. </p>

        <ul class="list-group">
          <li class="list-group-item" v-for="(i, k) in Object.keys(steps)" :key="k" >{{ k }} | {{ i }}</li>

        </ul>








      </div>
      <div class="col-6"><img src="@/assets/scrum.png" /></div>
    </div>
  </Card>
</template>

<style>
.work-item .badge {
  font-size: 40%;
  transform: translateY(-25%);
}

#header-work-organize {
  min-height: 200px;
}

#header-work-organize .background {
  background-image: url('../../assets/group-diverse-people-having-business-meeting.jpg');
  background-size: cover;
  background-attachment: fixed;
  min-height: 200px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: inherit;
}
</style>