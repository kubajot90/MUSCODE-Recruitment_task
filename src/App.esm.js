import { Todo } from "./todo/Todo.esm.js";
// import { Products__list } from "./products/products__list/Products__list.esm.js";
import { Products } from "./products/Products.esm.js";

class App {
  constructor() {
    this.todo = new Todo();
    this.products = new Products();
    // this.products__list = new Products__list();
  }

  run() {}
}

const app = new App();
app.run();
