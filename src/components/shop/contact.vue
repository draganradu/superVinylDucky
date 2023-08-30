<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
import { useStore } from 'vuex'
const store = useStore()
console.log(store.state.shop.store.marktplaats)
</script>

<template>
  <Card class="mt-5">
    <div class="row">
      <div class="col-3"><img src="@/assets/vinylDuckyQrCode.jpg" /></div>
      <div class="col-9">
        <h2>Contact</h2>
        <hr />
        <p>We are makers specializing in vinyl stickers. But we make a lot more than that: metal etching, glass etching,
          industrial window stickers, wall stickers, labels, leather products, and a lot of branding and a duck load of
          marketing materials. If you have any ideas just give us a call we are ducking friendly.</p>
        <hr />
        <p class="contact-social a-clean">
          <span>
            <a :href="store.state.shop.store.marktplaats">marktplaats</a>
          </span>
          <span><a :href="store.state.shop.store.etsy">etsy</a></span>
          <span><a :href="`tel:${store.state.shop.contact.phone}`"><i class="bi bi-telephone me-1 ms-1"></i></a></span>

        </p>
      </div>
    </div>
  </Card>
</template>

<style>
.contact-social span {
  padding-right: 10px;
}
</style>