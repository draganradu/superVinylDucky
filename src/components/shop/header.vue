
<script setup lang="ts">
import Container from '@/scaffolding/Container.vue'
import Lang from './helper/lang.vue'
import Li from './helper/li.vue'
import Login from './helper/login.vue'
import Logo from './helper/logo.vue'
import Search from './helper/search.vue'
</script>

<template>
  <header class="p-3 bg-secondary bg-opacity-10 link-dark mb-5">
    <Container>
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <Logo />

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <Li url="/site-map/" title="Sitemap" />
        </ul>

        <Search />

        <div class="text-end">
          <Login />
          <Lang />
        </div>
      </div>
    </Container>
  </header>
</template>
