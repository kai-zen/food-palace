import React, {useContext, useState} from 'react'
import SearchResults from './SearchResults';
import MainContext from '../../structure/contexts/mainContext';
import NoResults from '../../others/NoResults';

const Section4 = () => {
    const {allFoods} = useContext(MainContext);

    const [filteredFoods, setFilteredFoods] = useState([]);
    
    const handleSearch = (searchWord) => {
        const notFilteredFoods = [...allFoods];        
        let afterFilterFoods = notFilteredFoods.filter(notFilteredFood => notFilteredFood.name.includes(searchWord));
        setFilteredFoods(afterFilterFoods);
    }

    const whatToRender = () => {
        if (filteredFoods.length === 24 || filteredFoods.length === 0) {
            return <NoResults/>;
        }else{
            return (
                <SearchResults filteredFoods={filteredFoods} allFoods={allFoods}/>
            );
        }
    }

    return ( 
    <div id="div4">
        <div className="container">
            <form id="searchForm" className='row'>
                <input type="text" id="d4SearchInput" onChange={(e) => handleSearch(e.target.value)} placeholder="دنبال چی میگردی؟..." className='offset-1 col-10 offset-md-2 col-md-8'/>
                <button className="btn btn-dark rounded-circle offset-1 offset-md-2" type="submit">
                    <i className="fas fa-search" />
                </button>
            </form>
            <div className="row">
               {whatToRender()} 
            </div>
        </div>
    </div>
     );
}
 
export default Section4;