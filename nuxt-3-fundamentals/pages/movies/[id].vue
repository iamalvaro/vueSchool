<script setup>
const route = useRoute();
//useAsyncData + fetch has shorthand method called useFetch(), the key seems to have no apparent use with this method either
const { data, error } = await useFetch(
  `https://www.omdbapi.com/?apikey=8743ad18&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Error", "Poster"],
    key: `https://www.omdbapi.com/?apikey=8743ad18&i=${route.params.id}`,
  }
);
if (error.value) {
  showError({ statusCode: 500, statusMessage: "Oh noes!" });
}
if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page not found" });
}
//unique key provided as parameter for useAsyncData not longer necessary in Nuxt it seems
// const { data } = useAsyncData(
//   `/movies/${route.params.id}`,
//   () => {
//     return $fetch(
//       `http://www.omdbapi.com/?apikey=8743ad18&i=${route.params.id}`
//     );
//   },
//   {
//Transform is a functions that accepts data returned from the callback function, we can then manipulate that data in any way we desire before returning it for use in the page
// transform(data) {
//   return {
//     Plot: data.Plot,
//     Title: data.Title,
//   };
// },
//If you want to transform data into an object,theres a shorthand method to do so with the pick option

//     pick: ["Plot", "Title"],
//   }
// );
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>
<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
</template>
