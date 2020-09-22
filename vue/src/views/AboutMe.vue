<template lang="pug">
  .aboutMe
    .container
      section.area
        .myName
          | 梶 尚洋｜かじ たかひろ
      section.area
        | webページ
      section.area
        | ITインフラ
      section.area
        | 心理学
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style>
.container {
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
}
.area {
  position: relative;
  scroll-snap-align: start;
  height: 100vh;
}

</style>