<script setup lang="ts">
import type {
  CheckboxEmits,
  CheckboxProps,
} from "~/shared/types";
import { Icon } from "~/shared/ui";

defineProps<CheckboxProps>();
defineEmits<CheckboxEmits>();
</script>

<template>
  <label class="checkbox">
    <div :class="['checkbox__icon', selected && 'checkbox__icon--active']">
      <Icon v-if="selected" name="check" type="action" :h="16" :w="16" />
    </div>
    <span>
      <slot></slot>
    </span>
    <input type="checkbox" @change="$emit('select')"/>
  </label>
</template>
<style lang="scss" scoped>

.checkbox {
  @apply flex items-center gap-[8px] cursor-pointer select-none;

  &__icon {
    @apply w-[18px] h-[18px] m-[3px] text-white rounded-[4px] duration-100 bg-[--background-checkbox] flex items-center justify-center;


    &:hover:not(.checkbox__icon--active) {
      @apply bg-[--background-checkbox];
    }

    &--active {
      @apply bg-[blue];
      svg {
        @apply fill-[white];
      }
    }
  }

  input {
    @apply hidden;
  }
}
</style>