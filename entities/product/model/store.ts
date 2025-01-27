import { defineStore } from "pinia"
import type { Product } from "./types";

export const useProductStore = defineStore(('product'), () => {
  const productList = ref<Product[] | null>(null);
  const setProductList = (products:Product[]) => {
    productList.value = products 
  }
  return {
    productList,
    setProductList
  }
})