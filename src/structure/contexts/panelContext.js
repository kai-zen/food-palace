import { createContext } from "react";

const PanelContext = createContext({
    handleDeleteFood: () => {},
    handleAddFood: () => {},
});

export default PanelContext;