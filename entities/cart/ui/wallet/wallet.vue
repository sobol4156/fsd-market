<script setup lang="ts">
import { Button, Checkbox } from "@/shareds/ui";
import type { Product } from "~/entities/product";

const props = defineProps<{orders: Product[]}>()

const selectCheckbox = ref<boolean>(false);
const allPrice = computed(() => {
  const newPrice = props.orders.reduce((sum, item) => sum + item.newPrice, 0)
  const oldPrice = props.orders.reduce((sum, item) => sum + item.oldPrice, 0)
  return {
    newPrice,
    oldPrice
  }
})
</script>

<template>
  <div class="wallet">
    <span class="wallet__pcs"> Goods, {{ props.orders.length }} pcs.</span>
    <div class="wallet__total">
      Total {{ allPrice.newPrice }}$ <del>{{ allPrice.oldPrice }}$</del>
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
