<template>
  <div class="skeleton-product skeleton">
    <div class="">
      <div class="skeleton-product__img skeleton skeleton-product"></div>
    </div>
    <div class="skeleton-product__text">
      <div class="skeleton-product__price skeleton skeleton--text-sm"></div>
      <div class="skeleton-product__title skeleton skeleton--text-md"></div>
      <div class="skeleton skeleton--text-sm"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skeleton-product {
  @apply relative h-[394px] flex flex-col justify-between p-[10px] gap-[10px];

  &__text {
    @apply flex flex-col gap-[5px];
  }

  &__price {
    @apply w-[50px];
  }
  &__title {
    @apply w-[120px];
  }
  &__img {
    @apply w-full h-[250px] object-cover rounded-[15px];
  }
}
</style>
