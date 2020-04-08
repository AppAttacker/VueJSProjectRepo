<template>
  <div class="hello">
    <h2><GreetingPane v-bind:name="$route.params.name"></GreetingPane> {{ msg }}</h2>
    
    <b-container>
      <b-row class="text-left">
        <b-col>
        <b-button variant="info" name="btnMore" v-on:click="displayMoreInfo">{{ !this.isActive ? "More Info.." : "Less.." }}</b-button>
        <div v-if="isActive">
          <form @submit.prevent="addSkill">
            <div class="form-group" :class="{ 'hasError': $v.$error }">
            <input v-focus v-validInput type="text" placeholder="Enter the skill" v-model="skill" @input="$v.$touch()">
            </div>
            <div class="error" v-if="!$v.skill.minLength">Skill must have at least 4 letters.</div>
            <div class="error" v-if="!$v.skill.required">Field is required</div>
          <ol>
            <li v-for="(skill, index) in skills" :key="index">
              {{skill.skill}}
            </li>
          </ol>
          </form>
          <!-- nested route here   -->
          <div><router-view v-bind:user="$route.params.name"/></div>
        </div>
        <div>
          <br>
          <b-form-group label="Employee List:">
            <b-form-radio v-model="viewOption" name="some-radios" value="component">Component View</b-form-radio>
            <b-form-radio v-model="viewOption" name="some-radios" value="table">Table View</b-form-radio>
          </b-form-group>
         </div>
        </b-col>
      </b-row>
    </b-container>
    <input type="text" v-model="filterVal" placeholder="Search here">
    <b-container v-if="viewOption=='component'">
      <b-row>
        <div v-for="(data, index) in filteredVal()" :key="index">
          <b-col>
            <EmployeeUIView :parentData="data"/>
          </b-col>
        </div>
      </b-row>
    </b-container>
     
    <b-container v-if="viewOption=='table'">
      <b-row>
        <!-- <div v-for="(data, index) in list" :key="index"> -->
          <b-col>
          <div>
            <table id="sampleTable" border>

                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
                <th>Photo</th>
                </tr>
              
              <tbody>
              <tr v-for="(data, index) in filteredVal()" :key="index">
                <td>{{ data.id }}</td>
                <td>{{ data.employee_name }}</td>
                <td>{{ data.employee_salary }}</td>
                <td class="txtb" v-bind:style="data.employee_age>40 ? {color:'red'}:{color:'green'}">{{ data.employee_age }}</td>
                <td>{{ data.profile_image }}</td>
              </tr>
              </tbody>
            </table>

          <!--  <v2-table width="200" :data="list" border >
              <v2-table-column label="Id" prop="id"></v2-table-column>
              <v2-table-column label="Name" prop="employee_name"></v2-table-column>
              <v2-table-column label="Salary" prop="employee_salary"></v2-table-column>  
              <v2-table-column label="Age" prop="employee_age"></v2-table-column>
              <v2-table-column label="Photo" prop="profile_image"></v2-table-column>  
            </v2-table> -->
          </div> 
          </b-col>
        <!-- </div> -->
      </b-row>
    </b-container>
</div>
  
</template>

<script>
import axios from 'axios'
import Languages from '../components/Languages'
import {required, minLength} from 'vuelidate/lib/validators'
import EmployeeUIView from '../components/EmployeeUIView'

export default {
  name: 'EmpSkill',
  components: {
    Languages, EmployeeUIView
  },
  data () {
    return {
      msg: 'message from data part',
      isActive: false,
      viewOption: 'component',
      filterVal : '',
      list: [],
      skill: '',
      Employee: {
        'id': '',
        'employee_name': '',
        'employee_salary': '',
        'employee_age': 0,
        'employee_image': ''
      },
      skills: [
        {skill: 'Java'},
        {skill: 'Vue.JS'},
        {skill: 'ExtJS'}
      ]
    }
  },
  mounted() {
    axios({method: 'GET', 'url': "http://dummy.restapiexample.com/api/v1/employees"}).then(result =>{
      console.log(result);
      this.list = result.data.data;
    }, error=>{
      console.error(error);
    });
  },
  // computed: {
  //   filteredVal(){
  //     console.log(this.filteredVal)
  //     if(this.filterVal.length > 0){
  //       return this.list.filter(employee => {
  //         console.log("inside if")
  //         return (employee.employee_name.indexOf(this.filterVal)>0);
  //       });
  //     }else{
  //       console.log("inside else")
  //       return this.list;
  //     }
  //   }
  // },
  validations: {
    skill: {
      minLength: minLength(4)
    }
  },
  methods: {
    addSkill(){
      if(this.skill.length > 0){
        this.skills.push({skill: this.skill})
        this.skill = ''
        alert('Skill Added')
      }
    },
    displayMoreInfo(){
      this.isActive = !this.isActive
    },
    filteredVal(){
      if(this.filterVal.length > 0){
        return this.list.filter(employee => {
          return (employee.employee_name.toLowerCase().indexOf(this.filterVal.toLowerCase())>0);
        });
      }else{
        return this.list;
      }
    }
  },
  directives :{
    focus: {
      inserted: function (el,) {
        el.focus()
      }
    },
    validInput: {
      update: function(el, binding) {
        if(el.value.length > 3){
          el.style.color = "green"
        }else{
          el.style.color = "red"
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ol {list-style: none; counter-reset: li}

li::before {content: counter(li); color: red;
  display: inline-block; width: 1em;
  margin-left: -1em}
li {counter-increment: li}
a {
  color: #42b983;
}
.txtb {
  font-weight: bold;
}
</style>
