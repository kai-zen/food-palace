import React, {useEffect, useContext, Fragment} from 'react'
import MainContext from '../structure/contexts/mainContext';
import Foods from './Foods';
import Footer from '../others/Footer';

const FavoriteFoods = () => {
    const context = useContext(MainContext)

    useEffect(()=>{
        document.title = 'غذاهای مورد علاقه'
    })
    return (
    <Fragment>
        <Foods foodsToShow={context.favoriteFoods} titleOfThisMenu='مورد علاقه ها' renderFooterOrNot={false}/>
        <Footer/>
    </Fragment> 
     );
}
 
export default FavoriteFoods;