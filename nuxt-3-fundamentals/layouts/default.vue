<script setup>
//useState is used to create variable with state (reactive refs) across multiple pages
// const isLoggedIn = useState("isLoggedIn", () => false);
//isLoggedIn triggers global function found in composables
// const isLoggedIn = useIsLoggedIn();
//useUser is defined globally at the user store
const user = useUser();
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/">Home</NuxtLink><NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="http://vueschool.io">Vue School</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <NuxtLink v-else @click.prevent="user.isLoggedIn = false" to="/"
      >Logout</NuxtLink
    >
    <NuxtLink v-if="user.isLoggedIn" to="/admin">Admin</NuxtLink>
    Test
  </nav>
  <slot></slot>
</template>
