<script setup lang="ts">
import { useHead } from '@unhead/vue'
import shopLayout from '@/layouts/ShopLayout.vue'
import Card from '@/scaffolding/Card.vue'

const language = 'en'

// seo ---------------------------------------
useHead({
  title: 'Information regarding Vinyl Ducky'
})

const todoStructure = [
  ["WhatsApp", "https://web.whatsapp.com/"],
  ["Messinger", "https://www.messenger.com/marketplace/"],
  ["Email V ducky", "https://outlook.office.com/mail/"],
  ["Email R ducky", "https://outlook.office.com/mail/"],
  ["Email G", "https://mail.google.com/mail/u/0/#inbox"],
  ["Email F", "https://fotodex.ro/webmail"],
  ["Linkedin", "https://fotodex.ro/webmail"],
  ["Etsy", "https://fotodex.ro/webmail"],
  ["Marktplaats", "https://www.marktplaats.nl/messages"]
]

</script>

<template>
  <main>
    <shopLayout>
      <div class="row pb-5 a-clean">
        <ul class="list-group col-8">
          <li class="list-group-item bg-secondary text-white bg-opacity-50">Base</li>

          <li class="list-group-item">
            <RouterLink to="/">Landing Page</RouterLink>
          </li>
          <li class="list-group-item">
            <RouterLink :to="'/' + language + '/radu-dragan'">CV</RouterLink>
          </li>
          <li class="list-group-item">
            <RouterLink :to="'/' + language + '/Informatie'">Informatie</RouterLink>
          </li>

          <li class="list-group-item bg-secondary text-white bg-opacity-50">Shop</li>
          <li class="list-group-item">
            <RouterLink :to="'/' + language + '/stickers/001'">Product</RouterLink>
          </li>
          <li class="list-group-item">
            <RouterLink :to="'/' + language + '/stickers-category/001'">Product Category</RouterLink>
          </li>

          <li class="list-group-item bg-secondary text-white bg-opacity-50">Tools</li>

          <li class="list-group-item">
            <RouterLink to="/tools/category/001">Tool Category</RouterLink>
          </li>
          <li class="list-group-item">
            <RouterLink to="/tools/id/001">Tool Id</RouterLink>
          </li>
          <li class="list-group-item">
            <RouterLink to="/tools/tag/id/001">Tool Tag</RouterLink>
          </li>

          <li class="list-group-item bg-secondary text-white bg-opacity-50">Error</li>
          <li class="list-group-item">
            <RouterLink to="/sadasda">404</RouterLink>
          </li>

          <li class="list-group-item bg-secondary text-white bg-opacity-50">OutsideLinks</li>
          <li class="list-group-item">
            <a href="https://vinylducky.atlassian.net/jira/software/projects/ECBGI/boards/3" target="_blank">Jira</a>
          </li>
          <li class="list-group-item">
            <a href="https://github.com/draganradu/superVinylDucky" target="_blank">git</a>
          </li>

        </ul>
        <div class="col-4">
          <Card :sansPadding="true">
            <div class="card-head bg-secondary text-light p-2 ps-3">
              Technology stack
            </div>
            <div class="p-3 pb-0">
              <p>Vue 3</p>
              <p>Bootstrap</p>
              <p>Bootstrap Icons</p>
            </div>
          </Card>
          <Card :sansPadding="true" class="mt-3">
            <ul class="list-group">

              <div class="card-head bg-secondary text-light p-2 ps-3">
                Daily todo
              </div>
              <a v-for="(i, k) in todoStructure" :key="k" :href="i[1]" target="_blank">
                <li class="list-group-item">
                  {{ k }} | {{ i[0] }}
                </li>
              </a>
            </ul>
          </Card>
        </div>
      </div>
    </shopLayout>
  </main>
</template>