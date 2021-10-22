import React, {useContext, useEffect} from 'react';
import MainContext from '../../structure/contexts/mainContext';
import Foods from './Foods';

const Cart = () => {
    useEffect(()=>{
        document.title = 'سبد خرید'
    })

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