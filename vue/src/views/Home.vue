<template lang="pug">
  span {{scrollY}}
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
  name: 'Home',
  data(){
    return{
    scrollY: 0
    }
  },
    mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
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
