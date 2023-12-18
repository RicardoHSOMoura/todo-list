/* var todos = [
  {
    name:"Aprender HTML, CSS e Javascript",
    done: false
  }, 
  {
    name: "Aprender o básico de Vue JS",
    done: false
  }, 
  {
    name: "Completar o desafio de Vue JS com excelência",
    done: false
  }
] */

const TodoList = {
  data() {
    return {
      //todos: window.todos,
      todos: [{
        name: null,
        done: false
      }],
      newTodo: {}

    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.name) {
        this.todos.push(this.newTodo)
        this.newTodo = {
          done: false
        }
        localStorage.setItem("todos", JSON.stringify(this.todos))
      } else {
        alert("O campo não pode estar vazio!")
      }
    },
    // clearList() {
    //   this.todos = []
    // }
  }
};

Vue.createApp(TodoList).mount('#app')