<template>
    <img src="../assets/logo.png">
</template>

<script>

import axios from 'axios'
export default {
    data: {
        list: [
                {         
                coronaFullStatus: {
                    name: '',
                    code: '',
                    population: 0,
                    updated_at: '',
                    today: {
                        deaths: 0,
                        confirmed: 0 
                    },
                    coordinates:{
                        latitude: 0,
                        longitude: 0
                    },
                    latest_data: {
                        deaths: 0, // Int or null
                        confirmed: 0, // Int or null
                        recovered: 0, // Int or null
                        critical: 0, // Int or null
                        calculated: {
                            death_rate: 0, // Float (%) or null
                            recovery_rate: 0,  // Float (%) or null
                            recovered_vs_death_ratio: 0, // Float (%) or null
                            cases_per_million_population: 0.0 // Float (%) or null
                        }
                    }
    
                }
            }
        ]
        
    },
    mounted() {
    axios({method: 'GET', 'url': "https://corona-api.com/countries"}).then(result =>{
      this.list = result.data
      console.log(this.list);
    }, error=>{
      console.error(error);
    });
  }
}
</script>