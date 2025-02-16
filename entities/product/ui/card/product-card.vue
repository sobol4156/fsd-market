<template>
  <div class="product-card" >
    <Button v-if="!InBasket" class="product-card__overlay" @click="addToCart" >В КОРЗИНУ</Button>
    <Button v-else class="product-card__overlay" @click="removeItem" >УБРАТЬ ИЗ КОРЗИНЫ</Button>
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
import { ImagesSwiper, RatingStars } from "~/shareds/ui";
import { EAppPixelSize } from "~/shareds/lib/types/app";
import type { Product } from "~/entities/product";
import { useCartStore } from "~/entities/cart";
import { Button } from "~/shareds/ui";

const props = defineProps<{ product: Product }>();
const cartStore = useCartStore();

const InBasket = computed(() => {
  return cartStore.orderItems.some((el) => el.id === props.product.id);
});

const addToCart = () => {
  cartStore.pushOrderItems(props.product);
};

const removeItem = () => {
  cartStore.removeOrderItem(props.product);
};
</script>

<style scoped lang="scss">
.product-card {
  @apply relative h-auto flex flex-col p-[10px] gap-[10px] bg-[--color-black-700] justify-between rounded-[15px] transition-transform overflow-hidden;

  @media (hover: hover) {
    &:hover {
      @apply scale-[1.02];
    }
  }

  &:active {
    @apply scale-[0.98];
  }
}

.product-card__overlay {
  @apply absolute inset-0 flex items-center justify-center bg-black text-white text-lg font-bold opacity-0 transition-opacity rounded-[15px];
}

.product-card:hover .product-card__overlay {
  @apply opacity-50 cursor-pointer;
}
</style>
