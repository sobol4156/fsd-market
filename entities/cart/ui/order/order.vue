<script setup lang="ts">
import type { Product } from "~/entities/product";

const props = defineProps<{
  order: Product
}>();
</script>

<template>
  <div class="order">
    <img class="order__img" :src="props.order.images[0].src" :alt="props.order.images[0].alt">
    <h4 class="order__title">{{ props.order.title }}</h4>
    <span class="order__price">{{props.order.newPrice}}$ <del>{{props.order.oldPrice}}$</del></span>
  </div>
</template>

<style scoped lang="scss">
.order{
  @apply flex gap-[20px] w-full;
  &__img{
    @apply w-[120px] h-[120px] object-contain;
  }
  &__title{
    @apply text-[40px]
  }
  &__price{
    @apply text-[28px]
  }
}
</style>