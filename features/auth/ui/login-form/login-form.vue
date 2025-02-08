<script setup lang="ts">
import { Input, Button } from '~/shared/ui';

const formData = reactive({
  email: '',
  password: ''
})

const onInput = (value:string, field: keyof typeof formData) => {
  formData[field] = value
}

const handlerSubmit = async(e:Event) =>{
  e.preventDefault()
  console.log(formData)
  const response = await $fetch(`/api/auth`, {
    method: 'POST',
    body: formData 
  })
  console.log(response)
}
</script>

<template>
  <div class="login-form">
    <form  @submit="handlerSubmit">
      <Input label="Email" name="email" @update:model-value="(val) => onInput(val, 'email')"/>
      <Input label="Password" name="password" @update:model-value="(val) => onInput(val, 'password')"/>
      <Button class="mt-[12px]">Sign Up</Button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-form{
  @apply max-w-[440px] mx-auto p-[24px] rounded-[12px] border-[1px] border-[--border-login];
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>