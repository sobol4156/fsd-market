<script setup lang="ts">
import type { Product } from "~/entities/product";
import type { DeleteEmit } from "../../model";

const props = defineProps<{
  order: Product;
}>();
defineEmits<DeleteEmit>();
</script>

<template>
  <div class="order" @click="$emit('delete-order', props.order.id)">
    <img
      class="order__img"
      :src="props.order.images[0].src"
      :alt="props.order.images[0].alt"
    />
    <h4 class="order__title">{{ props.order.title }}</h4>
    <span class="order__price"
      >{{ props.order.newPrice }}$ <del>{{ props.order.oldPrice }}$</del></span
    >
  </div>
</template>

<style scoped lang="scss">
.order {
  @apply flex gap-[20px] px-[20px] items-center w-full bg-[--background-cart] mb-[10px];
  &__img {
    @apply w-[120px] h-[120px] object-contain;
  }
  &__title {
    @apply text-[30px];
  }
  &__price {
    @apply text-[28px] ml-auto;
  }
}
</style>
