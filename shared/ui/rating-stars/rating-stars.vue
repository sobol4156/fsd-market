<template>
  <div class="rating-stars">
    <Icon
      v-for="i of starSystem"
      :key="i"
      :name="i <= formatRating ? 'star-fill' : 'star-empty'"
      type="info"
      class="fill-[yellow]"
      :w="16"
      :h="16"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@/shared/ui/icons";
import { starSystem } from "./model";
import { EAppPixelSize } from "@/shared/lib/types/app";

const props = withDefaults(
  defineProps<{
    rating: number;
    size?: EAppPixelSize;
  }>(),
  {
    size: EAppPixelSize.sm,
  }
);

const formatRating = computed(() => Math.round(props.rating));
</script>

<style lang="scss">
.rating-stars{
  @apply flex gap-[5px];
}
</style>
