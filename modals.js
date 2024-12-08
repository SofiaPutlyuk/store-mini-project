
import { cartModal } from "./domElements.js";

export const openCartModal = () => {
  if (cartModal) {
    cartModal.classList.remove("hidden");
  } else {
    console.error("Cart modal element not found in the DOM.");
  }
};

export const closeCartModal = () => {
  if (cartModal) {
    cartModal.classList.add("hidden");
  } else {
    console.error("Cart modal element not found in the DOM.");
  }
};

export const initializeCartModal = () => {
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.querySelector(".cart-close-btn");

  if (openCartBtn) {
    openCartBtn.addEventListener("click", openCartModal);
  } else {
    console.error("Open Cart button not found in the DOM.");
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCartModal);
  } else {
    console.error("Close Cart button not found in the DOM.");
  }
};
