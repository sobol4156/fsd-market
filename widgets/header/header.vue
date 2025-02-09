<script setup lang="ts">
import { Icon } from "@/shared/ui/icons";
import { useAuth } from "@/shared/lib/use";

const { user, fetchUser } = useAuth();

onBeforeMount(async () => {
  await fetchUser();
});

const logout = async () => {
  await $fetch("/api/logout", { method: "POST", credentials: "include" });
  navigateTo("/login");
};
</script>

<template>
  <div class="header container">
    <div class="header__left">
      <Icon
        class="header__logo"
        name="logo"
        type="brand"
        :w="70"
        :h="70"
        @click="navigateTo('/')"
      />
    </div>
    <div class="header__right">
      <Icon
        v-if="user"
        class="header__profile"
        name="profile"
        type="info"
        :w="30"
        :h="30"
        @click="navigateTo('/profile')"
      />
      <Icon
        v-else
        class="header__profile"
        name="profile"
        type="info"
        :w="30"
        :h="30"
        @click="navigateTo('/login')"
      />
      <Icon
        class="header__cart"
        name="shopping-cart"
        type="info"
        :w="30"
        :h="30"
        @click="navigateTo('/cart')"
      />
      <Icon
        v-if="user"
        class="header__exit"
        name="exit"
        type="info"
        :w="30"
        :h="30"
        @click="logout"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply flex justify-between border-b-[1px];

  &__right {
    @apply flex gap-[10px] items-center;
  }

  &__profile {
    @apply cursor-pointer fill-[white];
  }

  &__logo {
    @apply fill-[white] flex items-center cursor-pointer;
  }
  &__cart {
    @apply fill-[white] cursor-pointer;
  }
  &__exit {
    @apply fill-[white] cursor-pointer;
  }
}
</style>
