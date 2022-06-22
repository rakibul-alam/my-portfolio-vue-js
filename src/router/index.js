import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import Rakib from  '../components/Rakib'
import About from  '../components/About'
import Portfolio from  '../components/Portfolio'
import Gallery from  '../components/Gallery'
import Contact from  '../components/Contact'

Vue.use(Router) //router package use for vue library

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rakib',
      name: 'Rakib',
      component: Rakib
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery //register for this path
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

  ],

  mode: 'history' //# remove from url mode
})
