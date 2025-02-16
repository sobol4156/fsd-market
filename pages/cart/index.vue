<script setup lang="ts">
import { LayoutMain } from "~/widgets/layouts";
import { Order, Wallet } from "~/entities/cart";
import { useCartStore } from "~/entities/cart";
import type { Product } from "~/entities/product";

const cartStore = useCartStore();
const { orderItems } = storeToRefs(cartStore);

onMounted(() => {
  if (!cartStore.orderItems?.length) cartStore.getOrderItems();
});

const deleteOrder = (id: number) => {
  const cartKey = "cart-products";
  const orders = JSON.parse(localStorage.getItem(cartKey) || "[]");

  const filtered = orders.filter((el: Product) => id !== el.id);

  cartStore.setOrderItems(filtered);
  localStorage.setItem(cartKey, JSON.stringify(filtered));
};
</script>

<template>
  <LayoutMain>
    <div class="container">
      <h1 class="cart-page__title">Your orders</h1>
      <div class="cart-page__grid">
        <div class="cart-page__orders">
          <Order
            v-for="order in orderItems"
            :key="order.id"
            :order="order"
            @delete-order="deleteOrder"
          />
        </div>
        <aside class="cart-page__wallet">
          <Wallet />
        </aside>
      </div>
    </div>
  </LayoutMain>
</template>

<style scoped lang="scss">
.cart-page {
  &__title {
    @apply text-[50px];
  }
  &__grid {
    @apply grid gap-[40px];
    grid-template-columns: 1fr 350px;
    grid-template-areas: "orders wallet";

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "orders"
        "wallet";
      grid-template-rows: auto auto;
    }
  }
  &__orders {
    @apply w-full;
    grid-area: orders;
  }
  &__wallet {
    grid-area: wallet;
  }
}
</style>
