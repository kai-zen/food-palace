import { createContext } from "react";

const PanelContext = createContext({
    handleDeleteFood: () => {},
    handleAddFood: () => {},
    handleUpdateFood: () => {}
});

export default PanelContext;