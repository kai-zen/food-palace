import React, {useEffect} from 'react';
import Title from './Title';
import Cards from '../ThirdSection/Cards';

const Foods = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(scrollToTop, []);
    return ( 
        <div className="container" id="foodsComponent">
            <Title/>
            <Cards/>
        </div>
     );
}
 
export default Foods;