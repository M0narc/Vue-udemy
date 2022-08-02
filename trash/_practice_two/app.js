const app = Vue.createApp ({
    data() {
        return {
            name:'',
            lastN:'',
            lastNConf:'',
        };
    },
    methods:{
        popAlert(){
            alert('Random text');
        },
        setName(event){
            this.name = event.target.value;
        },
        setLastName(event){
            this.lastN = event.target.value;
            this.lastNConf = this.lastN;
            this.lastN = '';
        }
    }
});

app.mount("#assignment")
