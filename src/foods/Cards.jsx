import React, {useState, useContext} from 'react';
import { Modal } from 'react-bootstrap';
import SingleFoodModal from '../components/SingleFoodModal';
import MainContext from '../structure/contexts/mainContext';
import SingleCard from './SingleCard';

const Cards = ({foodsToShow}) => {
    const {allFoods} = useContext(MainContext);

    const [showSingleFoodModal, setShowSingleFoodModal] = useState(false);
    const [clickedFoodIndex, setClickedFoodIndex] = useState()

    const handleShowSingleFoodModal = (event)=>{
        setClickedFoodIndex(event.target.name);
        setShowSingleFoodModal(true)
    }

    return ( 
        <div className="row">
            {foodsToShow.map(foodToShow =>(
                <SingleCard foodToShow={foodToShow} handleShowSingleFoodModal={handleShowSingleFoodModal}/>
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

            