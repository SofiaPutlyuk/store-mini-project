
import { fetchCategories, fetchProductsByCategory } from "./api.js";
import { renderProducts } from "./products.js";
import { categoryFilter, sortFilter } from "./domElements.js";

export const initializeFilters = async (allProducts) => {
  try {
    console.log("Fetching categories...");
    const categories = await fetchCategories();
    console.log("Fetched categories:", categories);

    categoryFilter.innerHTML = `
      <option value="all">All Categories</option>
      ${categories
        .map((category) => `<option value="${category}">${category}</option>`)
        .join("")}
    `;

    categoryFilter.addEventListener("change", async (event) => {
      const selectedCategory = event.target.value;
      if (selectedCategory === "all") {
        renderProducts(allProducts);
      } else {
        const filteredProducts = await fetchProductsByCategory(
          selectedCategory
        );
        renderProducts(filteredProducts);
      }
    });

    sortFilter.addEventListener("change", (event) => {
      const criterion = event.target.value;
      const sortedProducts = [...allProducts].sort((a, b) => {
        if (criterion === "price-low-high") return a.price - b.price;
        if (criterion === "price-high-low") return b.price - a.price;
        return 0;
      });
      renderProducts(sortedProducts);
    });
  } catch (error) {
    console.error("Error initializing filters:", error.message);
  }
};
