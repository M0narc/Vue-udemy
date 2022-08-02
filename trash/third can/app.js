const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
      confirmedLast: '',
      nick: '',
      displayedNick: '',
      fullNWatcher: ''
    };
  },
  watch: {
      //here you can use a name that you've used in data
      name(value) {
        // this tells Vue to execute everytime whenever a property of
        // that name changes, WE DON'T RETURN ANYTHING
        // value is the new value of name, we can use name(oldValue, newValue)
        this.fullNWatcher = value + ' ' + this.displayedNick;
      },
      counter(value){
        if(value > 50 || value < -50) {
          this.counter = 0;
        }
        
      }
  },
  computed: {
    fullname(){
      if (this.name === '') {
        return '';
      }
      return this.confirmedName + ' ' +this.lastName
    }
  },
  methods: {
    addCounter(num){
      this.counter = this.counter + num;
    },
    restCounter(num){
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value;
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    setNick(){
      this.displayedNick = this.nick;
      this.nick = '';
    },
    submitForm(event){
      alert('Submitted!');
    },
    resetInput(){
      // document.querySelector('input').value = '';
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
