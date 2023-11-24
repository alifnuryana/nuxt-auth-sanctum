<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Nuxt Auth Sanctum` : 'Nuxt Auth Sanctum'
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator/>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
