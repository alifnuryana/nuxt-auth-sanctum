<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum-auth']
})
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
