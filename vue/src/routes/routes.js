import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Skills from '../views/Skills.vue'
import Works from '../views/Works.vue'
import Contact from '../views/Contact.vue'
// 本番は消す
import test from '../views/test.vue'

Vue.use(VueRouter)


// main.jsからroutesを読み込むのでexportするのを忘れないこと！！
export const routes = [
  {path: '', component: Home, name:'Home'},
  {path: '/aboutMe', component: AboutMe, name:'AboutMe'},
  {path: '/skills', component: Skills, name:'Skills'},
  {path: '/works', component: Works, name:'Works'},
  {path: '/contact', component: Contact, name:'Contact'},
  // 本番は消す
  {path: '/test', component: test, name:'test'},
]
