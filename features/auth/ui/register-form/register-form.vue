<script setup lang="ts">
import { Input, Button } from "~/shared/ui";
import Checkbox from "~/shared/ui/checkbox/checkbox.vue";

interface FormData {
  email: string;
  gender?: string;
  password: string;
  confirmPassword?: string;
}

const formData = reactive<FormData>({
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
});

const onInput = (value: string, field: keyof typeof formData) => {
  formData[field] = value;
};

const handlerSubmit = async (e: Event) => {
  e.preventDefault();
  console.log(formData);
  const response = await $fetch(`/api/auth`, {
    method: "POST",
    body: formData,
  });
  console.log(response);
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

      <div class="my-[10px]">
        <Checkbox
        :selected="formData.gender === 'male'"
        @select="() => (formData.gender = 'male')"
      >
        Male
      </Checkbox>
      <Checkbox
        :selected="formData.gender === 'female'"
        @select="() => (formData.gender = 'female')"
      >
        Female
      </Checkbox>
      </div>

      <Input
        label="Password"
        name="password"
        @update:model-value="(val) => onInput(val, 'password')"
      />
      <Input
        label="Confirm password"
        name="password"
        @update:model-value="(val) => onInput(val, 'confirmPassword')"
      />
      <Button class="mt-[12px]">Sign Up</Button>
    </form>
    <div class="mt-[12px] text-[14px]">
      <p>
        Already have an account?
        <NuxtLink to="/login" class="register-link"> Log in</NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  @apply max-w-[440px] mx-auto p-[24px] rounded-[12px] border-[1px] border-[--border-login];
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.register-link {
  @apply text-[--link] decoration-[none] transition-colors duration-300;

  &:hover {
    @apply text-[--link-hover];
  }
}
</style>
