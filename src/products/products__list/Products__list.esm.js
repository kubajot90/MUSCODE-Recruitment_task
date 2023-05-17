export class Products__list {
  constructor() {
    this.tableBody = document.getElementById("table-body");
    this.productsCounter = 0;
  }

  createTableRow(product) {
    this.productsCounter++;

    const discountPrice = product.discountPrice ? product.discountPrice : "";

    const row = this.tableBody.insertRow();
    row.innerHTML = `
             <td>${this.productsCounter}</td>
             <td>${product.name}</td>
             <td>${discountPrice}</td>
             <td>${product.price}</td>
             <td>${product.currency}</td>
     `;

    return row;
  }

  // renderProducts(products) {
  //   products.forEach((product) => {
  //     this.createTableRow(product);
  //   });
  // }
  renderTableRow(product) {
    this.createTableRow(product);
  }
}
