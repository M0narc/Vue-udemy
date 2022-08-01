const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      nick: '',
      displayedNick: ''
    };
  },
  methods: {
    addCounter(num){
      this.counter = this.counter + num;
    },
    restCounter(num){
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
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
    }
  }
});

app.mount('#events');
