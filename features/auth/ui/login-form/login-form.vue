<script setup lang="ts">
import { Input, Button } from "~/shareds/ui";
import type { ApiAuth, LoginData } from "~/features/auth/model";

const formData = reactive<LoginData>({
  email: "",
  password: "",
  login: true
});

const onInput = (value: string, field: keyof typeof formData) => {
  formData[field] = value as never;
};

const handlerSubmit = async (e: Event) => {
  e.preventDefault();

  const response = await $fetch<ApiAuth>(`/api/auth`, {
    method: "POST",
    body: formData,
    credentials: "include"
  });

  if (response.status) {
    navigateTo("/profile");
  }
};
</script>

<template>
  <div class="login-form">
    <form @submit="handlerSubmit">
      <Input
        label="Email"
        name="email"
        @update:model-value="(val) => onInput(val, 'email')"
      />
      <Input
        label="Password"
        name="password"
        @update:model-value="(val) => onInput(val, 'password')"
      />
      <Button class="mt-[12px]">Sign In</Button>
    </form>
    <div class="mt-[12px] text-[14px]">
      <p>New to Fake Web Store?</p>
      <NuxtLink to="/register" class="login-link"> Create an account</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  @apply max-w-[440px] mx-auto p-[24px] rounded-[12px] border-[1px] border-[--border-login];
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.login-link {
  @apply text-[--link] decoration-[none] transition-colors duration-300;

  &:hover {
    @apply text-[--link-hover];
  }
}
</style>
