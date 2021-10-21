import React, {useState, useContext, useEffect} from 'react';
import { Redirect } from 'react-router';
import MainContext from '../../structure/contexts/mainContext';

const Cards = ({foodsToShow}) => {
    const {handleToggleToList, cartFoods, favoriteFoods} = useContext(MainContext);
    
    const [clickedFoodId,setClickedFoodId] = useState();
    const [goToSingleFood, setGoToSingleFood] = useState(false);
    const redirectToSingleFood = (event) => {        
        setGoToSingleFood(true);
        setClickedFoodId(event.target.name);
    };

    useEffect(()=>{
        foodsToShow.map(foodToShow => {
            for(let i=0; i < favoriteFoods.length; i++){
                if(foodToShow.id === favoriteFoods[i].id){
                    document.getElementById(`heartIcon${foodToShow.id}`).style.color = 'red';
                }
            };
            for(let i=0; i < cartFoods.length; i++){
                if(foodToShow.id === cartFoods[i].id){
                    document.getElementById(`cartIcon${foodToShow.id}`).style.color = 'green';
                }
            };
        })
    });

    return ( 
        <div className="row">
            {foodsToShow.map(foodToShow =>(
                <div className="card offset-2 col-8 offset-sm-0 col-sm-6 col-md-4 col-lg-3">
                    <img className="card-img-top cardImage" name={foodToShow.id}
                    src={`Images/${foodToShow.category}/${foodToShow.name}.jpg`} alt=""
                    onClick={redirectToSingleFood}/>
                    <div className="card-body cardElement">
                        <h2 className="card-title">{foodToShow.name}</h2>
                        <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{foodToShow.price}<small>تومان</small></h4>
                        <div className='mt20'>
                        <p className="iconStyle d3IconStyle" >
                            <span className="fas fa-heart" id={`heartIcon${foodToShow.id}`} onClick={(event)=>{
                                handleToggleToList(event.target, foodToShow.id, true, true)
                            }}/>
                        </p>                       
                        <p className="iconStyle d3IconStyle" >
                            <span className="fas fa-shopping-cart" id={`cartIcon${foodToShow.id}`} onClick={(event)=>{
                                handleToggleToList(event.target, foodToShow.id, false, true)
                            }}/>
                        </p>
                        <p className="iconStyle d3IconStyle" onClick={redirectToSingleFood}>
                            <span className="fas fa-info" />
                        </p>
                        </div>
                    </div>
                    {goToSingleFood ? <Redirect
                        to={{
                            pathname: `/singleFood/${clickedFoodId}`,
                            state: {key: clickedFoodId}
                        }}
                        /> : null
                    }
                </div>
            ))}
        </div>
     );
}
 
export default Cards;

            