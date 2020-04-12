import Vue from 'vue';
import Router from 'vue-router';
import Skills from '@/components/Skills';
import About from '@/components/About';
import VueLogo from '@/components/VueLogo';
import Languages from '@/components/Languages';
import Login from '@/components/Login';

Vue.use(Router);

let router = new Router({
	routes: [
		{
			path: '/login',
			component: Login,
			name: 'login',
			meta: {
				guest: true
			}
		},
		{
			path: '/skill/:name',
			component: Skills,
			name: 'skill',
			children: [
				{
					path: '/',
					component: Languages,
					name: 'language'
					// ,meta: {
					//   requiredAuth: true,
					//   is_admin: true
					// }
				}
			],
			meta: {
				requiredAuth: true,
				is_admin: true
			}
		},
		{
			path: '/about',
			component: About,
			name: 'about',
			meta: {
				guest: true
			}
		},
		{
			path: '/',
			component: Login,
			name: 'login',
			meta: {
				guest: true
			}
		},
		{
			path: '/logo',
			component: VueLogo,
			name: 'logo',
			meta: {
				requiredAuth: true
			}
		}
	]
});
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiredAuth)) {
		console.log("inside auth check");
		if (localStorage.getItem('jwt') == null) {
			console.log("jwt is null");
			next({
				path: '/login',
				params: { nextUrl: to.fullPath }
			});
		} else {
			console.log("jwt is not null");
			let user = JSON.parse(localStorage.getItem('user'));
			if (to.matched.some(record => record.meta.is_admin)) {
				console.log("admin check: "+user.is_admin);
				if (user.is_admin == 1) {
					next();
				} else {
					next({ nme: 'logo' });
				}
			} else {
				console.log("not admin meta");
				next();
			}
		}
	} else if (to.matched.some(record => record.meta.guest)) {
		console.log("guest check");
		if (localStorage.getItem('jwt') == null) {
			next();
		} else {
			next({ name: 'about' });
		}
	} else {
		console.log("else");
		next();
	}
});

export default router;
