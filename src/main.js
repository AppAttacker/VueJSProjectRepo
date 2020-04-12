// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

import Vue from 'vue';
import App from './App';
import router from './router';
import 'beautify-scrollbar/dist/index.css';
import 'v2-table/dist/index.css';
import V2Table from 'v2-table';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(V2Table);

Vue.config.productionTip = false;

Vue.filter('capitalize', function(value) {
	if (!value) return '';
	value = value.toString();
	return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.component('GreetingPane', {
	props: ['name'],
	template: `<div>Hey {{name | capitalize}}... your are working on Vue JS.</div>`
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	validations: {},
	components: { App },
	template: '<App/>'
});
