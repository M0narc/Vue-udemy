const app = Vue.createApp ({
    data() {
        return{
            totalValue: 0,
            text: '',
        };
    },
    watch:{
        totalValue(value){
            if (value > 0){
                const that = this;
                setTimeout(function () {
                    that.totalValue = 0;
                }, 5000)
            }
        }
    },
    computed:{
        ranText(){
            if(this.totalValue < 37 && this.totalValue > 0){
                return 'Not there yet';
            } else if (this.totalValue > 37){
                return 'Too much!';
            } else {
                return this.totalValue
            }
        }
    },
    methods:{
        addFive(){
            this.totalValue = this.totalValue + 5;
        },
        addOne(){
            this.totalValue = this.totalValue + 1;
        },
        addNumber(num){
            this.totalValue = this.totalValue + num;
        }

    }
})

app.mount('#assignment')
