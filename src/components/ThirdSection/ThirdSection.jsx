import React from 'react'
import Cards from './Cards';
import Categories from './../SecondSection/Categories';

const ThirdSection = () => {
    const categories = ['اقتصادی ها', 'محبوب ها', 'گران ترین ها'];
    return ( 
        <div id="div3" className="container">
            <Categories categories={categories} name={'div3'}/>
            <Cards/>
        </div>
     );
}
 
export default ThirdSection;