import React, {Fragment, useContext, useEffect} from 'react';
import Footer from '../../../others/Footer';
import MainContext from '../../../structure/contexts/mainContext';
import Foods from './../Foods';

const Cart = () => {
    useEffect(()=>{
        document.title = 'سبد خرید'
    })

    const {cartFoods, handleCalculater} = useContext(MainContext);
    return (
    <Fragment>
        <div className='container'> 
            <Foods foodsToShow={cartFoods} titleOfThisMenu='سبد خرید' renderFooterOrNot={false} />
            <div id="calculater">
                <p>مجموع قیمت:</p>
                <p id="priceResult">{handleCalculater()} تومان</p>
                <button type="button" className='btn btn-warning' id='calculateResult'>
                    پرداخت
                </button>
            </div>
        </div>
        <Footer/>
    </Fragment>
     );
}
 
export default Cart;