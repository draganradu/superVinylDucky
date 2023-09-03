<script setup lang="ts">
import shopLayout from '@/layouts/ShopLayout.vue'
const language = 'en'
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
          Technology stack
          <hr/>
          <p>Vue 3</p>
          <p>Bootstrap</p>
          <p>Bootstrap Icons</p>
        </div>
      </div>
    </shopLayout>
  </main>
</template>
