<template>
	<article class="resume" id="sobre">
		<div class="resume__context">
			<p>
				Olá! Eu sou Andre Menezes e atuo como desenvolvedor frontend desde 2021!
			</p>
		</div>
		<div class="resume__image">
			<img align="right" height="500"
				src="https://octocat-generator-assets.githubusercontent.com/my-octocat-1621982977678.png" alt="octocat" />
		</div>
	</article>
</template>
<script>
export default {
	name: 'AppAbout'
}
</script>

<style lang="sass" scoped>
.resume
	background-image: linear-gradient(45deg, rgba(25,25,25,1) 25%, rgba(25,25,25,.9) 50%, rgba(25,25,25,.6) 80%, rgba(25,25,25,.3) 100%), url('../assets/bg_img.jpg')
	background-size: cover
	background-repeat: no-repeat
	background-position-y: center
	display: grid
	grid-template-columns: 1fr 1fr
	filter: blur(10%)
	height: calc(100vh - 3.125rem)
	width: 100%

	&__context
		align-items: center
		display: flex
		justify-content: center
		flex-direction: column
		gap: 1.5rem
		line-height: 1.5
		padding: 0 5rem
		& p
			text-align: justify

	&__image
		align-items: center
		display: flex
		justify-content: center
		overflow: hidden
		& img
			animation: slide 1.5s ease-in-out
			text-shadow: 2px 2px 2px red

@keyframes slide
	0%
		transform: scale(0)
	50%
		transform: scale(1.2)
	100%
		transform: scale(1)
</style>