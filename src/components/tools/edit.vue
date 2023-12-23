<script setup lang="ts">
import { formInitial } from '@/store/tools/form'
import { ref } from 'vue'
import { useStore } from 'vuex'
import type { toolType } from '@/store/tools/type'

// hooks ---------------------------------------
const store = useStore()

// methods ---------------------------------------
const sendForm = () => {
  store.dispatch("tools/EditTool", form.value)
}

// data ---------------------------------------
const form = ref<toolType>({
  ...formInitial
})

</script>

<template>
  Edit Mode
  <div class="editor mt-2">

    <div class="form-floating mb-3" v-for="(v, k) in form" :key="k">
      <input type="text" class="form-control rounded-3" :id="k" v-model="form[k]">
      <label :for="k">{{ k }}</label>
    </div>

    <span class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" @click="sendForm">
      Send
    </span>
  </div>
</template>