<template>
	<div class="resume">
		<form class="form">
			<Modal v-if="modalOpen">Mensagem enviada com sucesso!</Modal>
			<div class="form__content">
				<input class="form__content__input" type="text" v-model="contact.name" id='name' />
				<label class="form__content__title">Nome</label>

			</div>
			<div class="form__content">
				<input class="form__content__input" type="email" v-model="contact.email" id='name' />
				<label class="form__content__title">E-mail</label>

			</div>
			<div class="form__content">
				<input class="form__content__input" type="phone" v-model="contact.phone" id='name' />
				<label class="form__content__title">Telefone</label>
			</div>
			<div class="form__content">
				<input class="form__content__input" type="textarea" v-model="contact.message" id='name' />
				<label class="form__content__title">Mensagem</label>

			</div>
			<button type="button" class="form__content__button" @click="sendMessage">Enviar</button>
		</form>
	</div>
</template>
<script>
import Modal from '@/components/Modal.vue';

export default {
	name: 'AppContact',
	components: {
		Modal
	},
	data() {
		return {
			modalOpen: false,
			contact: {
				name: '',
				email: '',
				phone: '',
				message: ''
			}
		}
	},
	methods: {
		sendMessage() {
			this.modalOpen = true;

			// implementar lógica de envio de mensagem

			setTimeout(() => this.modalOpen = false, 3000)
		}
	}
}
</script>

<style lang="sass" scoped>
@use '../styles/pallete' as color
.form
	align-items: center
	display: flex
	flex-direction: column
	gap: 2rem
	justify-content: center
	position: relative
	width: 100vw
	height: calc(100vh - 3.125rem)

.form__content
	border: 1px solid color.$orange-high
	border-radius: .2rem
	position: relative
	height: 3rem
	margin-bottom: .5rem
	width: 50%

	&__title
		background: none
		color: darken(color.$text, 40%)
		top: 1rem
		left: .5rem
		pointer-events: none
		position: absolute
		transition: .5s
		z-index: 0

	&__input
		background: none
		border: none
		color: color.$text
		font-size: 1rem
		height: 100%
		outline: none
		overflow: hidden
		padding: 0 1rem
		width: 100%
		z-index: 1

		&:focus + .form__content__title,
		&:valid + .form__content__title
			background: color.$orange-high
			border-radius: .2rem
			color: color.$text
			font-size: .8rem
			font-weight: 500
			left: .5rem
			padding: .2rem .4rem
			text-shadow: 1px 1px 2px color.$bg-primary
			text-transform: lowercase
			top: -.5rem

	

	&__button
		border: none
		border-radius: .2rem
		background: linear-gradient(to right, color.$orange-high, color.$orange-low)
		cursor: pointer
		padding: .5rem 3rem
		font-size: 1rem
		text-shadow: 2px 2px 2px darken(color.$orange-low, 10%)
		text-transform: uppercase
		font-weight: 500
</style>