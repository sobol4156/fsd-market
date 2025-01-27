<template>
    <div
      v-for="(item, i) of images"
      :key="i"
      class="images-swiper__slide"
      lazy="true"
    >
      <img
        :src="item.src"
        :alt="item.alt"
        loading="lazy"
      />
    </div>
</template>

<script setup lang="ts">
import type { Images } from '~/entities/product/model';

defineProps<{
  images: Images[]
}>()
</script>