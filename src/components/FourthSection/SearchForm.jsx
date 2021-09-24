import React from 'react'

const SearchForm = () => {
    return ( 
        <form id="searchForm">
          <input type="text" id="d4SearchInput" placeholder="دنبال چی میگردی؟..." />
          <button className="btn btn-dark rounded-circle" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
     );
}
 
export default SearchForm;