const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal(){
    // extract the value the user input
    const enteredValue = inputEl.value;
    //create a new element li item
    const listItemEl = document.createElement('li')
    listItemEl.textContent = enteredValue
    listEl.appendChild(listItemEl)
    inputEl.value = '';
}

//click listener 'clicl' event passing click as a string as a first argument
// the second arg is the function that we need to trigger when the click occurs
buttonEl.addEventListener('click', addGoal)
