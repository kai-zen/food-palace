import React, {useContext} from 'react';
import PanelContext from './../structure/contexts/panelContext';
import MainContext from './../structure/contexts/mainContext';

const PanelState = props => {
    const context = useContext(MainContext);

    const handleDeleteFood = (id) => {
        const newAllFoods = context.allFoods.filter(food => food.id !== id);
        context.setAllFoods(newAllFoods);
    }

    return (
        <PanelContext.Provider value={{
            handleDeleteFood: handleDeleteFood,
        }}>
            {props.children}
            {console.log(context.allFoods)}
        </PanelContext.Provider>
    );
}
 
export default PanelState;