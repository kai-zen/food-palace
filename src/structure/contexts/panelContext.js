import { createContext } from "react";

const PanelContext = createContext({
    handleDeleteFood: () => {},
});

export default PanelContext;