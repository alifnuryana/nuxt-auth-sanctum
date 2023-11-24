<script lang="ts" setup>
useHead({
  title: 'Guest'
})

definePageMeta({
  middleware: ['sanctum-guest']
})
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
