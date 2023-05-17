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
      (e) => this.submitEdit(e)
    );
    this.renderProducts(products__data);
    this.modalElement = document.getElementById("modal");
    // this.addListener();
  }

  //   addListener() {
  //     this.modalElement.addEventListener("click", () => this.toggleModal());
  //     this.modalElement.removeEventListener("click", () => this.toggleModal());
  //   }

  renderProducts(products) {
    products.forEach((product) => {
      this.product__tile.renderTile(product);
      this.products__list.renderTableRow(product);
    });
  }

  toggleModal(productId) {
    this.modalElement.classList.toggle("show__modal");
    productId && this.modal.setInputsValue(productId);
  }

  submitEdit(e) {
    e.preventDefault();
    console.log("submit");
  }
}
