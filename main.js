const { createApp } = Vue

createApp({
  data() {
    return {
        emails: [],
    }
  },
  created() {
    this.emailGen()
  },
  methods: {
    emailGen(){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (res) => {
            const email = res.data.response
            this.emails.push(email)
            if (this.emails.length < 10){
                this.emailGen()   
            }  else if (this.emails.length = 10){
                console.log(this.emails)
            }
        } )       
    },  
  }
}).mount('#app')


