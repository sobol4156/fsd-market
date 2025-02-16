<script setup lang="ts">
import { Icon } from "~/shareds/ui";
import type { Product } from "~/entities/product";
import type { DeleteEmit } from "../../model";

const props = defineProps<{ order: Product }>();
defineEmits<DeleteEmit>();
</script>

<template>
  <div class="order">
    <img
      class="order__img"
      :src="props.order.images[0].src"
      :alt="props.order.images[0].alt"
    />
    <h4 class="order__title">{{ props.order.title }}</h4>
    <span class="order__price"
      >{{ props.order.newPrice }}$ <del>{{ props.order.oldPrice }}$</del></span
    >
    <Icon
      class="order__icon"
      name="x"
      type="action"
      :w="40"
      :h="40"
      @click="$emit('delete-order', props.order.id)"
    />
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
  &__icon {
    @apply fill-[white] p-2 rounded-[50%] cursor-pointer transition-colors;

    &:hover {
      @apply bg-[#292929]
    }
    &:active {
      @apply bg-[#2e2e2e]
    }
  }
}
</style>
