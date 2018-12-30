import Vue from 'vue';
import App from './App.vue';
import router from './router';

// jason-css
import '../src/responsive.scss';
// markdown css
import 'github-markdown-css/github-markdown.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');