import { Product__tile } from "./product__tile/Product__tile.esm.js";
import { Products__list } from "./products__list/Products__list.esm.js";
// import {Modal} from './modal/Modal.esm.js';
import { products__data } from "./products__data.js";

export class Products {
  constructor() {
    this.products__list = new Products__list(products__data);
    this.product__tile = new Product__tile(products__data);
    // this.modal = new Modal();
    this.renderProducts(products__data);
  }

  renderProducts(products) {
    products.forEach((product) => {
      this.product__tile.renderTile(product);
      this.products__list.renderTableRow(product);
    });
  }
}
