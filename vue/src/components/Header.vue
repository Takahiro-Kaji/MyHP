<template lang="pug">
  .Header
    ul
      li.homeLink(@click="goHome")
        | Home
      li.aboutMeLink(@click="goAboutMe")
        | AboutMe
      li.skillsLink(@click="goSkills")
        | Skills
      li.worksLink(@click="goWorks")
        | Works
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
  background: rgba(200, 221, 219, 0.205);
  height: 5vw;
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
