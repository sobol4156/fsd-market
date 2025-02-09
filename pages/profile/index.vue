<script setup lang="ts">
import { LayoutMain } from "~/widgets/layouts";
import { useAuth } from "~/shared/lib/use";

const { user, fetchUser } = useAuth();

onServerPrefetch(async () => {
  if (!user.value) await fetchUser();
});

onBeforeMount(async () => {
  if (!user.value) await fetchUser();
});

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <LayoutMain>
    <div class="container">
      <h1 class="profile-page__title">Your Profile</h1>
      <span v-if="user">Hello {{ user.email }}</span>
    </div>
  </LayoutMain>
</template>

<style scoped lang="scss"></style>
