<script setup lang="ts">
const language = 'en'
</script>

<template>
  <main>
    <div class="container">
      <ul class="list-group">
        <li class="list-group-item">
          <RouterLink to="/">Landing Page</RouterLink>
        </li>
        <li class="list-group-item">
          <RouterLink :to="'/' + language + '/radu-dragan'">CV</RouterLink>
        </li>

        <li class="list-group-item">vinylDucky</li>
        <li class="list-group-item">
          <RouterLink :to="'/' + language + '/stickers/001'">Product</RouterLink>
        </li>
        <li class="list-group-item">
          <RouterLink :to="'/' + language + '/stickers-category/001'">Product Category</RouterLink>
        </li>

        <li class="list-group-item">Tools</li>

        <li class="list-group-item">
          <RouterLink to="/tools/category/001">Tool Category</RouterLink>
        </li>
        <li class="list-group-item">
          <RouterLink to="/tools/id/001">Tool Id</RouterLink>
        </li>
        <li class="list-group-item">
          <RouterLink to="/tools/tag/id/001">Tool Tag</RouterLink>
        </li>

        <li class="list-group-item">Error</li>
        <li class="list-group-item">
          <RouterLink to="/sadasda">404</RouterLink>
        </li>
      </ul>
    </div>
  </main>
</template>
