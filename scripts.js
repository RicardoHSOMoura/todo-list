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
  },
  created() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
    console.log("Created")
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos))
    console.log("Updated")
  }
};

Vue.createApp(TodoList).mount('#app')