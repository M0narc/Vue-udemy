const udemytest = Vue.createApp({
    data(){
        return{
            fullName: 'Franco Matias Luján',
            age: '28',
            ageInFiveYears: this.age + 5,
            randomNum: Math.random(5),
            ranImg: 'guts.jpg'
        };
    },
})

udemytest.mount('#assignment')