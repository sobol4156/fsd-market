import { MOCK_PRODUCTS } from "./config/products";

export default defineEventHandler(() => {
  return MOCK_PRODUCTS;
});
