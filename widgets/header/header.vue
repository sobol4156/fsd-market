<script setup lang="ts">
import { Icon } from '@/shared/ui/icons';
</script>

<template>
  <div class="header container">
    <div class="header__left">
      Logo
    </div>
    <div class="header__right">
      <Icon class="header__profile" name="profile" type="info" :w="24" :h="24" />
      <Icon class="header__cart" name="shopping-cart" type="info" :w="24" :h="24" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header{
  @apply flex justify-between;
  &__left{
    cursor: pointer;
  }
  &__right{
    @apply flex gap-[10px]
  }

  &__profile{

  }
  &__cart{
    @apply fill-[white]
}
}
</style>