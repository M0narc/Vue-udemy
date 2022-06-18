Vue.createApp({
    //a property name data which has a funct as a value
    data() {
        return {
            //goals array as a key, value pair
            goals: [],
            //conect this with a "directive"
            enteredValue: ''
        };
    },
    methods: {
        // here we can add methods and functions that should be callable 
        // in the HTML code
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');


// imperative approach
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     // extract the value the user input
//     const enteredValue = inputEl.value;
//     //create a new element li item
//     const listItemEl = document.createElement('li')
//     listItemEl.textContent = enteredValue
//     listEl.appendChild(listItemEl)
//     inputEl.value = '';
// }

// //click listener 'click' event passing click as a string as a first argument
// // the second arg is the function that we need to trigger when the click occurs
// buttonEl.addEventListener('click', addGoal)