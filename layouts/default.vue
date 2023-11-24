<script lang="ts" setup>
import {useAuthStore} from "~/stores/authStore";

const authStore = useAuthStore();

async function handleLogout() {
  await authStore.logout()
}
</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink v-if="!authStore.isLoggedIn" to="/register">Register</NuxtLink>
      <NuxtLink v-if="!authStore.isLoggedIn" to="/login">Login</NuxtLink>
      <NuxtLink v-if="authStore.isLoggedIn" to="/dashboard">Dashboard</NuxtLink>
      <NuxtLink v-if="!authStore.isLoggedIn" to="/guest">Guest Only</NuxtLink>
    </nav>
    <main>
      <pre>
        {{ authStore.user }}
      </pre>
      <button @click="handleLogout" v-if="authStore.isLoggedIn">Logout</button>
      <slot/>
    </main>
  </div>
</template>

<style scoped></style>
