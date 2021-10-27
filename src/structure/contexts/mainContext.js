import { createContext } from "react";

const MainContext = createContext({
    allFoods: [],
    setAllFoods: () => {},
    sonatiFoods: [],
    fastfoods: [],
    giahiFoods: [],
    favoriteFoods: [],
    cartFoods: [],
    handleToggleToList: () => {},
    handleCalculater: () => {},
});

export default MainContext;