<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Container from '@/scaffolding/Container.vue'
import Sidebar from "@/components/sidebar/sidebarTools.vue"
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const error = ref(null)
const data = ref({ email: '', password: '', repassword: '' })

const isLogin = computed(() => store.getters['user/isLoggedIn'])
// store.commit('user/SetUser', 'yoshy')


const login = async (event: any) => {
  event.preventDefault()
  // store.commit('user/SET_login', true)
  try {
    await store.dispatch('user/signUp', data.value)
    router.push('/tools/all')
  } catch (err: any) {
    error.value = err.message
  }
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
            <h1 class="fw-bold mb-0 fs-2">SignUp</h1>
          </div>

          <div class="p-5 pt-0">
            <form class="">
              <div class="form-floating mb-3">
                <input v-model="data.email" type="email" class="form-control rounded-3" id="floatingInput"
                  placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input v-model="data.password" type="password" class="form-control rounded-3" id="floatingPassword"
                  placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input v-model="data.repassword" type="password" class="form-control rounded-3" id="floatingPassword"
                  placeholder="Password">
                <label for="floatingPassword">rePassword</label>
              </div>
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" @click="login">Create a user</button>

              
            </form>
            <div v-if="error">{{ error }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="col-auto">
      </div> -->
    </div>
  </Container>
</template>