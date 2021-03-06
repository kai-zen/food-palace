import React, {Fragment, useState} from 'react';
import { Modal } from 'react-bootstrap';
import SingleFoodModal from './../../modals/SingleFoodModal';
import SingleSearchResult from './SingleSearchResult';

const SearchResults = ({filteredFoods, allFoods}) => {
    const [showSingleFoodModal, setShowSingleFoodModal] = useState(false);
    const [clickedFoodIndex, setClickedFoodIndex] = useState()

    const handleShowSingleFoodModal = (event)=>{
        let i=0
        while(true){
            if(allFoods[i].id === parseInt(event.target.id)){
                setClickedFoodIndex(i);
                break;
            }else{
                ++i;
            }
        }
        setShowSingleFoodModal(true);
    }

    return (
        <Fragment>
            {filteredFoods.map(filteredFood => (
                <SingleSearchResult filteredFood={filteredFood} handleShowSingleFoodModal={handleShowSingleFoodModal}/>  
            ))}
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSingleFoodModal}>
                <SingleFoodModal setShowSingleFoodModal={setShowSingleFoodModal} foodInfo={allFoods[clickedFoodIndex]} setClickedFoodIndex={setClickedFoodIndex}/>
            </Modal> 
        </Fragment>
     );
}
 
export default SearchResults;