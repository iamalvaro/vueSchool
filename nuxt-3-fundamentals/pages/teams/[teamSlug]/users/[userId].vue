<script setup>
const route = useRoute();
const message = computed(
  () =>
    `I'm on team ${route.params.teamSlug} and my user ID is ${route.params.userId}`
);
</script>

<template>
  <div>
    <p>
      {{ message }}
    </p>
  </div>
</template>
