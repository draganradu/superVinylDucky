<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div class="video">
    <div class="video-inner">
      <iframe :src="`https://www.youtube.com/embed/${id}?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=${id}`">
      </iframe>
    </div>
  </div>
</template>

<style lang="scss">
$height: 70vh;
$margin: 3rem;

.video {
  height: $height;
  margin-top: $margin * -1;
}

.video-inner {
  // add background image
  background-color: black;
  height: calc(#{$height} + #{$margin * 2});
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: 5;
}

.video-inner iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  transform: translateY(#{(100vh - $height)/2 * -1});
}

@media (min-aspect-ratio: 16/9) {
  .video-inner iframe {
    height: 56.25vw;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video-inner iframe {
    width: 177.78vh;
  }
}
</style>