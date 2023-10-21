<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
// import Card from '@/scaffolding/Card.vue'
import Container from '@/scaffolding/Container.vue'
import Sidebar from "@/components/sidebar/sidebarTools.vue"

const store = useStore()

const isLogin = computed(() => store.getters['user/isLoggedIn'])
const login = (event: any) => {
  event.preventDefault();
  store.commit('user/SET_login', true)
}
</script>

<template>
  <Container color="bg-body-secondary main-page">
    <div class="row pt-5">
      <Sidebar />
      <div class="col-6 bg-body-secondary">
        <div v-if="isLogin" class="bg-white rounded-4 shadow">
          <div class="p-5 border-bottom-0">
            <h1 class="fw-bold mb-0 fs-2"> Is logged In
            </h1>
          </div>
        </div>
        <div v-else class="bg-white rounded-4 shadow">
          <div class="p-5 pb-4 border-bottom-0">
            <h1 class="fw-bold mb-0 fs-2">Login</h1>
          </div>

          <div class="p-5 pt-0">
            <form class="">
              <div class="form-floating mb-3">
                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" @click="login">Login</button>
              <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
              <hr class="my-4">
              <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
              <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                <svg class="bi me-1" width="16" height="16">
                  <use xlink:href="#twitter" />
                </svg>
                Sign up with Twitter
              </button>
              <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                <svg class="bi me-1" width="16" height="16">
                  <use xlink:href="#facebook" />
                </svg>
                Sign up with Facebook
              </button>
              <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                <svg class="bi me-1" width="16" height="16">
                  <use xlink:href="#github" />
                </svg>
                Sign up with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- <div class="col-auto">
      </div> -->
    </div>
  </Container>
</template>