import React, {Fragment, useState, useContext} from 'react';
import { Modal } from 'react-bootstrap';
import SingleFoodModal from '../../components/SingleFoodModal';
import MainContext from '../../structure/contexts/mainContext';

const SearchResults = ({filteredFoods}) => {
    const context = useContext(MainContext);
    const allFoods = context.allFoods;

    const [showSingleFoodModal, setShowSingleFoodModal] = useState(false);
    const [clickedFoodIndex, setClickedFoodIndex] = useState()

    const handleShowSingleFoodModal = (event)=>{
        setClickedFoodIndex(event.target.id);
        setShowSingleFoodModal(true)
    }

    return (
        <Fragment>
            {filteredFoods.map(filteredFood => (
                <div
                className='d4SearchResult'
                id={filteredFood.id}
                onClick={(e)=>handleShowSingleFoodModal(e)}
                >
                    <img src={`Images/${filteredFood.category}/${filteredFood.name}.jpg`} alt=""/>
                    <h2 className="card-title">{`${filteredFood.category} / ${filteredFood.name}`}</h2>
                    <button className='btn'>بیشتر...</button>
                </div>  
            ))}
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSingleFoodModal}>
                <SingleFoodModal setShowSingleFoodModal={setShowSingleFoodModal} foodInfo={allFoods[clickedFoodIndex]}/>
            </Modal>        
        </Fragment>
     );
}
 
export default SearchResults;