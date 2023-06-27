<template>
	<div class="modal">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'ModalBox'
}
</script>

<style scoped lang="sass">
@use '../styles/pallete' as color
.modal
	animation: slideToBottom .5s ease-in-out
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