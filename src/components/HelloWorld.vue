<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

defineProps<{
  msg: string
}>()

// const { t, locale } = useI18n()
const supportedLocales = Tr.supportedLocales

const changeLocal = (e: any) => {
  Tr.switchLanguage(e)
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <LanguageSwitcher />
    <span v-for="i in supportedLocales" :key="i" @click="changeLocal(i)">{{ i }} | </span>

    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
