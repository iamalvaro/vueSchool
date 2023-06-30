//composables allow us to create state with global scope with an auto imported function -- common practice to call useState from a composable, not the pages/components themselves -- we are able to type and provide the key for that state in one place 
export const useIsLoggedIn = () => 
    useState<boolean>("isLoggedIn", () => false);
