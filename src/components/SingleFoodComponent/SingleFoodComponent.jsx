import React, {useEffect} from 'react'

const SingleFood = ({location}) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(scrollToTop, []);
    return ( 
        <div id="singleFoodComponentParent">
            <div id="singleFoodComponent" className="container">
                <img
                src={`Images/${location.state.category}/${location.state.name}.jpg`}
                alt="" />
                <div id="singleFoodParagraphs">
                    <h1>{location.state.name}</h1>
                    <p>محتویات:<br/>ررنمئبیریبکئنبکنمبریبرکئیررکیبئنمکبریبکئذیبنئکئکنمیبذبلذبذل</p>
                    <p>قیمت: {location.state.price} تومان</p>
                    <p>تعداد سفارشات: {location.state.orderQuantity} بار</p>
                    <div className="singleFoodIcons">
                        <span><i className="fas fa-heart"></i></span>
                        <span><i className="fas fa-plus"></i></span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SingleFood;