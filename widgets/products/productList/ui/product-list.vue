<script setup lang="ts">
  import { productCard } from '~/entities/product';
</script>

<template>
  <div class="product-list">
    <template v-for="card in 20">
      <productCard/>
    </template>
  </div>
</template>

<style scoped lang="scss">
.product-list{
  @apply grid gap-[32px];
  grid-template-columns: repeat(4, minmax(200px, 350px));
  
}
</style>