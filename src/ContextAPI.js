import { createContext } from "react";

const MainContext = createContext({
    allFoods: [],
    sonatiFoods: [],
    fastfoods: [],
    giahiFoods: [],
    favoriteFoods: [],
    cartFoods: [],
    handleToggleToList: () => {},
    handleCalculater: () => {},
    showMenusModal: false,
    showUserModal: false,
    handleShowMenusModal: () => {},
    handleShowUserModal: () => {},
    handleSignUp: () => {},
    userInfo: []
});

export default MainContext;