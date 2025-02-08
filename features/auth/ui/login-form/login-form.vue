<script setup lang="ts">
import { Input, Button } from '~/shared/ui';

function onInput(value:string){
  console.log(value)
}

function handlerSubmit(){
  console.log()
}
</script>

<template>
  <div class="login-form">
    <form  @submit="handlerSubmit">
      <Input label="Email" name="email" @update:model-value="onInput"/>
      <Input label="Password" name="password" @update:model-value="onInput"/>
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