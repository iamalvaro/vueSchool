<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
<template>
  <div>
    <h1>Hello User</h1>
    <p>this is the admin page</p>
  </div>
</template>
