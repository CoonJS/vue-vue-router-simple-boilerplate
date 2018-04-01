import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './src/App.vue';
import routes from './src/routes';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('body');