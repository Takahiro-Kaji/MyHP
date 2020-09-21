import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Skills from '../views/Skills.vue'
import Works from '../views/Works.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)


// main.jsからroutesを読み込むのでexportするのを忘れないこと！！
export const routes = [
  {path: '', component: Home, name:'Home'},
  {path: '/aboutMe', component: AboutMe, name:'AboutMe'},
  {path: '/skills', component: Skills, name:'Skills'},
  {path: '/works', component: Works, name:'Works'},
  {path: '/contact', component: Contact, name:'Contact'},
]
