<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
import Feature from '@/components/shop/helper/features.vue'
</script>


<template>
  <Card class="mt-3">
    <h2>Skills</h2>
    <p>Over the years i have developed 3 core skills.</p>
    <div class="row features">
      <Feature icon="bi-calendar-heart-fill" title="Organize" text="Scrum Master" />
      <Feature icon="bi-layout-wtf" title="Design" text="I started out as a designer a long time ago" />
      <Feature icon="bi-bezier2" title="Develop" text="I am a Frontend developer" />
    </div>
  </Card>
</template>