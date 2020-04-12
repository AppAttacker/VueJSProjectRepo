<template>
  <b-container fluid>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="username">Username:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="username" type="text" v-model="username"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="username">E-mail:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="username" type="email" v-model="email"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="password">Password:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="password" type="password" v-model="password"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="re-password">Password:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="re-password" type="password" v-model="confirmPwd"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col>
        <b-button variant="success">Register</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

    data: {
        username: '',
        email: '',
        password: '',
        confirmPwd: ''
    },
    methods: {
      doRegister(){
        
      }
    }

    
}
</script>