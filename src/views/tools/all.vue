<script setup lang="ts">
// import { computed, ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import Container from '@/scaffolding/Container.vue'
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import CardTool from "@/components/tools/helpers/card.vue"

// const store = useStore()
// const router = useRouter()

</script>

<template>
  <Container color="bg-body-secondary main-page">
    <div class="row pt-5">
      <Sidebar />
      <div class="col-11">
        <div class="row">
          <CardTool title="My tools">
            None
          </CardTool>
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
              <!-- <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" @click="login">Login</button> -->

              <hr class="my-4">
              <small class="text-body-secondary">If you do not have a user just sign up</small>

              <RouterLink class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" to="/tools/signUp/">
                Sign up
              </RouterLink>


            </form>
          </CardTool>
        </div>
      </div>
    </div>
  </Container>
</template>