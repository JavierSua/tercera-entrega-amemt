<template>
	<div class="modal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<slot name="modal-header"></slot>
				</div>
				<slot name="form"></slot>
				<div class="progress">
					<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	data(){
		return {

		}
	},
	methods: {

	},
}
</script>
<style scoped>
.modal {
	position: fixed;
	display: flex;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgb(0, 0, 0, 0.4)
}
</style>