import React, {useEffect} from 'react';
import Title from './Title';
import Cards from '../ThirdSection/Cards';

const Foods = ({foodsToShow, titleOfThisMenu}) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(scrollToTop, []);
    return ( 
        <div className="container" id="foodsComponent">
            <Title titleOfThisMenu={titleOfThisMenu}/>
            <Cards foodsToShow={foodsToShow}/>
        </div>
     );
}
 
export default Foods;