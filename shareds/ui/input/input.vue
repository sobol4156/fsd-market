<script setup lang="ts">
import { useRefValue } from "~/shareds/lib/use";

interface IInput {
  modelValue?: string;
  label?: string;
  name?: string;
  type?: string;
}

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<IInput>(), {
  modelValue: "",
  type: "text"
});

const { value: inputValue, setValue } = useRefValue(props.modelValue);

function onInput(event: Event) {
  const value = getValue(event);
  setValue(value);

  emit("update:modelValue", inputValue.value);
}

function getValue(event: Event) {
  const target = event.target as HTMLInputElement;
  return target.value.trim();
}
</script>

<template>
  <div class="input">
    <label v-if="label && name" class="input__label" :for="name">
      {{ label }}</label
    >
    <div class="input__wrapper">
      <input
        class="input__field"
        :value="modelValue"
        @input="onInput"
        :type="type"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  &__field {
    @apply text-[white] bg-[--background-input] w-full p-[12px_16px] border-[--border-input] rounded-[8px] outline-none text-[16px];
    transition:
      border-color 0.3s ease,
      background-color 0.3s ease;

    &:focus {
      @apply border-[--border-input-focus] bg-[--background-input-focus];
    }

    &::placeholder {
      @apply text-[--text-input-placeholder];
    }

    &:disabled {
      @apply bg-[--background-input-disabled] text-[--text-input-disabled] cursor-not-allowed;
    }
  }
}
</style>
