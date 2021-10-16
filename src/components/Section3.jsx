import React from 'react'
import Cards from './Common/Cards';

const ThirdSection = ({foodsToShow}) => {
    const categories = ['اقتصادی ها', 'محبوب ها', 'گران ترین ها'];
    return ( 
        <div id="div3" className="container">
            <div className="categoriesElementRow row">
                <div className="categoriesElement offset-1 col-10 offset-md-6 col-md-6 offset-xl-7 col-xl-5">
                    <input type="radio" className="catRadio" defaultChecked name='hii' id="d3cat1" hidden/>
                    <label htmlFor="d3cat1">{categories[0]}</label>
                    <input type="radio" className="catRadio" name='hii' id="d3cat2" hidden/>
                    <label htmlFor="d3cat2">{categories[1]}</label>
                    <input type="radio" className="catRadio" name='hii' id="d3cat3" hidden/>
                    <label htmlFor="d3cat3">{categories[2]}</label>
                </div>
            </div>
            <Cards foodsToShow={foodsToShow}/>
        </div>
     );
}
 
export default ThirdSection;