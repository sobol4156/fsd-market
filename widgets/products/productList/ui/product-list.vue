<script setup lang="ts">
import { ProductCard } from "~/entities/product";
</script>

<template>
  <div class="product-list">
    <template v-for="card in 20">
      <ProductCard />
    </template>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  @apply grid gap-[32px] py-[32px];
  grid-template-columns: repeat(4, minmax(200px, 336px));
}

@media (max-width: 1200px) {
  .product-list {
    grid-template-columns: repeat(3, minmax(200px, 336px));
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, minmax(200px, 336px));
  }
}

@media (max-width: 576px) {
  .product-list {
    @apply flex flex-col gap-[16px];
  }
}
</style>
