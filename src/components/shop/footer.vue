
<script setup lang="ts">
import { useStore } from 'vuex';
import Container from '@/scaffolding/Container.vue';

const store = useStore();
const { postalCode, street, city, province } = store.state.shop.contact.address;
const { email, phone, vat, kvk, iban } = store.state.shop.contact;
const { infoSections } = store.state.shop.extraInfo;

const scrollintroview = (i: string) => {
  setTimeout(() => {
    const element = document.getElementById(i);
    element.scrollIntoView({ behavior: "smooth" });
  }, 0);
}
</script>

<template>
  <footer class="footer pt-5">
    <Container class="mt-5 py-5 bg-opacity-25" color="bg-secondary">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12 text-color">
          <h3>CONTACT DETAILS</h3>
          <p>
            {{ postalCode }} {{ street }} <br>{{ city }} {{ province }}
            <br><br>
            <a class="a-clean" :href="`mailto: ${email}`">{{ email }}</a><br>
            <a class="a-clean" :href="`tel: ${phone}`"><b>{{ phone }}</b></a>
            <br><br> KVK: <b>{{ kvk }}</b>
            <br> VAT:
            <b>{{ vat }}</b><br>
            IBAN: <b>{{ iban }}</b><br>
          </p>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-color">
          <h3>INFORMATIE</h3>
          <p class="a-clean">
            <RouterLink v-for="i in Object.keys(infoSections)" class="d-block" :key="i" :to="`/en/Informatie#${i}`"
              @click="scrollintroview(i)">{{
                $t(i) }}</RouterLink>
          </p>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-color">
          <p>Minimum order amount is €8,-<br><br><b>Shipping time:</b><br> 2-4 working days (NL) <br><br><b>Postage
              costs: </b><br> NL €4.25 / €6.95 <br> BE/DU/FR €9.90 <br>The rest of the world €12.50 </p>
        </div>
        <div class="col-md-2 col-sm-12"><img class="opacity-25" src="@/assets/logo_footer.png" alt="xa"></div>
      </div>
    </Container>

    <Container class="py-3 bg-opacity-50" color="bg-secondary">
      <p><span class="text-muted">All rights reserved © 2023 vinylDucky.nl</span></p>
    </Container>
  </footer>
</template>

<style scoped>

footer {
  padding-top: 6rem!important;
}

p {
  font-size: 0.8em;
}

h3 {
  font-size: 0.8em;
  font-weight: 700;
}
</style>