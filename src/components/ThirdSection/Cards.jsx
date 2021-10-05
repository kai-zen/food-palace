import React, {useState} from 'react';
import { Redirect } from 'react-router';

const Cards = ({history, foodsToShow}) => {
    const [clickedFoodIndex,setClickedFoodIndex] = useState();
    const [goToSingleFood, setGoToSingleFood] = useState(false);
    const redirectToSingleFood = (event) => {        
        setGoToSingleFood(true);
        setClickedFoodIndex(event.target.name);
    };
    return ( 
        <div className="row">
            {foodsToShow.map((foodToShow, index) =>(
                <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3">
                    <img className="card-img-top cardImage" name={index}
                    src={`Images/${foodToShow.category}/${foodToShow.name}.jpg`} alt=""
                    onClick={redirectToSingleFood}/>
                    <div className="card-body cardElement">
                        <h2 className="card-title">{foodToShow.name}</h2>
                        <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{foodToShow.price}<small>تومان</small></h4>
                        <div className='mt20'>
                        <p className="iconStyle d3IconStyle">
                            <span className="fas fa-heart" />
                        </p>
                        <p className="iconStyle d3IconStyle">
                            <span className="fas fa-shopping-cart" />
                        </p>
                        <p className="iconStyle d3IconStyle" onClick={redirectToSingleFood} name={index}>
                            <span className="fas fa-info"/>
                        </p>
                        </div>
                    </div>
                    {goToSingleFood ? <Redirect
                        to={{
                            pathname: "/singleFood",
                            state: foodsToShow[clickedFoodIndex]
                        }}
                        /> : null
                    }
                </div>
            ))}
        </div>
     );
}
 
export default Cards;

            