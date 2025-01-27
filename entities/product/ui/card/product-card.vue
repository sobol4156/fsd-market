<template>
  <div>
    <ImagesSwiper
      v-if="true"
      class="product-card__swiper"
      :images="mockImages"
    />

    <div class="product-card__info">
      <span>15$ <del>19$</del></span>
      <h4>Falchion Knife</h4>
      <RatingStars :rating="3" :size="EAppPixelSize.xs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagesSwiper } from "~/shared/ui/swipers";
import { EAppPixelSize } from "@/shared/lib/types/app";
import { RatingStars } from "~/shared/ui/rating-stars";

const mockImages = [
  {
    id: 1,
    src: "https://steamuserimages-a.akamaihd.net/ugc/1931506893351769772/52CC7C2E9AA09EAE62004F073EF60875E9D95037/",
    alt: "Картинка",
  },
];
</script>
