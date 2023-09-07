<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
import Feature from '@/components/shop/helper/features.vue'
</script>

<template>
  <Card class="mt-5">
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

<style>
.features {
  /* border-top: 1px solid ; */
  padding-top: 3em;
  margin-top: 3em;
  position: relative;
}
.row.features::after {
  display: block;
  content: "";
  position: absolute;
  background-color: rgba(0,0,0,0.1);
  top: 0;
  bottom: -3.0rem;
  left: -2.3rem;
  right: -2.3rem;
  z-index: 0;
  border-top: 2px dashed rgba(0,0,0,0.1);
}

.row.features div {
  z-index: 1;
}

</style>