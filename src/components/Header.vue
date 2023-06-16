<template>
	<header class="header">
		<h1 class="header__brand">
			<brand-logo class="header__brand__logo" />
			<span class="header__brand__name">AM Code Tech</span>
		</h1>
		<nav class="header__nav">
			<router-link v-for="item in menu" :key='item.title' :class="item.class" :to="item.path">
				{{ item.title }}
			</router-link>
		</nav>
		<div class="header__social">
			<a href="https://www.github.com/andre-menezes" target="_blank" class="header__social__brand"><github-logo /></a>
			<a href="https://www.linkedin.com/in/andre-smenezes" target="_blank"
				class="header__social__brand"><linkedin-logo /></a>
		</div>
	</header>
</template>

<script>
import BrandLogo from './BrandLogo.vue';
import GithubLogo from './GithubLogo.vue';
import LinkedinLogo from './LinkedinLogo.vue';

export default {
	name: "AppHeader",
	components: {
		BrandLogo,
		LinkedinLogo,
		GithubLogo
	},
	data() {
		return {
			currentPage: 'home',
			menu: [
				{ title: 'home', path: '/', class: ['header__nav__item', 'selected'] },
				{ title: 'sobre', path: '/sobre', class: ['header__nav__item'] },
				{ title: 'projetos', path: '/projetos', class: ['header__nav__item'] },
				{ title: 'contato', path: '/contato', class: ['header__nav__item'] }
			]
		}
	},
	created() {
		this.$router.afterEach((to, from) => {
			this.currentPage = to.name;
			this.menu.map(item => {
				if (item.title === to.name) {
					item.class.push('selected')
				} else {
					item.class = ['header__nav__item']
				}
			})
		});
	},
}
</script>

<style lang="sass" scoped>
@use '../styles/pallete' as color

.header
	align-items: center
	background-color: color.$bg-secondary
	display: flex
	height: 3.125rem
	justify-content: space-between
	padding: 0 8vw
	position: fixed
	width: 100vw
	z-index: 5

	&__brand
		align-items: center
		display: flex

		&__logo
			height: 2.5rem

		&__name
			background-image: linear-gradient(to right, color.$orange-high, color.$orange-low)
			cursor: default
			font-size: 1.8rem
			-webkit-background-clip: text
			-webkit-text-fill-color: transparent

	&__nav
		display: flex
		justify-content: space-evenly
		flex-grow: 1

		&__item
			font-size: 1rem
			font-family: "Russo One", sans-serif
			padding: 0 .3rem
			text-transform: uppercase
			text-shadow: 2px 2px 2px black

			&:hover
				position: relative

				&:after
					content: ''
					height: 3px
					background-image: linear-gradient(to right, color.$orange-high, color.$orange-low)
					-webkit-text-fill-color: transparent
					position: absolute
					width: 100%
					bottom: -.3rem
					left: 0
					transition: 1s
					animation: fade .3s ease-in-out



	&__social
		align-items: center
		display: flex
		gap: 1rem
		justify-content: center

		&__brand
			align-items: center
			display: flex
			cursor: pointer
			height: 2.5rem
			justify-content: center

.selected
	color: lighten(color.$orange-high, 10%)

@keyframes fade
	from
		width: 0
	to
		width: 100%
</style>
