<script setup lang="ts">

const props = defineProps<{
  action?: any
  text?: string
  icon?: string
}>()

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
  <li @click="OnClick" class="list-group-item">
    <i :class="['bi me-2', icon || 'bi-balloon-heart']" />
    <span>{{ text || "lorem ipsum" }}</span>
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