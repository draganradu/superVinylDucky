<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
</script>

<template>
  <Card class="mt-3 work-item">
    <div class="col-12" id="header-work-organize">
      <div class="background"></div>
    </div>
    <div class="row">
      <div class="col-6">
        <h2>Scrum master <span class="badge text-bg-dark">Organize</span></h2>
        <p>I like beeing a scrum master</p>
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