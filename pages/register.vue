<script lang="ts" setup>
import {useAuthStore} from "~/stores/authStore";

useHead({
  title: 'Register'
})

definePageMeta({
  middleware: ['sanctum-guest']
})

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
})

const authStore = useAuthStore();

async function handleRegister() {
  const {error} = await authStore.register(form.value);

  if (error.value === null) {
    reloadNuxtApp({
      path: '/dashboard'
    })
    return
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="form.name">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="form.password">
      </div>
      <div>
        <label for="password_confirmation">Password Confirmation</label>
        <input type="password" name="password_confirmation" id="password_confirmation"
               v-model="form.password_confirmation">
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
