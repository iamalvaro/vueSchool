export default defineNuxtRouteMiddleware((to, from) => {   
    console.log(to, from, "from named middleware");   
})
