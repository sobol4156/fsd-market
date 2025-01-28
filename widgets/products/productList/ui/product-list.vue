<script setup lang="ts">
import { ProductCard } from "~/entities/product";
import Pagination from "~/shared/ui/pagination/pagination.vue";
import { useProductStore, type Product } from "~/entities/product/model";
import { SkeletonProduct } from "~/shared/ui/skeletons";

const storeProduct = useProductStore();
const currentPage = ref<number>(1);
const countItemsOnPage: number = 16;

onServerPrefetch(async () => {
  await checkingStore();
});
onMounted(async () => {
  await checkingStore();
});

const products = computed(() => {
  return storeProduct.productList?.slice(
    -countItemsOnPage + currentPage.value * countItemsOnPage,
    countItemsOnPage * currentPage.value
  );
});

const pages = computed(() => {
  if (storeProduct.productList) {
    return Math.ceil(storeProduct.productList?.length / countItemsOnPage);
  }
  return 0
});

const checkingStore = async () => {
  try {
    if (!storeProduct.productList?.length) {
      const { data, error } = await useFetch<Product[]>("/api/products");
      if (error.value) {
        console.error("Failed to fetch products:", error.value);
        return;
      }
      if (data.value) {
        storeProduct.setProductList(data.value);
      }
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
  }
};
</script>

<template>
  <div class="product-list">
    <template v-if="products">
      <ProductCard v-for="card in products" :key="card.id" :product="card" />
    </template>
    <template v-else>
      <SkeletonProduct v-for="i in 16" />
    </template>
  </div>
  <Pagination :pages="pages" :currentPage="currentPage" @changePage="(page) => currentPage = page"/>
</template>

<style scoped lang="scss">
.product-list {
  @apply grid gap-[32px] py-[32px];
  grid-template-columns: repeat(4, minmax(200px, 336px));
}

@media (max-width: 1200px) {
  .product-list {
    grid-template-columns: repeat(3, minmax(200px, 336px));
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, minmax(200px, 336px));
  }
}

@media (max-width: 576px) {
  .product-list {
    @apply flex flex-col gap-[16px];
  }
}
</style>
