<script setup lang="ts">
interface IButton {
  disabled?: boolean;
}

const props = withDefaults(defineProps<IButton>(), {
  disabled: false
});
</script>

<template>
  <button class="button" :disabled="props.disabled">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
.button {
  @apply p-[10px] w-full rounded-[10px] text-white bg-[--color-black-800] transition-colors;

  &:hover {
    @apply bg-[--color-black-700];
  }
  &:active {
    @apply bg-[--color-black-600];
  }
}
</style>
