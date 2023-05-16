export class Todo__item {
  constructor(value, setCounter) {
    this.value = value;
    this.randomId = Math.random();
    this.setCounter = setCounter;
    this.checkbox = null;
  }

  render() {
    const item = document.createElement("li");
    item.setAttribute("class", "todo__item");
    item.innerHTML = `
      <input class="todo__checkbox" type="checkbox" id="${this.randomId}" />
        <label class="todo__label" for="${this.randomId}" >
        ${this.value}
        </label>
        <img class="check-icon" src="../assets/check.svg">
        
    `;
    this.addCheckboxListener(item, this.randomId);
    return item;
  }

  addCheckboxListener(item, id) {
    this.checkbox = item.querySelector(`[id='${id}']`);
    this.checkbox.addEventListener("click", () => this.toggleCounter());
    this.checkbox.removeEventListener("click", () => this.toggleCounter());
  }

  toggleCounter() {
    console.log("toggle");
    const isChecked = this.checkbox.checked;
    isChecked ? this.setCounter(1) : this.setCounter(-1);
  }
}
