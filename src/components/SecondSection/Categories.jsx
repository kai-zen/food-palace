import React from 'react'

const Categories = ({categories}, {name}) => {
    return ( 
        <div className="categoriesElementRow row">
          <div className="categoriesElement offset-1 col-10 offset-md-6 col-md-6 offset-xl-7 col-xl-5">
            <input type="radio" className="catRadio" name={name} id="d2cat1" defaultChecked hidden/>
            <label htmlFor="d2cat1">{categories[0]}</label>
            <input type="radio" className="catRadio" name={name} id="d2cat2" hidden/>
            <label htmlFor="d2cat2">{categories[1]}</label>
            <input type="radio" className="catRadio" name={name} id="d2cat3" hidden/>
            <label htmlFor="d2cat3">{categories[2]}</label>
          </div>
        </div>
     );
}
 
export default Categories;