<script setup lang="ts">
import { Icon, Button } from "~/shareds/ui";

const props = defineProps<{ pages: number; currentPage: number }>();
const emit = defineEmits(["changePage"]);

const visibleBtnPages = computed(() => {
  const arrayPages: number[] = [];

  for (let i = 1; i < props.pages; i++) {
    arrayPages.push(i);
  }

  const centerPages = () => {
    if (props.currentPage <= 4) {
      return arrayPages.slice(1, 5);
    } else if (props.pages - 4 < props.currentPage) {
      return arrayPages.slice(props.pages - 5, props.pages);
    } else {
      return arrayPages.slice(props.currentPage - 2, props.currentPage + 1);
    }
  };

  return [...centerPages()];
});

const changePage = (page: number) => {
  emit("changePage", page);
};
</script>

<template>
  <div class="pagination">
    <span>{{ `Page ${currentPage} of ${pages}` }}</span>
    <div class="pagination__btns">
      <Button
        :disabled="currentPage === 1"
        class="pagination__btn"
        @click="changePage(currentPage - 1)"
      >
        <Icon
          class="pagination__icon"
          name="caret-left"
          type="action"
          :w="24"
          :h="24"
        />
      </Button>

      <Button class="pagination__btn" @click="changePage(1)">1</Button>
      <div class="pagination__dots" v-if="currentPage >= 5">. . .</div>

      <template v-for="numberPage in visibleBtnPages" :key="numberPage">
        <Button class="pagination__btn" @click="changePage(numberPage)">{{
          numberPage
        }}</Button>
      </template>

      <div class="pagination__dots" v-if="currentPage < pages - 3">. . .</div>
      <Button class="pagination__btn" @click="changePage(pages)">{{
        pages
      }}</Button>

      <Button
        class="pagination__btn"
        :disabled="currentPage === pages"
        @click="changePage(currentPage + 1)"
      >
        <Icon
          class="pagination__icon"
          name="caret-right"
          type="action"
          :w="24"
          :h="24"
        />
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  @apply mb-[50px];

  &__btns {
    @apply flex items-end gap-[5px];
  }

  &__btn {
    @apply max-w-[45px];
  }

  &__icon {
    @apply fill-white;
  }
}
</style>
