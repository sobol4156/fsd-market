<script setup lang="ts">
import { LayoutMain } from "~/widgets/layouts";
import { RegisterForm } from "~/features/auth";

definePageMeta({
  middleware: "auth"
});
</script>

<template>
  <LayoutMain>
    <div class="container flex flex-col justify-center mt-[50px]">
      <h1 class="text-center text-[32px]">Sign Up</h1>
      <RegisterForm />
    </div>
  </LayoutMain>
</template>
