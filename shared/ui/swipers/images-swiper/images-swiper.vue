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

interface IImage {
  id: number,
  src: string,
  alt: string
}

defineProps<{
  images: IImage[]
}>()
</script>