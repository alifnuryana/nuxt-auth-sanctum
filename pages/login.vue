<script lang="ts" setup>
import {useAuthStore} from "~/stores/authStore";

useHead({
  title: 'Login'
})

definePageMeta({
  middleware: ['sanctum-guest']
})

const form = ref({
  email: "",
  password: "",
})
const authStore = useAuthStore();

async function handleLogin() {
  const {error} = await authStore.login(form.value)

  if (error.value === null) {
    await navigateTo('/dashboard', {replace: true});
    return;
  }
}
</script>

<template>
  <div>
    Page: Login
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="form.password">
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
