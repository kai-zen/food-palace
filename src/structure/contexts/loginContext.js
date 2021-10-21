import { createContext } from "react";

const LoginContext = createContext({
    handleSignUp: () => {},
    handleLogin: () => {},
    redirectToHome: false,
    setRedirectToHome: () => {},
    users: [],
    loggedInUser: null,
});

export default LoginContext;