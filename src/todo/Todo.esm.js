import { Todo__item } from "./todo__item/Todo__item.esm.js";

export class Todo {
  constructor() {
    this.counter = document.getElementById("counter");
    this.input = document.getElementById("todo-input");
    this.form = document.getElementById("todo-form");
    this.list = document.getElementById("todo-list");
    this.counterValue = 0;
    this.setCounter = this.setCounter.bind(this);
    this.init();
  }
  init() {
    this.form.addEventListener("submit", (e) => this.addItem(e));
    this.form.removeEventListener("submit", (e) => this.addItem(e));
  }

  addItem(e) {
    e.preventDefault();

    const inputValue = this.input.value;

    if (inputValue === "") return;

    const item = new Todo__item(inputValue, this.setCounter);
    this.list.appendChild(item.render());

    this.clearInput();
  }

  clearInput() {
    this.input.value = "";
  }

  setCounter(value) {
    this.counterValue = this.counterValue + value;
    this.renderCounter();
  }

  renderCounter() {
    this.counter.innerText = `Wykonane: ${this.counterValue}`;
  }
}
