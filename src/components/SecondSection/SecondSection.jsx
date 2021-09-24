import React from 'react'
import Carousel from './Carousel';
import Categories from './Categories';
import FoodInfo from './FoosInfo';

const SecondSection = () => {
    const categories = ['فست فود', 'سنتی ایرانی', 'گیاهی'];
    return ( 
    <div id="div2">
        <div className="container">
            <Categories categories={categories} name={'div2'}/>
            <div className="row">
                <Carousel/>
                <FoodInfo/>
            </div>
        </div>
    </div>
     );
}
 
export default SecondSection;