require('./bootstrap');

import Vue from 'vue'
import router from './router'
import App from './components/app.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import common from './common'

Vue.mixin(common)
Vue.use(ViewUI);

const app = new Vue({
	el: '#app',
	router,
	components: { App }
});
