import React, {useEffect, useContext} from 'react';
import MainContext from '../ContextAPI';

const SingleFood = ({location}) => {
    const context = useContext(MainContext);
    const favoriteFoods = context.favoriteFoods;
    const cartFoods = context.cartFoods;

    let handleToggleToList = context.handleToggleToList;
    let thisFoodIndex = location.state.key;
    let thisFood = context.allFoods[thisFoodIndex];

    useEffect(() => {
        for(let i=0; i < favoriteFoods.length; i++){
            if(thisFood.id === favoriteFoods[i].id){
                document.getElementById(`heartIcon${favoriteFoods[i].id}`).style.color = 'red';
            }  
        };
        for(let i=0; i < cartFoods.length; i++){
            if(thisFood.id === cartFoods[i].id){
                document.getElementById(`cartIcon${cartFoods[i].id}`).style.color = 'green';
            }
        };
        window.scrollTo(0, 0);
    }, []);


        


    return ( 
        <div id="singleFoodComponentParent">
            <div id="singleFoodComponent" className="container">
                <img
                src={`/Images/${thisFood.category}/${thisFood.name}.jpg`}
                alt="" />
                <div id="singleFoodParagraphs">
                    <h1>{thisFood.name}</h1>
                    <p>محتویات:<br/>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون</p>
                    <p>قیمت: {thisFood.price} تومان</p>
                    <p>تعداد سفارشات: {thisFood.orderQuantity} بار</p>
                    <div className="singleFoodIcons">
                        <span id={`heartIcon${thisFood.id}`}>
                            <i className="fas fa-heart" onClick={(event)=>handleToggleToList(event.target, thisFoodIndex, true, true)}>
                            </i>
                        </span>
                        <span id={`cartIcon${thisFood.id}`}>
                            <i className="fas fa-shopping-cart" onClick={(event)=>handleToggleToList(event.target, thisFoodIndex, false, true)}>
                            </i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SingleFood;