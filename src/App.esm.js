import { Todo } from "./todo/Todo.esm.js";
import { Products } from "./products/Products.esm.js";

class App {
  constructor() {
    this.todo = new Todo();
    this.products = new Products();
  }
}

const app = new App();
