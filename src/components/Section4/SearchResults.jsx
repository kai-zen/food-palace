import React, {Fragment, useState, useContext} from 'react';
import { Redirect } from 'react-router';
import MainContext from '../../ContextAPI';

const SearchResults = ({filteredFoods}) => {
    const context = useContext(MainContext);
    const allFoods = context.allFoods;

    const [clickedFoodId,setClickedFoodId] = useState();
    const [goToSingleFood, setGoToSingleFood] = useState(false);
    const redirectToSingleFood = (id) => {        
        setGoToSingleFood(true);
        setClickedFoodId(id);
    };
    return (
        <Fragment>
            {filteredFoods.map(filteredFood => (
                <div className='d4SearchResult' onClick={() => redirectToSingleFood(filteredFood.id)}>
                    <img src={`Images/${filteredFood.category}/${filteredFood.name}.jpg`} alt=""/>
                    <h2 className="card-title">{`${filteredFood.category} / ${filteredFood.name}`}</h2>
                    <button className='btn'>بیشتر...</button>
                </div>  
            ))}
            {goToSingleFood ? <Redirect
                        to={{
                            pathname: `/singleFood/${allFoods[clickedFoodId].id}`,
                            state: {key: allFoods[clickedFoodId].id}
                        }}
                        /> : null
                    }        
        </Fragment>
     );
}
 
export default SearchResults;