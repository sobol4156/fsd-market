<script setup lang="ts">
import { LayoutMain } from '~/widgets/layouts';
import { ProductList } from '~/widgets/products';
import Pagination from "~/shared/ui/pagination/pagination.vue";
</script>

<template>
  <LayoutMain>

    <div class="container">
      <ProductList></ProductList>
      <Pagination />
    </div>

  </LayoutMain>
</template>