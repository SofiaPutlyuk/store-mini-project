
import { addToCart } from "./cart.js";

export const renderProducts = (products) => {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description.substring(0, 100)}...</p>
      <p class="price">$${product.price}</p>
    `;

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.classList.add("add-to-cart");

    addButton.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(product, addButton);
    });

    productCard.appendChild(addButton);
    productList.appendChild(productCard);
  });
};
