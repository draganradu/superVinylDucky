<template>
  <div class="p-5">
    <div class="input-group input-group-sm mb-3">
      <form @submit.prevent="submitTodo">
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          v-model="newTodoContent" placeholder="text">
        <button type="submit" class="btn btn-primary" :disabled="!newTodoContent">add</button>
      </form>
    </div>


    <hr class="mt-5 mb-5" />
    <div v-for="i in toDos" :key="i.id" class="card mb-5">
      <div :class="['card-body', i.done ? 'bg-success-subtle text-strike' : '']">
        {{ i.content }}
        <div class="mt-3" v-if="!i.done">
          <button type="button" class="btn btn-danger me-2" @click="deleteTodo(i.id)">remove</button>
          <button type="button" class="btn btn-success me-2" @click="doneTodo(i.id)">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const toDos = ref([
  {
    id: 0,
    content: 'shave but',
    done: false
  },
  {
    id: 1,
    content: 'wash but',
    done: true
  }
])

const newTodoContent = ref('')


const submitTodo = () => {
  const getlargest = toDos.value.reduce((accumulator: number, currentValue) => {
    return accumulator > currentValue.id ? accumulator : currentValue.id
  }, 0)
  const newTodo = {
    id: getlargest + 1,
    content: newTodoContent.value,
    done: false
  }

  console.log(toDos.value.length)
  toDos.value.unshift(newTodo)

  newTodoContent.value = ""
}

const deleteTodo = (id: number) => {
  toDos.value = toDos.value.filter(item => item.id !== id)
}

const doneTodo = (id: number) => {
  const index = toDos.value.findIndex(item => item.id === id)
  toDos.value[index].done = true
}

</script>

<style scoped>
.text-strike {
  text-decoration: line-through !important;
}
</style>