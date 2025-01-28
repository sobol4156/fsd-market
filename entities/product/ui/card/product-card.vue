<template>
  <div class="product-card">
    <ImagesSwiper
      v-if="true"
      class="product-card__swiper"
      :images="props.product.images"
    />

    <div class="product-card__info">
      <span>{{props.product.newPrice}}$ <del>{{props.product.oldPrice}}$</del></span>
      <h4>{{props.product.title}}</h4>
      <RatingStars :rating="props.product.rating" :size="EAppPixelSize.xs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagesSwiper, RatingStars } from "~/shared/ui";
import { EAppPixelSize } from "~/shared/lib/types/app";
import type { Product } from "~/entities/product";

const props = defineProps<{ product: Product }>();
</script>

<style scoped lang="scss">
.product-card{
  @apply  h-auto flex flex-col p-[10px] gap-[10px] bg-[--color-black-700] justify-between rounded-[15px];

  &__info{
    
  }
}
</style>