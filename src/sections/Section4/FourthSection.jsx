import React, {useContext, useState} from 'react'
import SearchResults from './SearchResults';
import MainContext from '../../structure/contexts/mainContext';
import NoResults from '../../others/NoResults';

const FourthSection = () => {
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
            return <SearchResults filteredFoods={filteredFoods}/>;
        }
    }

    return ( 
    <div id="div4">
        <div className="container">
            <form id="searchForm">
            <input type="text" id="d4SearchInput" onChange={(e) => handleSearch(e.target.value)} placeholder="دنبال چی میگردی؟..." />
            <button className="btn btn-dark rounded-circle" type="submit">
                <i className="fas fa-search" />
            </button>
            </form>
            {whatToRender()}
        </div>
    </div>
     );
}
 
export default FourthSection;