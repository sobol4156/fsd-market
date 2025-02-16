import { defineStore } from "pinia";
import type { Product } from "~/entities/product";

export const useCartStore = defineStore("cart", () => {
  const orderItems = ref<Product[]>([]);

  const getOrderItems = () => {
    const products = localStorage.getItem("cart-products") || "[]";
    orderItems.value = JSON.parse(products);
  };

  const pushOrderItems = (item: Product) => {
    const products = JSON.parse(localStorage.getItem("cart-products") || "[]");

    products.push(item);
    localStorage.setItem("cart-products", JSON.stringify(products));

    orderItems.value = products;
  };

  const setOrderItems = (items: Product[]) => {
    orderItems.value = items;
    localStorage.setItem("cart-products", JSON.stringify(orderItems.value));
  };

  const removeOrderItem = (item: Product) => {
    const updatedCart= orderItems.value.filter(el => el.id !== item.id);
    orderItems.value = updatedCart;

    localStorage.setItem("cart-products", JSON.stringify(updatedCart));
  }

  return {
    orderItems,
    getOrderItems,
    setOrderItems,
    pushOrderItems,
    removeOrderItem
  };
});
