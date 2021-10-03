import React, {useEffect} from 'react'

const SingleFood = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(scrollToTop, []);
    return ( 
        <div id="singleFoodComponentParent">
            <div id="singleFoodComponent" className="container">
                <img src="Images/d35.jpg" alt="" />
                <div id="singleFoodParagraphs">
                    <h1>استیک گوساله</h1>
                    <p>محتویات:<br/>ررنمئبیریبکئنبکنمبریبرکئیررکیبئنمکبریبکئذیبنئکئکنمیبذبلذبذل</p>
                    <p>قیمت: 20000 تومان</p>
                    <p>تعداد سفارشات: 28 بار</p>
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