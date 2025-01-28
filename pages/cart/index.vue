<script setup lang="ts">
import { LayoutMain } from "~/widgets/layouts";
import { Order, Wallet } from "~/entities/cart";

const MOCK = [
  {
    id: 13,
    images: [
      {
        src: "/knifes/butterfly-knife-blue.png",
        alt: "Картинка",
      },
    ],
    title: "Butterfly Knife",
    oldPrice: 169,
    newPrice: 150,
    rating: 2,
  },
  {
    id: 16,
    images: [
      {
        src: "/guns/ak47-1.png",
        alt: "Картинка",
      },
    ],
    title: "AK47 Elite Build",
    oldPrice: 20,
    newPrice: 18,
    rating: 1,
  },
  {
    id: 17,
    images: [
      {
        src: "/guns/awp-dragon-lore.png",
        alt: "Картинка",
      },
    ],
    title: "AWP Dragon Lore",
    oldPrice: 1500,
    newPrice: 1400,
    rating: 5,
  },
  {
    id: 18,
    images: [
      {
        src: "/guns/m4a4-howl.png",
        alt: "Картинка",
      },
    ],
    title: "M4A4 Howl",
    oldPrice: 1300,
    newPrice: 1200,
    rating: 5,
  },
  {
    id: 19,
    images: [
      {
        src: "/guns/glock-fade.png",
        alt: "Картинка",
      },
    ],
    title: "Glock Fade",
    oldPrice: 300,
    newPrice: 280,
    rating: 4,
  },
];
</script>

<template>
  <LayoutMain>
    <div class="container">
      <h1 class="cart-page__title">Your orders</h1>
      <div class="cart-page__grid">
        <div class="cart-page__orders">
          <Order v-for="order in MOCK" :key="order.id" :order="order" />
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
