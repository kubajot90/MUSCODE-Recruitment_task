import { products__data } from "../products__data.js";

export class Modal {
  constructor(toggleModal, submitEdit) {
    this.productIndex = null;
    this.toggleModal = toggleModal;
    this.submitEdit = submitEdit;

    this.form = document.getElementById("modal-form");
    this.cancelButton = document.getElementById("cancel-btn");

    this.modalTitle = document.getElementById("modal-title");
    this.modalImage = document.getElementById("modal-image");
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
    this.submitEdit(formDataObj);
    this.form.reset();
    this.toggleModal();
  }

  setInputsValue(productId) {
    this.productIndex = this.findProductIndex(productId);
    const product = products__data[this.productIndex];

    this.modalTitle.innerText = `Edycja produktu: ${product.name}`;
    this.modalImage.setAttribute(
      "style",
      `background-image: url(${product.imageUrl})`
    );
    this.nameInput.value = product.name;
    this.priceInput.value = product.price;
    this.discountInput.value = product.discountPrice;
    this.currencySelect.value = product.currency;
  }

  findProductIndex(id) {
    const index = products__data.findIndex((product) => product.id == id);
    return index;
  }
}
