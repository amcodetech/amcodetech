import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppAbout from '../views/AppAbout.vue'
import AppProjects from '../views/AppProjects.vue'
import AppContact from '../views/AppContact.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: AppHome,
	},
	{
		path: '/sobre',
		name: 'sobre',
		component: AppAbout,
	},
	{
		path: '/projetos',
		name: 'projetos',
		component: AppProjects,
	},
	{
		path: '/contato',
		name: 'contato',
		component: AppContact,
	},
]

const history = createWebHistory()

const router = createRouter({
	history,
	routes,
})

export default router
