<script setup lang="ts">
// 0.0.8 ----------------------------------------
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Container from '@/scaffolding/Container.vue'
import Footer from "@/components/shop/footer.vue"
import Sidebar from "@/components/sidebar/index.vue"

// hooks ----------------------------------------
const store = useStore()
const router = useRouter()

// store / props / params -----------------------
const props = defineProps<{
  sidebar?: boolean
  title?: string
  description?: string
  forceCallProducts?: boolean
  onlyOnDevelop?: boolean
}>()

// events ---------------------------------------
onMounted(async () => {
  if(props.onlyOnDevelop && !store.state.user.isDebug) {
    router.push('/404')
  }

  if (props.forceCallProducts) {
    await store.dispatch('shop/callProducts')
  }
})

// SEO ----------------------------------------
if (props.title || props.description) {
  useHead({
    title: props.title || 'Vinyl Ducky',
    meta: [
      {
        name: 'description',
        content: props.description || 'We run a sticker shop called Vinyl Ducky, and we are proud of it!',
      },
    ],
  })
}
</script>

<template>
  <div id="shopLayout" class="bg-body-secondary pt-5">
    <Container>

      <Sidebar :sidebar="props.sidebar" />
      <div class="col">
        <div class="main-logo">Vinyl Ducky</div>
        <slot />
      </div>
    </Container>
    <Footer />
  </div>
</template>

<style lang="scss">
.main-logo {
  position: absolute;
  z-index: 1;
  transform: translateY(-100%);
  padding-bottom: 10px;
  font-weight: 800;
  opacity: 0.2;
  pointer-events: none;
}

#shopLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &>div {
    flex-grow: 1;
  }
}
</style>