let cart = [];

export const addToCart = (product, button) => {
  if (button.classList.contains("added")) return;

  cart.push(product);
  renderCart();

  button.classList.add("added");
  button.textContent = "Added";
};

export const renderCart = () => {
  const modalCartItems = document.getElementById("cart-modal-items");
  const modalCartTotal = document.getElementById("cart-modal-total");

  if (modalCartItems && modalCartTotal) {
    modalCartItems.innerHTML = cart
      .map((item) => `<li>${item.title} - $${item.price}</li>`)
      .join("");
    modalCartTotal.textContent = `Total: $${cart
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2)}`;
  }
};
