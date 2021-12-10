import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/firstVuePage'
import newRouterPage from './components/pages/newRouterPage'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'

import Home from './components/pages/Home'
import Tags from './components/pages/Tags'

const routes = [
	// project routes

	{
		path: '/',
		component: Home
	},
	{
		path: '/tags',
		component: Tags
	},

	{
		path: '/new-vue-route',
		component: firstPage
	},
	{
		path: '/new-router-page',
		component: newRouterPage
	},

	// vue hooks
	{
		path: '/hooks',
		component: hooks
	},
	{
		path: '/methods',
		component: methods
	},
]

export default new Router({
	mode: 'history',
	routes
})