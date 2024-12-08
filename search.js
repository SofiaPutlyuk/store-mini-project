
import { searchInput } from "./domElements.js";
import { renderProducts } from "./products.js";

export const initializeSearch = (allProducts) => {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });
};
