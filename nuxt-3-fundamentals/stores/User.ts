//Autoimports defined in nuxt.confir.ts so no need for imports
// import {defineStore, acceptHMRUpdate } from "pinia";

export const useUser = defineStore("user", {
    state: () => {
        return {
            isLoggedIn: false,
        };
    },
    getters: {},
    actions: {
        login () {
            this.isLoggedIn = true;
            useRouter().push("/");
          } 
    },
});
//Snippet from pinia docs to enable HMR --NOT SURE IF ITS STILL NECESSARY¿?¿?
if (import.meta.hot) {
    import.meta.hot.accept( acceptHMRUpdate(useUser, import.meta.hot));
}