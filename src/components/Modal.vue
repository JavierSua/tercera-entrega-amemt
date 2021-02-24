<template>
	<div class="modal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<slot name="modal-header"></slot>
				</div>
				<slot name="form"></slot>
				<b-progress :value="this.progressValue" :max="max" ></b-progress>	
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	computed: mapGetters(['progressValue']),
	data(){
		return {
			max: 100
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