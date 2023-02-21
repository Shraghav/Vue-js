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
    
        <custom_input  v-for="(str,i) in Inputs" 
        :key="i" 
        v-model="str.value"
        :label="str.label"
        :type="str.type"
        />
        <button>Login</button>
    </div>
    </form>
    `,
    components:['custom_input'],
    data() {
        return{
            font: "LOGIN FORM",
            Inputs: [{
                label: "Email",
                value: "",
                type:"email"
            },
                {
                    label: "Password",
                    value: "",
                    type: "password"
                }
            ],
            email: "",
            password:"",
        
        }
    },
    methods: {
        handleSubmit() {
            //e.preventDefault() can be used instead of submit.prevent
            console.log("EMAIL:",this.Inputs[0].value,"PASSWORD:",this.Inputs[1].value);
        }
    }
})

app.component('custom_input',{
    template: `
    <label>
    {{label}}
    <input :type="type" v-model="input">
    </label>

    `,
    props: ['label','modelValue','type'],
    computed:{
        input:{
        get(){
            return this.modelValue
        },
        set(value){
            this.$emit('update:modelValue',value)
            
        }
    }
}
})
app.mount('#add')