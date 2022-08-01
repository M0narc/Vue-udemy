const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'practice vue',
            courseGoalB: 'or not, whatever',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
// it needs a css selector (id in this case)
app.mount('#user-goal');