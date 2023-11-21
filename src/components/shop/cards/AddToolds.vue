<script setup lang="ts">
import CardTool from "@/components/tools/helpers/card.vue"
</script>

<template>
  <CardTool title="Add Tools">
    <form class="">
      <div class="form-floating mb-3">
        <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <hr class="my-4">
      <small class="text-body-secondary">If you do not have a user just sign up</small>

      <RouterLink class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" to="/tools/signUp/">
        Sign up
      </RouterLink>
    </form>
  </CardTool>
</template>