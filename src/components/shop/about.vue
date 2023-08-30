<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
import Feature from '@/components/shop/helper/features.vue'
</script>

<template>
  <Card class="mt-3">
    <h2>We are vinyl ducky</h2>
    <p>
      We are specialized in industrial vinyl stickers but also love side projects that keep us creative. You will see in
      our portfolio the typical window stickers with company branding, window stickers with opened and closed hour's,
      conference room stickers, car branding, exit signs, emergency signs, hydrant and medic kit. And don`t get me wrong
      we love making them, paying the bills is awesome, but we also love wild project like glass etching coffee cups for a
    bar, motorcycle helmet stickers, tool box branding, and a lot more. So if you need anything just send us a email /
    DM / Phone call and we will see how we can make whatever you want become a reality.</p>
    <div class="row features">
      <Feature icon="bi-sticky" title="Vinyl Stickers" text="Our main work is cutting vinyl graphics for vans walls, etc"/>
      <Feature icon="bi-brush" title="Design" text="If you have a project you need help with, we tend to be down for"/>
      <Feature icon="bi-printer" title="3D printing" text="Prototyping is one of our favorit things to do."/>
    </div>
</Card>
</template>

<style scoped>
.features {
  border-top: 1px solid ;
  padding-top: 3em;
  margin-top: 3em;
}

</style>