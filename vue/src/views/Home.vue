<template lang="pug">
  .Home
    .container
      section.area
        | デザイン
      section.area
        | webページ
      section.area
        | ITインフラ
      section.area
        | 心理学
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.container {
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
}
.area {
  scroll-snap-align: start;
  height: 100vh;
}
</style>
