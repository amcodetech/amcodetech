<template>
	<article class="resume">
		<div class="resume__context">
			<p>
				Olá! Eu sou Andre Menezes e atuo como desenvolvedor frontend desde 2021!
			</p>
			<p>
				Sou tecnólogo em Informática para Negócios e busco me especializar cada vez mais no desenvolvimento frontend!
			</p>
			<p>
				Meu foco principal é o desenvolvimento frontend, porém tenho apreço por tecnologias mobile e UX/UI Design, além de
				conhecimentos em backend!
			</p>
			<p>
				Apaixonado por tecnologia desde a infância, encontrei na programação uma carreira promissora, onde posso
				contribuir para o avanço da sociedade.
			</p>

		</div>
		<div class="resume__image">
			<img height="500" src="https://octocat-generator-assets.githubusercontent.com/my-octocat-1621982977678.png"
				alt="octocat" />
		</div>
	</article>
</template>
<script>
export default {
	name: 'AppHome'
}
</script>

<style lang="sass">
.resume
	display: grid
	grid-template-columns: 1fr 1fr
	min-height: calc(100vh - 3.125rem)
	width: 100%

	&__context
		animation: slide 1s ease-in-out
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
			animation: pulse 1.5s ease-in-out
			text-shadow: 2px 2px 2px red

</style>