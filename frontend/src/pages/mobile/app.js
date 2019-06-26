import Vue from 'vue';
import App from './app.vue';
import router from '@/routers/router';
import store from '@/stores/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
