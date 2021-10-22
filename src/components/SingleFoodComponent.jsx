import React, {useEffect, useContext} from 'react';
import MainContext from '../structure/contexts/mainContext';

const SingleFood = ({location}) => {
    const context = useContext(MainContext);
    const favoriteFoods = context.favoriteFoods;
    const cartFoods = context.cartFoods;
    const handleToggleToList = context.handleToggleToList;

    let thisFood = context.allFoods[location.state.key];

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
    });

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        document.title = 'اطلاعات یک غذا'
    })

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
                            <i className="fas fa-heart" onClick={(event)=>handleToggleToList(event.target, thisFood.id, true, true)}>
                            </i>
                        </span>
                        <span id={`cartIcon${thisFood.id}`}>
                            <i className="fas fa-shopping-cart" onClick={(event)=>handleToggleToList(event.target, thisFood.id, false, true)}>
                            </i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SingleFood;