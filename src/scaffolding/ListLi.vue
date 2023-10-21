<script setup lang="ts">

const props = defineProps<{
  action?: any
  text?: string
  icon?: string
}>()

const isLink = (typeof props.action === "string")

const OnClick = () => {
  if (!props.action) {
    console.log("nope")
  } else if (typeof props.action === "string") {
    // check if exteral url
    console.log("url")
  } else {
    console.log("run action")
  }
}
</script>

<template>
  <li class="list-group-item">
    <!-- is link -->
    <a class="a-clean" target="_blank" v-if="isLink" :href="props.action">
      <i :class="['bi me-2', icon || 'bi-balloon-heart']" />
      <span>{{ text || "lorem ipsum" }}</span>
    </a>
    <!-- is nothing -->
    <span v-else>
      <i :class="['bi me-2', icon || 'bi-balloon-heart']" />
      <span>{{ text || "lorem ipsum" }}</span>
    </span>
  </li>
</template>

<style lang="scss" scoped>
li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
}
</style>