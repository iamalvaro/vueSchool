export default defineEventHandler((event) => {
  return {
    //These functions come from server engine H3(powers Nuxt API routes)
    //getMethod attaches API method to string
    // message: getMethod(event) + " Hello world"
    //getQuery converts query variables in an object 
    // message: getQuery(event)
    //visit Nitro(JS server deployment) and H3 docs to learn more about Nuxt API routes
    //https://www.jsdocs.io/package/h3#package-index-functions
    //https://nitro.unjs.io/
    //https://nuxt.com/docs/guide/directory-structure/server
    message: "Hello Mama I'm in GET"
  }
})
