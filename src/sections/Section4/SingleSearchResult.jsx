import React from 'react'

const SingleSearchResult = ({filteredFood, handleShowSingleFoodModal})=> {
    return ( 
        <div
        className='offset-1 col-10 offset-md-2 col-md-8 d4SearchResult'
        id={filteredFood.id}
        onClick={(e)=>handleShowSingleFoodModal(e)}>
            <img src={filteredFood.photo} alt="" style={{
                pointerEvents: 'none'
            }}/>
            <h2 className="card-title" style={{
                pointerEvents: 'none'
            }}>{`${filteredFood.category} / ${filteredFood.name}`}</h2>
        </div>
     );
}
 
export default SingleSearchResult;