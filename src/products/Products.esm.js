import { Product__tile } from "./product__tile/Product__tile.esm.js";
import { Products__list } from "./products__list/Products__list.esm.js";
import { Modal } from "./modal/Modal.esm.js";
import { products__data } from "./products__data.js";

export class Products {
  constructor() {
    this.products__list = new Products__list();
    this.product__tile = new Product__tile((productId) =>
      this.toggleModal(productId)
    );

    this.modal = new Modal(
      () => this.toggleModal(),
      (formData) => this.submitEdit(formData)
    );

    this.renderProducts(products__data);
    this.modalElement = document.getElementById("modal");
  }

  renderProducts(products) {
    this.clearProducts();

    products.forEach((product) => {
      this.product__tile.renderTile(product);
      this.products__list.renderTableRow(product);
    });
  }

  clearProducts() {
    this.products__list.tableBody.innerHTML = "";
    this.product__tile.tilesContainer.innerHTML = "";
  }

  toggleModal(productId) {
    this.modalElement.classList.toggle("show__modal");
    productId && this.modal.setInputsValue(productId);
  }

  submitEdit(formData) {
    const index = this.modal.productIndex;
    const editingProduct = products__data[index];
    const newValue = formData;

    products__data[index] = {
      ...editingProduct,
      ...newValue,
    };
    this.renderProducts(products__data);
  }
}
