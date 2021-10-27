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
        let i=0
        while(true){
            if(allFoods[i].id == event.target.name){
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
                <SingleFoodModal setShowSingleFoodModal={setShowSingleFoodModal} foodInfo={allFoods[clickedFoodIndex]} clickedFoodIndex={clickedFoodIndex}/>
            </Modal>
        </div>
     );
}
 
export default Cards;

            