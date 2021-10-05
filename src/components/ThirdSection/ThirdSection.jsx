import React from 'react'
import Cards from './Cards';
import Categories from './../SecondSection/Categories';

const ThirdSection = ({foodsToShow}) => {
    const categories = ['اقتصادی ها', 'محبوب ها', 'گران ترین ها'];
    return ( 
        <div id="div3" className="container">
            <Categories categories={categories} name={'div3'}/>
            <Cards foodsToShow={foodsToShow}/>
        </div>
     );
}
 
export default ThirdSection;