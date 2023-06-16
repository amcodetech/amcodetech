<template>
	<form class="form" method="POST">
		<div>
			<label for="email">E-mail</label>
			<input type="email" name="email" required>
		</div>
		<div>
			<label for="message">Mensagem</label>
			<input type="text" id="message" name="message" required>
		</div>
		<button type="button" @click="sendMessage">Enviar</button>
		<div v-if="modalOpen" class="modal">
			<span>Mensagem enviada com sucesso!</span>
		</div>
	</form>
</template>
<script>
export default {
	name: 'AppContact',
	data() {
		return {
			modalOpen: false
		}
	},
	methods: {
		sendMessage() {
			this.modalOpen = true
			setTimeout(() => { this.modalOpen = false }, 3000)
		},
	}
}
</script>

<style lang="sass" scoped>
@use '../styles/pallete' as color
.form
	align-items: center
	display: flex
	flex-direction: column
	justify-content: center
	position: relative
	width: 100vw
	height: calc(100vh - 3.125rem)

.modal
	animation: show .5s ease-in-out
	background-color: color.$green
	border-radius: .2rem
	display: flex
	align-items: center
	justify-content: center
	height: 3rem
	padding: 1rem 3rem
	position: absolute
	overflow: hidden
	top: 1rem
	margin: 0 auto

	&:after
		animation: loading 3s ease-in-out
		content: ''
		height: .3rem
		background-color: darken(color.$green, 15%)
		-webkit-text-fill-color: transparent
		position: absolute
		width: 100%
		bottom: 0
		left: 0
		transition: 5s
</style>