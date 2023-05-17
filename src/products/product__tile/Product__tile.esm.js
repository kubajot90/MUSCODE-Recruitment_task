export class Product__tile {
  constructor(toggleModal) {
    this.toggleModal = toggleModal;
    this.appContainer = document.getElementById("container");
  }

  calculateDiscount(product) {
    let { price, discountPrice, currency } = product;

    if (discountPrice) {
      product.discount = `${Math.round(
        (price - discountPrice) / (price / 100)
      )}%`;
      discountPrice = `${product.discountPrice} ${currency}`;
    }
  }

  toggleDiscountLabel(product) {
    return product.discountPrice
      ? `
        <span class="product__discount-label">
          ${product.discount}
        </span>
      `
      : "";
  }

  createTile(product) {
    const { discountPrice, price, name, image, currency, id } = product;

    this.calculateDiscount(product);

    const tile = document.createElement("div");
    tile.setAttribute("class", "tile product__tile");
    tile.setAttribute("id", `${id}`);
    tile.addEventListener("click", () => this.toggleModal(id));
    tile.removeEventListener("click", () => this.toggleModal(id));

    tile.innerHTML = `
      <header class="tile__header">
          <h3 class="tile__h3">${name}</h3>
      </header>
      <div class="product__img-box" style="background-image: url(${image});"></div>
      <span class="product__discount-price" >
        ${discountPrice}
      </span>
      <span class='${
        discountPrice ? "product__price line-through" : "product__price"
      }' >${price} ${currency}</span>
      ${this.toggleDiscountLabel(product)}
    `;

    return tile;
  }

  renderTile(product) {
    this.appContainer.appendChild(this.createTile(product));
  }
}
