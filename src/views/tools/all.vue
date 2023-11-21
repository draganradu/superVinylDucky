<script setup lang="ts">
import AddTools from "@/components/shop/cards/AddToolds.vue"
import AllTools from "@/components/shop/cards/landingAllMyTools.vue"
import Container from '@/scaffolding/Container.vue'
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import NotificationService from "@/components/tools/notificationService.vue"

</script>

<template>
  <Container color="bg-body-secondary main-page">
    <NotificationService />
    <div class="row pt-5">
      <Sidebar />
      <div class="col-11">
        <div class="row">
          <AllTools />
          <AddTools />
        </div>
      </div>
    </div>
  </Container>
</template>