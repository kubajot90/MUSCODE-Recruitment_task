export const products__data = [
  {
    name: "iPhone 6s Plus 16GB",
    discountPrice: 649,
    price: 1000,
    currency: "$",
    imageUrl: "../assets/img1.png",
  },
  {
    name: "iPad Pro 32GB",
    discountPrice: 600,
    price: 800,
    currency: "$",
    imageUrl: "../assets/img2.png",
  },
  {
    name: "MacBook Pro",
    discountPrice: "",
    price: 800,
    currency: "PLN",
    imageUrl: "../assets/img3.png",
  },
];

const generateIds = () => {
  products__data.forEach((product) => {
    const id = Math.random();
    product.id = `${id}`;
  });
};

generateIds();
