import React, {Fragment, useState} from 'react';
import { Modal } from 'react-bootstrap';
import SingleFoodModal from '../../components/SingleFoodModal';
import NoResults from '../../others/NoResults';
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

    const whatToRender = () => {
        if (filteredFoods.length === 24 || filteredFoods.length === 0) {
            return <NoResults/>;
        }else{
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
    }

    

    return (
        <Fragment>
            {whatToRender()}
        </Fragment>
     );
}
 
export default SearchResults;