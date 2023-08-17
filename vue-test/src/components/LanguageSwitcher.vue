<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'
import router from '@/router'
// import { watch } from 'vue'

const { t, locale, availableLocales } = useI18n()
const supportedLocales = Tr.supportedLocales

// watch(locale, (newLocale) => {
//   // set the new locale
// })

const switchLanguage = async (event: any) => {
  // <--- 1
  const newLocale = event.target.value // <--- 2
  await Tr.switchLanguage(newLocale) // <--- 3
  router.push({ path: `/${event.target.value}/` })
}
</script>

<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>