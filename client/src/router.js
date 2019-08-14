import Vue from 'vue';
import Router from 'vue-router';
import Guests from '@/views/Guests';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/guests',
      name: 'guests',
      component: Guests
    }
  ]
})

export default router;
