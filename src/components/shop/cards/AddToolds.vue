<script setup lang="ts">
import CardTool from "@/components/tools/helpers/card.vue"
import type { toolType } from "@/store/tools/type";
import { reactive } from 'vue'

// methods ---------------------------------------
const sendForm = () => {
  // store.dispatch("tools/EditTool", form.value)
  console.log(form)
}

// data ---------------------------------------
const form = reactive<toolType>({
  model: "ana",
  maker: "Parkside",
  description: "cool looking tool",
  color: "red",
  price: 50,
  currentMarketPrice: 98,
  retailPrice: 99,
  owner: "wjnCEzeiA4f6M75FeLMf6efZ8433",
  EAN: "4058546289867",
  extends: "4058546289867",
  ID: "AN10",
  mods: ["painted"],
  consumables: [""],
  images: ["1", "2"],
  otherID: "",
  usedIn: [""],
  size: [0],
  weight: 0,
  purchaseDate: new Date(),
  usage: 1,
  repairs: [""],
  borrowed: [{ id: "", start: new Date(), end: new Date(), note: "" }],
  location: "",
})


</script>

<template>
  <CardTool title="Add Tools">
    <div class="editor mt-2">
      <div v-for="(v, k) in    form   " :key="k">
        <!-- String -->
        <div class="form-floating mb-3" v-if="typeof form[k] === 'string'">
          <input type="text" class="form-control rounded-3" :id="k" v-model="form[k]">
          <label :for="k">{{ k }}</label>
        </div>

        <!-- Number -->
        <div class="form-floating mb-3" v-else-if="typeof form[k] === 'number'">
          <input type="number" class="form-control rounded-3" :id="k" v-model="form[k]">
          <label :for="k">{{ k }}</label>
        </div>

        <!-- Array | String -->
        <div class=" mb-3" v-else-if="Array.isArray(form[k]) && typeof form[k][0] === 'string'">
          <label for="exampleInputEmail1">Email address</label>
          <input type="text" class="form-control rounded-3 mt-1" v-for="(v2, k2) in form[k]" :key="k2"
            v-model="form[k][k2]">
          <i class="bi bi-plus-circle" @click="() => { form[k].push('') }" />
        </div>

        <!-- Array | Number -->
        <div class="form-floating mb-3" v-else-if="Array.isArray(form[k]) && typeof form[k][0] === 'number'">
          <input type="text" class="form-control rounded-3 mt-1" v-for="(v2, k2) in form[k]" :key="k2"
            v-model="form[k][k2]">
          <i class="bi bi-plus-circle" @click="() => { form[k].push(0) }" />
        </div>

        <div v-else>
          NOPE
          {{ form[k] }}
        </div>
      </div>

      <span class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" @click=" sendForm ">
        Send
      </span>
    </div>
  </CardTool>
</template>