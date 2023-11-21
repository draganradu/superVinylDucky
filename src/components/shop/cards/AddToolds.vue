<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from "vuex"
import CardTool from "@/components/tools/helpers/card.vue"
import type { toolType } from "@/store/tools/type"

// hooks ---------------------------------------
const store = useStore()

// methods ---------------------------------------
const sendForm = () => {
  // set alert
  store.commit('user/SetAlert', { text: `We added ${form.value.ID}`, type: "success ", autoRemove: true, hiden: false  })
  // add to firestore
  store.dispatch("tools/AddTool", form.value)
  // reset form
  form.value = { ...formInitial }
}

// data ---------------------------------------
const description = {
  "ID": "The id is [Location + ID]",
  "location": "code | RA	Office tools | DU	Garadge tools | DR	Boxez mobil| AG	Boxex fixed | AN	Other Assets | A	Legacy | D 	Legacy",
  "maker": "who made it | 'Parkside'",
  "model": "what is it | 'Tabel saw 300'",
  "description": ""
}

const formInitial: toolType = {
  model: "",
  maker: "",
  description: "",
  color: "",
  price: 50,
  currentMarketPrice: 98,
  retailPrice: 99,
  owner: "wjnCEzeiA4f6M75FeLMf6efZ8433",
  EAN: "",
  extends: "",
  ID: "",
  mods: [""],
  consumables: [""],
  images: ["1"],
  otherID: "",
  usedIn: [""],
  size: [0],
  weight: 0,
  purchaseDate: new Date(),
  usage: 1,
  repairs: [""],
  borrowed: [{ id: "", start: new Date(), end: new Date(), note: "" }],
  location: "",
}

let form = ref<toolType>({
  ...formInitial
})

// methods ---------------------------------------

const getPosition = (needle: string) => {
  const keys = Object.keys(description)
  const position = keys.indexOf(needle)
  return position + 1
}
</script>

<template>
  <CardTool title="Add Tools">
    <div class="editor mt-2 ">
      <div v-for="(v, k) in form" :key="k" :class="`position-${getPosition(k)}`">
        <!-- String -->
        <div class="form-floating mb-3" v-if="typeof form[k] === 'string'">
          <input type="text" class="form-control rounded-3" :id="k" v-model="form[k]">
          <label :for="k">{{ k }}</label>
          <small id="emailHelp" class="form-text text-muted">{{ description[k] }}</small>
        </div>

        <!-- Number -->
        <div class="form-floating mb-3" v-else-if="typeof form[k] === 'number'">
          <input type="number" class="form-control rounded-3" :id="k" v-model="form[k]">
          <label :for="k">{{ k }}</label>
        </div>

        <!-- Array | String -->
        <div class=" mb-3" v-else-if="Array.isArray(form[k]) && typeof form[k][0] === 'string'">
          <text>{{ k }}</text>
          <input type="text" class="form-control rounded-3 mt-1" v-for="(v2, k2) in form[k]" :key="k2"
            v-model="form[k][k2]">
          <i class="bi bi-plus-circle" @click="() => { form[k].push('') }" />
        </div>

        <!-- Array | Number -->
        <div class="form-floating mb-3" v-else-if="Array.isArray(form[k]) && typeof form[k][0] === 'number'">
          <text>{{ k }}</text>
          <input type="number" class="form-control rounded-3 mt-1" v-for="(v2, k2) in form[k]" :key="k2"
            v-model="form[k][k2]">

          <i class="bi bi-plus-circle" @click="() => { form[k].push(0) }" />
        </div>

        <div v-else>
          NOPE
          {{ form[k] }}
        </div>
      </div>
    </div>
    <span class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" @click="sendForm">
      Send
    </span>
  </CardTool>
</template>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;

  @for $i from 1 through 50 {
    .position-#{$i} {
      order: #{$i};
    }
  }

  .position-0 {
    order: 99;
  }
}
</style>