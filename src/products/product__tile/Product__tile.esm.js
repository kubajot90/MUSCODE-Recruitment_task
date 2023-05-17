export class Product__tile {
  constructor() {
    this.appContainer = document.getElementById("container");
    // this.renderTiles(this.products__data);
  }

  calculateDiscount(product) {
    const { discountPrice, price } = product;

    const discount = discountPrice
      ? `${Math.round((price - discountPrice) / (price / 100))}%`
      : "";
    return discount;
  }

  createTile(product) {
    const { discountPrice, price, name, image, currency } = product;

    const tile = document.createElement("div");
    tile.setAttribute("class", "tile product__tile");

    tile.innerHTML = `
      <header class="tile__header">
          <h3 class="tile__h3">${name}</h3>
      </header>
      <div class="product__img-box" style="background-image: url(${image});"></div>
      <span class="product__discount-price" >${discountPrice} ${currency}</span>
      <span class="product__price" >${price} ${currency}</span>
      <span class="product__discount-label">${this.calculateDiscount(
        product
      )}</span>
    `;
    return tile;
  }

  renderTile(product) {
    this.appContainer.appendChild(this.createTile(product));
  }
}
