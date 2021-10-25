import React, {useState, useContext, useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import SingleFoodModal from '../SingleFoodModal';
import MainContext from '../../structure/contexts/mainContext';

const Cards = ({foodsToShow}) => {
    const {handleToggleToList, cartFoods, favoriteFoods, allFoods} = useContext(MainContext);

    const [showSingleFoodModal, setShowSingleFoodModal] = useState(false);
    const [clickedFoodIndex, setClickedFoodIndex] = useState()

    const handleShowSingleFoodModal = (event)=>{
        setClickedFoodIndex(event.target.name);
        setShowSingleFoodModal(true)
    }

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
            return true
        })
    });

    return ( 
        <div className="row">
            {foodsToShow.map(foodToShow =>(
                <div className="card offset-2 col-8 offset-sm-0 col-sm-6 col-md-4 col-lg-3">
                    <img className="card-img-top cardImage"
                    src={`Images/${foodToShow.category}/${foodToShow.name}.jpg`} alt=""
                    name={foodToShow.id}
                    onClick={(e)=>handleShowSingleFoodModal(e)}/>
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
                        </div>
                    </div>
                </div>
            ))}
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSingleFoodModal}>
                <SingleFoodModal setShowSingleFoodModal={setShowSingleFoodModal} foodInfo={allFoods[clickedFoodIndex]}/>
            </Modal>
        </div>
     );
}
 
export default Cards;

            