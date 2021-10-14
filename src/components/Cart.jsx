import React, {useContext} from 'react';
import MainContext from './../ContextAPI';
import Foods from './FoodsComponent/Foods';



const Cart = () => {
    const {cartFoods, handleCalculater} = useContext(MainContext);
    return (
        <div className='container'> 
            <Foods foodsToShow={cartFoods} titleOfThisMenu='سبد خرید'/>
            <div id="calculater">
                <h2>:مجموع قیمت</h2>
                <p id="priceResult">{handleCalculater()} تومان</p>
                <button type="button" className='btn btn-warning' id='calculateResult'>
                    پرداخت
                </button>
            </div>
        </div>
     );
}
 
export default Cart;