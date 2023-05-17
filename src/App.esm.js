import { Todo } from "./todo/Todo.esm.js";
import { Products__list } from "./products__list/Products__list.esm.js";

class App {
  constructor() {
    this.todo = new Todo();
    this.products__list = new Products__list();
  }

  run() {}
}

const app = new App();
app.run();
