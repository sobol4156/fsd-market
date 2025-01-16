<template>
  <div class="header">
    <div class="header__left">
      Logo
    </div>
    <div class="header__right">
      <span>Профиль</span>
      <span>Корзина</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-between;
  &__left{
    cursor: pointer;
  }
  &__right{
      display: flex;
      gap: 10px;
      *{
        cursor: pointer;
      }
  }
}
</style>