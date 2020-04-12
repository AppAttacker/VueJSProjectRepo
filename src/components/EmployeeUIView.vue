<script>
export default {
	props: {
		parentData: Object
	},
	methods: {
		gotoEmployeePage() {
			alert('displaying..');
		}
	}
};
</script>
<template>
	<a class="" v-on:click="gotoEmployeePage">
		<div class="emp-comp">{{ this.parentData.employee_name }}</div>
	</a>
</template>
<style>
#example1 {
	border: 1px solid;
	padding: 10px;
	margin: 10px 100px 5px 100px;
	box-shadow: 5px 10px 8px #888888;
}
.wrapper {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 50px;
}
</style>
