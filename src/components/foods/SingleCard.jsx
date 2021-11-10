import React, {useContext, useEffect} from 'react';
import MainContext from '../../structure/contexts/mainContext';


const SingleCard = ({foodToShow, handleShowSingleFoodModal}) => {
    const {handleToggleToList} = useContext(MainContext);

    const setHeartIconColor = ()=>{
        let heartIcon = document.getElementById(`heartIcon${foodToShow.id}`);
        if(foodToShow.isItInFav && heartIcon){
            heartIcon.style.color = 'red';
        }else{
            heartIcon.style.color = 'var(--white)';
        }
    }
    const setCartIconColor = ()=>{
        let cartIcon = document.getElementById(`cartIcon${foodToShow.id}`);   
        if(foodToShow.isItInCart && cartIcon){
            cartIcon.style.color = 'green';
        }else{
            cartIcon.style.color = 'var(--white)';
        }
    }

    useEffect(()=>{
        setHeartIconColor();
        setCartIconColor();
    });

    return ( 
        <div className="card offset-2 col-8 offset-sm-0 col-sm-6 col-md-4 col-lg-3">
            <img className="card-img-top cardImage"
            src={foodToShow.photo} alt=""
            name={foodToShow.id}
            onClick={(e)=>handleShowSingleFoodModal(e)}/>
            <div className="card-body cardElement">
                <h2 className="card-title">{foodToShow.name}</h2>
                <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{foodToShow.price}<small>تومان</small></h4>
                <div style={{marginTop: '10px',
            height: '35px'}}>
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
                </div>
            </div>
        </div>
    );
}
 
export default SingleCard;