import React, {useEffect, useContext} from 'react'
import MainContext from './../../structure/contexts/mainContext';
import Foods from './Foods';

const FavoriteFoods = () => {
    const context = useContext(MainContext)

    useEffect(()=>{
        document.title = 'غذاهای مورد علاقه'
    })
    return ( 
        <Foods foodsToShow={context.favoriteFoods} titleOfThisMenu='مورد علاقه ها'/>
     );
}
 
export default FavoriteFoods;