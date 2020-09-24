<template lang="pug">
  .Header
    ul
      li.homeLink(@click="goHome")
        | あ
      li.aboutMeLink(@click="goAboutMe")
        | あ
      li.skillsLink(@click="goSkills")
        | あ
      li.worksLink(@click="goWorks")
        | あ
      li.testLink(@click="goTest")
        | Test
</template>

<script>
export default {
  name: 'Header',
  methods:{
    goHome(){
      this.$router.push({name: 'Home'});
    },
    goAboutMe(){
      this.$router.push({name: 'AboutMe'});
    },
    goSkills(){
      this.$router.push({name: 'Skills'});
    },
    goWorks(){
      this.$router.push({name: 'Works'});
    },
    goTest(){
      this.$router.push({name: 'test'});
    }

  }
}
</script>

<style lang="scss">
.Header{
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  height: 95px;
  font-size: 12px;
  z-index: 100;
  ul {
    margin: 0;
    li {
      display: inline-block;
      margin-right: 2vw;
      list-style: none;
    }
  }
}
</style>
