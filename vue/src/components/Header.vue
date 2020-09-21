<template lang="pug">
  .Header
    ul
      li.aboutMeLink(@click="goHome")
        | あ
      li.aboutMeLink(@click="goAboutMe")
        | あ
      li.skillsLink(@click="goSkills")
        | あ
      li.worksLink(@click="goWorks")
        | あ
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
    }
  }
}
</script>

<style lang="scss">
.Header{
  background: rgb(171, 250, 243);
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
