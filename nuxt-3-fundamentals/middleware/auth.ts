export default defineNuxtRouteMiddleware((to, from) => {   
    // const userIsLoggedIn = false;
    const user = useUser();
    if(!user.isLoggedIn){
        //Option 1 to abort navigation if user is not authorised
        // return abortNavigation(
        //     "You must be logged in to access this page."
        // );
        //Option 2 - redirect user to login page
        return navigateTo({path: "/login"})
    } 
})