
import { fetchCategories, fetchProducts } from "./api.js";
import { renderProducts } from "./products.js";
import { initializeFilters } from "./filters.js";
import { initializeSearch } from "./search.js";
import { initializeCartModal } from "./modals.js";

let allProducts = [];

const initializeApp = async () => {
  try {
    console.log("Initializing app...");
    allProducts = await fetchProducts();
    console.log("Products fetched successfully:", allProducts);

    if (allProducts?.length) {
      renderProducts(allProducts);
      console.log("Fetching categories...");
      await initializeFilters(allProducts);
      console.log("Filters initialized successfully.");
      initializeSearch(allProducts);
    } else {
      console.warn("No products available to display.");
      document.getElementById("product-list").innerHTML =
        "<p>No products found.</p>";
    }
  } catch (error) {
    console.error("Error initializing app:", error.message);
    document.getElementById(
      "product-list"
    ).innerHTML = `<p class="error-message">Error: ${error.message}</p>`;
  }
};

const initializeLoadProductsButton = () => {
  const loadProductsBtn = document.getElementById("load-products");
  if (loadProductsBtn) {
    loadProductsBtn.addEventListener("click", initializeApp);
    console.log("Load Products button initialized.");
  } else {
    console.error("Load Products button not found in DOM.");
  }
};

const initialize = () => {
  initializeLoadProductsButton();
  initializeCartModal();
};

document.addEventListener("DOMContentLoaded", initialize);
