import Vue from 'vue';
import Router from 'vue-router';
import Guests from '@/views/Guests';
import Home from '@/views/Home';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/guests',
      name: 'guests',
      component: Guests
    }
  ]
})

export default router;
