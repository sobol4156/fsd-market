<template>
  <div
    v-for="(item, i) of images"
    :key="i"
    class="images-swiper__slide"
    lazy="true"
  >
    <img
      class="images-swiper__img"
      :src="item.src"
      :alt="item.alt"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import type { Images } from "~/entities/product";

defineProps<{
  images: Images[];
}>();
</script>

<style scoped lang="scss">
.images-swiper {
  &__slide {
    @apply flex justify-center items-center min-h-[300px] max-h-[300px];
  }

  &__img {
    @apply max-h-[200px];
  }
}
</style>
