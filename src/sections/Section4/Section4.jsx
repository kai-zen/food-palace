import React, {useContext, useState} from 'react'
import SearchResults from './SearchResults';
import MainContext from '../../structure/contexts/mainContext';
import './section4.css'

const Section4 = () => {
    const {allFoods} = useContext(MainContext);

    const [filteredFoods, setFilteredFoods] = useState([]);

    
    const handleSearch = (searchWord) => {
        const notFilteredFoods = [...allFoods];        
        let afterFilterFoods = notFilteredFoods.filter(notFilteredFood => notFilteredFood.name.includes(searchWord));
        setFilteredFoods(afterFilterFoods);
    }

    return ( 
    <div id="div4">
        <div className="container">
            <form id="searchForm" className='row'>
                <input type="text" id="d4SearchInput" onChange={(e) => handleSearch(e.target.value)} placeholder="دنبال چی میگردی؟..." className='offset-1 col-10 offset-sm-2 col-sm-8'/>
                <button className="btn btn-dark rounded-circle offset-1 offset-sm-2" type="submit">
                    <i className="fas fa-search" />
                </button>
            </form>
            <SearchResults filteredFoods={filteredFoods} allFoods={allFoods}/>
        </div>
    </div>
     );
}
 
export default Section4;