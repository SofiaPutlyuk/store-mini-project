
import { API_URL } from "./constants.js";

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch products");
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error("Failed to fetch categories");
  return await response.json();
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${API_URL}/category/${category}`);
  if (!response.ok) throw new Error("Failed to fetch products by category");
  return await response.json();
};
