var app = new Vue({
  el: "#app",
  data: {
    message: "We're in!",
    newTaskText: "",
    todos: [],
  },
  methods: {
    handleToggle: function (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
    },
    handleSubmit: function (e) {
      e.preventDefault();
      this.todos.push({
        id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
        completed: false,
        task: this.newTaskText,
      });
      this.newTaskText = "";
      this.saveTodos();
    },
    saveTodos: function() {
      window.localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },
  mounted: function () {
    loaded_todos = window.localStorage.getItem("todos");
    if (loaded_todos) {
      this.todos = JSON.parse(loaded_todos);
    }
  },
});
