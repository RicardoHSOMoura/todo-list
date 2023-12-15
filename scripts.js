/* var todos = [
  {
    name:"Aprender HTML, CSS e Javascript",
    active: false
  }, 
  {
    name: "Aprender o básico de Vue JS",
    active: false
  }, 
  {
    name: "Completar o desafio de Vue JS com excelência",
    active: false
  }
] */

const TodoList = {
  data() {
    return {
      //todos: window.todos,
      todos: [{
        name: null,
        active: false
      }],
      newTodo: {}

    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.name) {
        this.todos.push(this.newTodo)
        this.newTodo = {}
      }
    },
    clearList() {
      this.todos = []
    }
  }
};

Vue.createApp(TodoList).mount('#app')