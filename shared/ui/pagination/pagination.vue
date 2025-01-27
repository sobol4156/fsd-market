<script setup lang="ts">
import { Icon, Button} from "~/shared/ui";

</script>

<template>
  <div class="pagination">
    <Button>
      <Icon class="pagination__icon" name="caret-left" type="action" :w="24" :h="24" />
    </Button>

    <Button>
      <Icon class="pagination__icon" name="caret-right" type="action" :w="24" :h="24" />
    </Button>
  </div>
</template>

<style scoped lang="scss">
.pagination{
  &__icon{
    @apply fill-white
  }
}
</style>