<script setup lang="ts">
import { Button, Checkbox } from "@/shareds/ui";

const selectCheckbox = ref<boolean>(false);
</script>

<template>
  <div class="wallet">
    <span class="wallet__pcs"> Goods, {{ 2 }} pcs.</span>
    <div class="wallet__total">
      Total {{ 20 }}$ <del>{{ 25 }}$</del>
    </div>
    <Checkbox
      :selected="selectCheckbox"
      @select="selectCheckbox = !selectCheckbox"
    >
      Pay with cryptocurrency
    </Checkbox>
    <Button class="wallet__btn">To Pay</Button>
  </div>
</template>

<style scoped lang="scss">
.wallet {
  @apply sticky top-0 flex flex-col gap-[10px] p-[20px] bg-[--background-cart];

  &__accept {
    @apply relative;
  }
}
</style>
