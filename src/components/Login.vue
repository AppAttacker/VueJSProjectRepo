<template>
	<b-container>
		<b-row class="my-1">
			<b-col sm="3">
				<label for="username">Username:</label>
			</b-col>
			<b-col sm="9">
				<b-form-input
					id="username"
					type="email"
					v-model="mail"
				></b-form-input>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col sm="3">
				<label for="password">Password:</label>
			</b-col>
			<b-col sm="9">
				<b-form-input
					id="password"
					type="password"
					v-model="password"
				></b-form-input>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col>
				<b-button variant="success" v-on:click="doLogin">Login</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import axios from 'axios'
export default {
	data: {
		mail: '',
		password: ''
	},
	methods: {
		doLogin() {
			alert("inside doLogin"+this.mail);
			axios({
			method: 'POST',
			url: 'http://localhost:3000/login',
			body:{email: this.mail, password: this.password}
		}).then(
				result => {
					console.log(result);
					// this.list = result.data.data;
				},
				error => {
					console.error(error);
				}
			);
		}
	}
};
</script>
