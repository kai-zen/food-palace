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

    const handleUpdateFood = (id, data) => {
        let i = 0;
        while(true){
            if(context.allFoods[i].id === parseInt(id)){
                const copyAllFoods = [...context.allFoods]
                copyAllFoods[i].name = data.name;
                copyAllFoods[i].price = data.price;
                copyAllFoods[i].category = data.category;
                context.setAllFoods(copyAllFoods);
                break;
            }else{
              ++i;
            }
        }
        
    }

    return (
        <PanelContext.Provider value={{
            handleDeleteFood: handleDeleteFood,
            handleAddFood: handleAddFood,
            handleUpdateFood: handleUpdateFood
        }}>
            {props.children}
        </PanelContext.Provider>
    );
}
 
export default PanelState;