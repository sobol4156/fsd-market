<script setup lang="ts">
import type { IconProps } from '@/shared/types';

import type { SpritesMap } from './sprite.h';

const props = defineProps<IconProps<keyof SpritesMap>>();
</script>

<template>
  <svg class="icon" :width="w" :height="h">
    <use
      :xlink:href="`/sprite/${props.type}.svg#${props.name}`"
    />
  </svg>
</template>

<style scoped lang="scss">
.icon {
  @apply ease-linear duration-100 pointer-events-none;
}
</style>