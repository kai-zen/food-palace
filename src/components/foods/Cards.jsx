import React, {useState, useContext} from 'react';
import { Modal } from 'react-bootstrap';
import MainContext from '../../structure/contexts/mainContext';
import SingleCard from './SingleCard';
import SingleFoodModal from './../../modals/SingleFoodModal';

const Cards = ({foodsToShow}) => {
    const {allFoods} = useContext(MainContext);

    const [showSingleFoodModal, setShowSingleFoodModal] = useState(false);
    const [clickedFoodIndex, setClickedFoodIndex] = useState()

    const handleShowSingleFoodModal = (event)=>{
        let i=0
        while(true){
            if(allFoods[i].id === parseInt(event.target.name)){
                setClickedFoodIndex(i);
                break;
            }else{
                ++i;
            }
        }
        setShowSingleFoodModal(true);
    }

    return ( 
        <div className="row">
            {foodsToShow.map(foodToShow =>(
                <SingleCard foodToShow={foodToShow} handleShowSingleFoodModal={handleShowSingleFoodModal} allFoods={allFoods}/>
            ))}
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSingleFoodModal}>
                <SingleFoodModal setShowSingleFoodModal={setShowSingleFoodModal} foodInfo={allFoods[clickedFoodIndex]} setClickedFoodIndex={setClickedFoodIndex}/>
            </Modal>
        </div>
     );
}
 
export default Cards;

            