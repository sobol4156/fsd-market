import { defineStore } from "pinia";
import type { Product } from "~/entities/product";

export const useCartStore = defineStore("cart", () => {
  const orderItems = ref<Product[]>([]);
  const getOrderItems = () => {
    const products = localStorage.getItem("cart-products") || "[]";
    orderItems.value = JSON.parse(products);
  };
  const pushOrderItems = (item: Product) => {
    orderItems.value.push(item);
  };
  const setOrderItems = (items: Product[]) => {
    orderItems.value = items;
  };

  return {
    orderItems,
    getOrderItems,
    setOrderItems,
    pushOrderItems
  };
});
