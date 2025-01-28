<script setup lang="ts">
import { Button } from '~/shared/ui';
</script>

<template>
  <div class="wallet">
    <span class=""> Goods, {{2}} pcs.</span>
    <div>Total {{20}}$ <del>{{25}}$</del></div>
    <div>
      <span>[]</span>
      <span>Pay with cryptocurrency</span>
    </div>
    <Button>To Pay</Button>
  </div>
</template>

<style scoped lang="scss">
.wallet{
  @apply sticky top-0 flex flex-col gap-[10px] p-[20px] bg-[--background-cart];
}
</style>