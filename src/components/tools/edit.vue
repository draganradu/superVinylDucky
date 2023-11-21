<script setup lang="ts">
import { useStore } from 'vuex'
import { ref } from 'vue'

// hooks ---------------------------------------
const store = useStore()

// methods ---------------------------------------
const sendForm = () => {
  store.dispatch("tools/EditTool", form.value)
}

// data ---------------------------------------
const form = ref({
  Descriptiption: "Z",
  make: "y",
  Price: 50,
  owner: "wjnCEzeiA4f6M75FeLMf6efZ8433",
  EAN: "4058546289867",
  Extends: "4058546289867",
  ID: "AN10",
  Mods: "painted",
  Name: "FASTBACK",
})

</script>

<template>
  Edit Mode
  <div class="editor mt-2">

    <div class="form-floating mb-3" v-for="(v, k) in form" :key="k">
      <input type="text" class="form-control rounded-3" :id="k" v-model="form[k]">
      <label :for="k">{{k}}</label>
    </div>

    <span class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" @click="sendForm">
      Send
    </span>
  </div>
</template>