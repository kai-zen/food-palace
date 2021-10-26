import React, {useState} from 'react';
import { orderBy } from 'lodash';
import './section3.css'
import Foods from '../../foods/Foods';

const ThirdSection = ({foodsToShow}) => {
    const categories = ['اقتصادی ها', 'محبوب ها', 'گران ترین ها'];
    const [whichCat, setWhichCat] = useState('0');
    let NewfoodsToShow = [...foodsToShow];
    const manageOrder = () => {
        if(whichCat==='0'){
            NewfoodsToShow = [...orderBy(NewfoodsToShow, 'price', 'asc')];
        }else if(whichCat==='1'){
            NewfoodsToShow = [...orderBy(NewfoodsToShow, 'orderQuantity', 'desc')];
        }else{
            NewfoodsToShow = [...orderBy(NewfoodsToShow, 'price', 'desc')];
        }
        return <Foods foodsToShow={NewfoodsToShow} titleOfThisMenu={null} renderFooterOrNot={false}/>
    }
    return ( 
        <div id="div3" className="container">
            <div className="categoriesElementRow row">
                <div className="categoriesElement offset-1 col-10 offset-md-6 col-md-6 offset-xl-7 col-xl-5">
                    <input type="radio" className="catRadio" defaultChecked name='hii' id="d3cat1" hidden/>
                    <label htmlFor="d3cat1" onClick={()=>setWhichCat('0')}>{categories[0]}</label>
                    <input type="radio" className="catRadio" name='hii' id="d3cat2" hidden/>
                    <label htmlFor="d3cat2" onClick={()=>setWhichCat('1')}>{categories[1]}</label>
                    <input type="radio" className="catRadio" name='hii' id="d3cat3" hidden/>
                    <label htmlFor="d3cat3" onClick={()=>setWhichCat('2')}>{categories[2]}</label>
                </div>
            </div>
            {manageOrder()}
        </div>
     );
}
 
export default ThirdSection;