import React from 'react'

const SingleSearchResult = ({filteredFood, handleShowSingleFoodModal}) => {
    return ( 
        <div
        className='d4SearchResult'
        id={filteredFood.id}
        onClick={(e)=>handleShowSingleFoodModal(e)}>
            <img src={filteredFood.photo} alt="" style={{
                pointerEvents: 'none'
            }}/>
            <h2 className="card-title" style={{
                pointerEvents: 'none'
            }}>{`${filteredFood.category} / ${filteredFood.name}`}</h2>
            <button className='btn' style={{
                pointerEvents: 'none'
            }}>بیشتر...</button>
        </div>
     );
}
 
export default SingleSearchResult;