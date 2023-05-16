import { Todo } from "./todo/Todo.esm.js";

class App {
  constructor() {
    this.todo = new Todo({
      counter: document.getElementById("counter"),
      input: document.getElementById("todo-input"),
      form: document.getElementById("todo-form"),
      list: document.getElementById("todo-list"),
    });
  }

  run() {}
}

const app = new App();
app.run();
