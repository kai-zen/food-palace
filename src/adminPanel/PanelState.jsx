import React, {useContext} from 'react';
import PanelContext from './../structure/contexts/panelContext';
import MainContext from './../structure/contexts/mainContext';

const PanelState = props => {
    const context = useContext(MainContext);

    const handleDeleteFood = (id) => {
        const newAllFoods = context.allFoods.filter(food => food.id !== id);
        context.setAllFoods(newAllFoods);
    }

    const handleAddFood = (data) => {
        let newAllFoods = [...context.allFoods]
        newAllFoods.push(data);
        context.setAllFoods(newAllFoods);
    }

    return (
        <PanelContext.Provider value={{
            handleDeleteFood: handleDeleteFood,
            handleAddFood: handleAddFood,
        }}>
            {props.children}
        </PanelContext.Provider>
    );
}
 
export default PanelState;