let app = Vue.createApp({
    data: function () {
        return {
            greet: "Toggle button",
            isVisible1: false,
            greeting: " "
        }
    },
    methods: {
        togglebox() {
            this.isVisible1 =! this.isVisible1 // this is created to make use of button 
            
        },
        print_greet(greeting) {
            console.log(greeting)
        }
    }
})
app.component('login_component', {
    template: `
    <form @submit.prevent="handleSubmit">
    <div>
        <h1>{{font}}</h1>
        <input type="email" v-model="email"/>
        <input type="password" v-model="password"/>
        <button>Click</button>
    </div>
    </form>
    `,
    data() {
        return{
            font: "LOGIN FORM",
            email: "",
            password:""
        }
    },
    methods: {
        handleSubmit() {
            //e.preventDefault() can be used instead of submit.prevent
            console.log("Email:", this.email)
            console.log("Password:",this.password)
        }
    }
})

app.mount('#add')