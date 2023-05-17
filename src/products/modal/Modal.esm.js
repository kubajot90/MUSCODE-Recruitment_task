import { products__data } from "../products__data.js";

export class Modal {
  constructor(toggleModal, submitEdit) {
    this.toggleModal = toggleModal;
    this.submitEdit = submitEdit;

    this.form = document.getElementById("modal-form");
    this.cancelButton = document.getElementById("cancel-btn");

    this.nameInput = document.getElementById("name-input");
    this.priceInput = document.getElementById("price-input");
    this.discountInput = document.getElementById("discount-input");
    this.currencySelect = document.getElementById("currency-select");

    this.addListeners();
  }

  addListeners() {
    this.form.addEventListener("submit", (e) => this.collectFormData(e));
    this.form.removeEventListener("submit", (e) => this.collectFormData(e));

    this.cancelButton.addEventListener("click", () => this.toggleModal());
    this.cancelButton.removeEventListener("click", () => this.toggleModal());
  }

  collectFormData(e) {
    e.preventDefault();

    const formData = new FormData(this.form, this.saveButton);
    const formDataObj = Object.fromEntries(formData.entries());

    this.form.reset();
    this.toggleModal();
  }

  setInputsValue(productId) {
    const product = this.filterProducts(productId);

    this.nameInput.value = product.name;
    this.priceInput.value = product.price;
    this.discountInput.value = product.discountPrice;
    this.currencySelect.value = product.currency;
  }

  filterProducts(id) {
    const product = products__data.filter((product) => product.id === id);
    return product[0];
  }
}
