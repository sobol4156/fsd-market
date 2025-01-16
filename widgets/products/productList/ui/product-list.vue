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