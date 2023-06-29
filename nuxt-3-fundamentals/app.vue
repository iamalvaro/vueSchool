<script setup>
useHead({
  // title: "AFDb",
  titleTemplate: (titleChunck) => {
    return titleChunck ? `${titleChunck} - AFDb` : "AFDb";
  },
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
