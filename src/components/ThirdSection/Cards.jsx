import React from 'react';
import { withRouter } from 'react-router';

const Cards = ({history, foodsToShow}) => {
    const redirectToSingleFood = () => {
        history.push("/singleFood");
    }
    return ( 
        <div className="row">
            {foodsToShow.map(foodToShow =>(
                <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                    <img className="card-img-top cardImage" src={`Images/${foodToShow.category}/${foodToShow.name}.jpg`} alt=""/>
                    <div className="card-body cardElement">
                        <h2 className="card-title">{foodToShow.name}</h2>
                        <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{foodToShow.price}<small>تومان</small></h4>
                        <div style={{marginTop: '20px'}}>
                        <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                        <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                        <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default withRouter(Cards);

            