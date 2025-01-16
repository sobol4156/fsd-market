<script setup lang="ts">
import { Icon } from '@/shared/ui/icons';
</script>

<template>
  <div class="header">
    <div class="header__left">
      <Icon class="header__logo" name="logo" type="brand" :w="70" :h="70" />
    </div>
    <div class="header__right">
      <Icon class="header__profile" name="profile" type="info" :w="30" :h="30" />
      <Icon class="header__cart" name="shopping-cart" type="info" :w="30" :h="30" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header{
  @apply flex justify-between border-b-[1px] px-[40px];

  &__right{
    @apply flex gap-[10px] items-center;
  }

  &__profile{
    @apply cursor-pointer;
  }

  &__logo{
    @apply fill-[white] flex items-center cursor-pointer;
  }
  &__cart{
    @apply fill-[white] cursor-pointer;
}
}
</style>