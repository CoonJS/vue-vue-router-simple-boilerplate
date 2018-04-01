import HomePage from './pages/Home/index.vue';
import PageA from './pages/PageA/index.vue';
import PageB from './pages/PageB/index.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/page-a',
    name: 'PageA',
    component: PageA
  },
  {
    path: '/page-b',
    name: 'PageB',
    component: PageB
  }
];