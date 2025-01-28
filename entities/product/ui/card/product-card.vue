<template>
  <div class="product-card" @click="addToCart">
    <ImagesSwiper
      v-if="true"
      class="product-card__swiper"
      :images="props.product.images"
    />

    <div class="product-card__info">
      <span
        >{{ props.product.newPrice }}$
        <del>{{ props.product.oldPrice }}$</del></span
      >
      <h4>{{ props.product.title }}</h4>
      <RatingStars :rating="props.product.rating" :size="EAppPixelSize.xs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagesSwiper, RatingStars } from "~/shared/ui";
import { EAppPixelSize } from "~/shared/lib/types/app";
import type { Product } from "~/entities/product";
import { useCartStore } from "~/entities/cart";

const props = defineProps<{ product: Product }>();
const cartStore = useCartStore();

const addToCart = () => {
  const cartKey = "cart-products";

  const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");

  cart.push(props.product);

  localStorage.setItem(cartKey, JSON.stringify(cart));
  cartStore.pushOrderItems(props.product);
};
</script>

<style scoped lang="scss">
.product-card {
  @apply h-auto flex flex-col p-[10px] gap-[10px] bg-[--color-black-700] justify-between rounded-[15px];
}
</style>
