<script setup lang="ts">
import { ref } from 'vue';
import { formHelper } from './shop/crud/formStructure'

// 0.0.8 ----------------------------------------
// hooks ----------------------------------------
// methods --------------------------------------
// store / props / params -----------------------
const props = defineProps<{
  submitForm: any
  data: any
  exclude: string[]
  submitText: string
}>()
// events ---------------------------------------
// data -----------------------------------------
const form = ref(formHelper.toString({
  ...props.data
}))
// logic ----------------------------------------
</script>
<template>
  <div v-for="(v, k) in form" :key="k">
    <!-- exclusion list -->
    <div v-if="exclude.includes(k as unknown as string)" class="d-none">
      {{ k }}
    </div>

    <!-- Checkbox | Boolean -->
    <div v-else-if="typeof form[k] === 'boolean'">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="form[k]" :id="(k as unknown as string)">
        <label :for="(k as unknown as string)">{{ k }}</label>
      </div>
    </div>

    <!-- Input | String -->
    <div v-else-if="typeof form[k] === 'string'">
      <div class="form-floating mb-3">
        <input type="text" class="form-control rounded-3 input-2" :id="k" v-model="(form[k])">
        <label :for="(k as unknown as string)">{{ k }}</label>
      </div>
    </div>

    <!-- Input | Number -->
    <div v-else-if="typeof form[k] === 'number'">
      <div class="form-floating mb-3">
        <input type="number" class="form-control rounded-3 input-2" :id="k" v-model="form[k]">
        <label :for="(k as unknown as string)">{{ k }}</label>
      </div>
    </div>

    <!-- Input | Object -->
    <div v-else-if="typeof form[k] === 'object' && !Array.isArray(form[k]) && form[k] !== null">
      <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Leave a comment here" id="en-description"
          v-model="(form[k] as any).description" style="height: 100px"></textarea>
        <label for="en-description">{{ k }} >> Description</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control rounded-3 input-2" :id="k" v-model="(form[k] as any).name">
        <label :for="(k as unknown as string)">{{ k }} >> Name</label>
      </div>
    </div>

    <!-- what remains -->
    <div v-else>
      {{ k }}
    </div>
  </div>
  <span class="w-100 py-2 mb-2 mt-4 btn btn-outline-secondary rounded-3" @click="submitForm(form)">
    {{ submitText }}
  </span>
</template>
<style lang="scss" scoped>
.form-check {
  label {
    color: black;
  }
}
</style>