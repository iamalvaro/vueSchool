<script setup>
//useState is used to create variable with state (reactive refs) across multiple pages
// const isLoggedIn = useState("isLoggedIn", () => false);
//isLoggedIn triggers global function found in composables
// const isLoggedIn = useIsLoggedIn();

//No need to import useUser since it is has been defined as an auto import in nuxt.config.ts
// import { useUser } from "/stores/User";

//both useState and composable functions are substituted by the pinia store in this case to achieve functions with global scope
const user = useUser();

definePageMeta({
  layout: "plain",
});
//Login function set to work for composable functions
// const login = () => {
//   isLoggedIn.value = true;
//   useRouter().push("/");
// };

//Same login function set to work with pinia store -- COMMENTED --Now this function lives directly inside the pinia store
// const login = () => {
//   user.isLoggedIn = true;
//   useRouter().push("/");
// };
</script>
<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label for="">
      Username
      <input type="text" />
    </label>
    <label for="">
      Password
      <input type="password" />
    </label>
    <button>Login</button>
  </form>
</template>
